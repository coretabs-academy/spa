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
              <v-tab-item>
                <v-container id="have-question" fluid grid-list-xl>
                  <v-layout row wrap align-center justify-right>
                    <img :src="$store.state.forumLogo" alt="forum-logo icon">
                    <div class="text">
                      <strong>هل لديك أي سؤال بخصوص هذا الدرس؟</strong>
                      <div>بإمكانك طرح أسئلتك أو منافشة الدرس مع زملائك والمدربين في المنتدى <a href="https://forums.coretabs.net" target="_blank">من هنا</a></div>
                    </div>
                  </v-layout>
                </v-container>
              </v-tab-item>
          </v-tabs-items>
        </div>
    </template>
    <template v-if="type === '1'">
        <div id="lesson-youtube" class="lesson-video lesson-youtube">
          <iframe :src="lesson_content" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <v-tabs :right="$store.state.direction === 'rtl'" icons-and-text v-model="current.tab">
              <v-tab v-for="tab in i18n.video" :key="tab.text">
                {{tab.text}}
                <v-icon>{{tab.icon}}</v-icon>
              </v-tab>
          </v-tabs>
          <v-tabs-items v-model="current.tab">
              <v-tab-item><div v-html="notes_content"></div></v-tab-item>
              <v-tab-item>
                <v-container class="no-select" fluid grid-list-xl>
                  <v-layout row wrap align-center justify-center>
                      <v-flex xs11 sm11 md11>
                        <v-layout row align-center>
                            <img :src="$store.state.forumLogo" alt="forum-logo icon">
                            <div class="text">
                              <div>هل لديك أي سؤال بخصوص هذا الدرس؟</div>
                              <div>بإمكانك طرح أسئلتك أو منافشة الدرس مع زملائك والمدربين في المنتدى <a href="https://forums.coretabs.net" target="_blank">من هنا</a></div>
                            </div>
                        </v-layout>
                      </v-flex>
                  </v-layout>
                </v-container>
              </v-tab-item>
          </v-tabs-items>
        </div>
    </template>
    <template v-if="type === '2'">
        <div id="lesson-markdown" class="lesson-markdown" v-html="lesson_content"></div>
    </template>
    <template v-if="type === '3'">
      <v-container id="lesson-quiz" class="lesson-quiz" fluid fill-height>
        <v-layout row wrap align-center justify-center class="quizz-layout">
          <v-flex xs12 md8>
            <v-stepper v-model="current.quiz" class="quizz-stepper" non-linear>
              <v-stepper-header>
                <template v-for="(question, qIndex) in lesson_content">
                  <v-stepper-step :class="{'wrong_step': question.wrong, 'true_step': question.true}" :step="qIndex+1" :key="qIndex" :complete="current.quiz > qIndex+1"></v-stepper-step>
                  <v-divider v-if="qIndex + 1 < lesson_content.length" :key="`divider-${qIndex}`"></v-divider>
                </template>
              </v-stepper-header>
              <v-stepper-items>
                <v-card v-show="current.quiz <= lesson_content.length" flat>
                  <p class="question-num py-0">السؤال {{current.quiz}} من {{lesson_content.length}} : {{i18n.quiz.heading_text}}</p>
                </v-card>
                <template v-for="(question, qIndex) in lesson_content">
                  <v-stepper-content :step="qIndex + 1" :key="qIndex" :class="{checkboxes : (question.correct.length > 1) }">
                    <h3 class="question-content">{{question.text}}</h3>
                    <v-card color="grey lighten-1" flat>
                      <v-list three-line subheader>
                        <template v-for="(answer, aIndex) in question.answers">
                          <v-list-tile @click="chooseAnswer(question, aIndex)" :key="aIndex" :class="[question.choose.includes(aIndex) && !question.correct.includes(aIndex) && question.correct.length === 1 ? 'wrong_answer' : '' ,question.choose.includes(aIndex) && question.correct.includes(aIndex) && question.correct.length === 1 ? 'true_answer' : '',question.correct.includes(aIndex) && question.correct.length > 1 ? quiz.status.right : '']" >
                            <v-list-tile-action>
                              <input type="checkbox" v-model="question.choose" :value="answer" />
                              <span class="checkbox_cont">
                                <v-icon color="white" v-show="question.choose.includes(aIndex)" class="checkbox_inner" small></v-icon>
                              </span>
                            </v-list-tile-action>
                            <v-list-tile-content>
                              <v-list-tile-title>{{answer}}</v-list-tile-title>
                            </v-list-tile-content>
                          </v-list-tile>
                        </template>
                      </v-list>
                    </v-card>
                    <v-card v-show="quiz.result === i18n.quiz.results_texts.fail" flat>
                      <p class="hint-container py-0"><span class="circle"><v-icon color="white" small>lightbulb_outline</v-icon></span> {{question.hint}}</p>
                    </v-card>
                  </v-stepper-content>
                </template>
                <v-card class="btns-control" flat>
                  <v-btn v-show="current.quiz < lesson_content.length" class="r-btn" flat @click="goNextAnswers" :disabled="!quiz.result">{{i18n.quiz.buttons_texts.next}}</v-btn>
                  <v-btn v-if="current.quiz > 0" v-show="lesson_content[current.quiz - 1].correct.length > 1" class="r-btn" flat @click="checkAnswers(lesson_content[current.quiz - 1])">{{i18n.quiz.buttons_texts.confirm}}</v-btn>
                  <v-btn v-show="current.quiz > 1" class="r-btn" flat @click="goPrevAnswers">{{i18n.quiz.buttons_texts.pre}}</v-btn>
                  <span class="result-container">
                    <span v-show="quiz.result" :class="['result', quiz.result === i18n.quiz.results_texts.fail ? 'err' : '']">{{quiz.result}}</span>
                  </span>
                </v-card>
              </v-stepper-items>
            </v-stepper>
          </v-flex>
        </v-layout>
      </v-container>
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
