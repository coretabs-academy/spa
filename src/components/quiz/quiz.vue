<template>
    <v-layout row wrap class="quizz-layout">
        <v-flex xs12 lg8 offset-lg2 md8 offset-md2>
    <v-stepper v-model="e1" class="quizz-stepper">
        <v-stepper-header>
            <template v-for="(item, index) in items">
          <v-stepper-step  :step="index+1" :key="index" :complete="e1 > index+1"></v-stepper-step>
          <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
            </template>
        </v-stepper-header>
        <v-stepper-items>
            <v-card   height="20px" flat>
              <p class="question-num">السؤال {{e1}} من {{items.length}} : لإختر اللإجابة الصحيحة</p>
            </v-card>
            <template v-for="(item, index) in items">
          <v-stepper-content :step="index+1" :key="index">
            <h3 class="question-content">{{item.question}} ؟</h3>
            <v-card color="grey lighten-1" flat>
              <!-- test -->
              <v-list three-line subheader>
                  <template v-for="(answer, indexx) in item.answers">
                      <v-divider></v-divider>
                  <v-list-tile href="javascript:;" :key="indexx" class=""> 
                    <v-list-tile-action>
                      <input type="checkbox" v-model="choose" :value="answer"/>
                      <span class="checkbox_cont"><span v-show="true" class="checkbox_inner"></span></span>
                    </v-list-tile-action>
                    <v-list-tile-content @click="">
                      <v-list-tile-title>{{answer}}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  </template>
                  <v-divider :key="`divider-${index}`"></v-divider>
                </v-list>
              <!-- test -->
            </v-card>
            <!-- <v-btn color="primary" @click.native="e1 = index +2">test</v-btn> -->
          </v-stepper-content>
          </template>
          <v-card    class="btns-control" flat>
            <v-btn v-show="true" class="r-btn r-white " flat @click.native="e1 += 1">تخطي الإجابة</v-btn> <v-btn class="r-btn" flat>{{retryTxt}}</v-btn>
            <span  class="result-container">
              <span v-show="true" :class="`result err`">{{failTxt}}</span> 
              <span v-show="true" class="hint">هل تريد الحصول على تلميح ؟ <span class="circle"><v-icon color="white" size="large">star</v-icon></span></span>
            </span>
            </v-card>
        </v-stepper-items>
      </v-stepper>
  </v-flex>
    </v-layout>
</template>
<script src="./quiz.js"></script>
<style src="./quiz.scss" lang="scss"></style>
