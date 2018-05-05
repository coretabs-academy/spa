<template>
  <v-layout row wrap class="quizz-layout">
    <v-flex xs12 lg8 offset-lg2 md8 offset-md2>
      <v-stepper v-model="e1" class="quizz-stepper">
        <v-stepper-header>
          <template v-for="(question, qIndex) in questions">
            <v-stepper-step  :step="qIndex+1" :key="qIndex" :complete="e1 > qIndex+1"></v-stepper-step>
            <v-divider v-if="qIndex + 1 < questions.length" :key="`divider-${qIndex}`"></v-divider>
          </template>
        </v-stepper-header>
        <v-stepper-items>
          <v-card v-show="e1 <= questions.length" flat>
            <p class="question-num py-0">السؤال {{e1}} من {{questions.length}} : {{heading_text}}</p>
          </v-card>
          <template v-for="(question, qIndex) in questions">
            <v-stepper-content :step="qIndex + 1" :key="qIndex">
              <h3 class="question-content">{{question.text}}</h3>
              <v-card color="grey lighten-1" flat>
                <!-- one-correct answer -->
                <v-list three-line subheader>
                  <template v-for="(answer, aIndex) in question.answers">
                    <v-divider></v-divider>
                    <v-list-tile @click="chooseAnswer(question, aIndex)" :key="aIndex">
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
                  <v-divider :key="`divider-${qIndex}`"></v-divider>
                </v-list>
              </v-card>
              <!-- <v-btn color="primary" @click.native="e1 = index +2">test</v-btn> -->
            </v-stepper-content>
          </template>
          <v-card class="btns-control" flat>
            <v-btn v-show="e1 < questions.length" class="r-btn" flat @click="goNext" :disabled="!result || result === results_texts.fail">{{buttons_texts.next}}</v-btn>
            <v-btn v-if="e1 > 0" v-show="questions[e1 - 1].correct.length > 1" class="r-btn" flat @click="checkAnswers(questions[e1 - 1])">{{buttons_texts.confirm}}</v-btn>
            <span class="result-container">
              <span v-show="result" :class="['result', result === results_texts.fail ? 'err' : '']">{{result}}</span>
              <span v-show="result === results_texts.fail" class="hint">{{results_texts.hint}} <span class="circle"><v-icon color="white" size="small">star</v-icon></span></span>
            </span>
          </v-card>
        </v-stepper-items>
      </v-stepper>
    </v-flex>
  </v-layout>
</template>
<script src="./quiz.js"></script>
<style src="./quiz.scss" lang="scss"></style>
