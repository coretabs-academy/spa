<template>
<div v-if="loaded" class="lesson">
   <template v-if="type === '0'">
      <div id="lesson-scrimba" class="lesson-video lesson-scrimba">
         <iframe :src="lesson_content"></iframe>
         <v-tabs :right="$store.state.direction === 'rtl'" icons-and-text v-model="current.tab">
            <v-tab v-for="tab in i18n.video" :key="tab.text">
               {{tab.text}}
               <v-icon>{{tab.icon}}</v-icon>
            </v-tab>
         </v-tabs>
         <v-tabs-items v-model="current.tab">
            <v-tab-item><div v-html="notes_content"></div></v-tab-item>
            <v-tab-item>quotes</v-tab-item>
         </v-tabs-items>
      </div>
   </template>
   <template v-if="type === '1'">
      <div id="lesson-youtube" class="lesson-video lesson-youtube">
         <iframe height="720" :src="lesson_content" frameborder="0" allowfullscreen></iframe>
         <div v-html="notes_content"></div>
      </div>
   </template>
   <template v-if="type === '2'">
      <div id="lesson-markdown" class="lesson-markdown" v-html="lesson_content"></div>
   </template>
   <template v-if="type === '3'">
      <div id="lesson-quiz" class="lesson-quiz">
      <v-layout row wrap class="quizz-layout">
<v-flex xs12 lg8 offset-lg2 md8 offset-md2>
 <v-stepper v-model="e1" class="quizz-stepper" non-linear>
   <v-stepper-header>
      <template v-for="(question, qIndex) in questions">
        <v-stepper-step :class="{'wrong_step': question.wrong, 'true_step': question.true}" :step="qIndex+1" :key="qIndex" :complete="e1 > qIndex+1" edit-icon="check" editable></v-stepper-step>
        <v-divider v-if="qIndex + 1 < questions.length" :key="`divider-${qIndex}`"></v-divider>
      </template>
   </v-stepper-header>
   <v-stepper-items>
      <v-card v-show="e1 <= questions.length" flat>
        <p class="question-num py-0">السؤال {{e1}} من {{questions.length}} : {{heading_text}}</p>
      </v-card>
      <template v-for="(question, qIndex) in questions">
        <v-stepper-content :step="qIndex + 1" :key="qIndex" :class="{checkboxes : (question.correct.length > 1) }">
          <h3 class="question-content">{{question.text}}</h3>
          <v-card color="grey lighten-1" flat>
           <!-- one-correct answer -->
           <v-list three-line subheader>
             <template v-for="(answer, aIndex) in question.answers">
                <v-divider :key="`divider-${aIndex}`"></v-divider>
                <v-list-tile @click="chooseAnswer(question, aIndex)" :key="aIndex" :class="[question.choose.includes(aIndex) && !question.correct.includes(aIndex) && question.correct.length === 1 ? 'wrong_answer' : '' ,question.choose.includes(aIndex) && question.correct.includes(aIndex) && question.correct.length === 1 ? 'true_answer' : '',question.correct.includes(aIndex) && question.correct.length > 1 ? status.right : '']" >
                  <v-list-tile-action>
                    <input type="checkbox" v-model="question.choose" :value="answer" />
                    <span class="checkbox_cont">
                     <span v-show="question.choose.includes(aIndex)" class="checkbox_inner"></span>
                    </span>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{answer}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
             </template>
             <v-divider :key="`divider2-${qIndex}`"></v-divider>
           </v-list>
          </v-card>
          <v-card v-show="result === results_texts.fail" flat>
             <p class="hint-container py-0"><span class="circle"><v-icon color="white" small>lightbulb_outline</v-icon></span> <span class="hint_bold" > تلميح:</span> {{question.hint}}</p>
           </v-card>
        </v-stepper-content>
      </template>
      <v-card class="btns-control" flat>
        <v-btn v-show="e1 < questions.length" class="r-btn" flat @click="goNext" :disabled="!result">{{buttons_texts.next}}</v-btn>
        <v-btn v-if="e1 > 0" v-show="questions[e1 - 1].correct.length > 1" class="r-btn" flat @click="checkAnswers(questions[e1 - 1])">{{buttons_texts.confirm}}</v-btn>
        <v-btn v-show="e1 > 1" class="r-btn" flat @click="goPrev" >{{buttons_texts.pre}}</v-btn>
        <span class="result-container">
          <span v-show="result" :class="['result', result === results_texts.fail ? 'err' : '']">{{result}}</span>
        </span>
      </v-card>
   </v-stepper-items>
 </v-stepper>
</v-flex>
</v-layout>
      </div>
   </template>
   <template v-if="type === '4'">
      <div id="lesson-task" class="lesson-task" v-html="lesson_content"></div>
   </template>
</div>
<div v-else class="progress-container lesson-progress">
   <v-container fluid fill-height>
      <v-layout column align-center justify-center>
         <v-progress-circular indeterminate :size="$store.state.progress.size" :width="$store.state.progress.width"></v-progress-circular>
         <div class="progress-text text-center">{{$store.state.progress.lessonText}}...</div>
      </v-layout>
   </v-container>
</div>
</template>
<script src="./lesson.js"></script>
<style src="./lesson.scss" lang="scss"></style>
