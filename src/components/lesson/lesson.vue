<template>
<div v-if="loaded" class="lesson">
   <template v-if="type === '0'">
      <div id="lesson-scrimba" class="lesson-video lesson-scrimba">
         <iframe :src="lesson_content"></iframe>
         <v-tabs :right="$store.state.direction === 'rtl'" icons-and-text>
            <v-tab v-for="tab in i18n.video" :key="tab.text">
               {{tab.text}}
               <v-icon>{{tab.icon}}</v-icon>
            </v-tab>
         </v-tabs>
      
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
