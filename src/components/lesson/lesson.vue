<template>
<div v-if="loaded" class="lesson">
   <template v-if="type === 0" id="lesson-scrimba" class="lesson-video lesson-scrimba">
      <iframe :src="lesson_content"></iframe>
      <div v-html="lesson_notes"></div>
   </template>
   <template v-if="type === 1" id="lesson-youtube" class="lesson-video lesson-youtube">
      <iframe height="720" :src="lesson_content" frameborder="0" allowfullscreen></iframe>
      <div v-html="lesson_notes"></div>
   </template>
   <template v-if="type === 2" id="lesson-markdown" class="lesson-markdown">
      <div v-html="lesson_content"></div>
   </template>
   <template v-if="type === 3" id="lesson-quiz" class="lesson-quiz"></template>
   <template v-if="type === 4" id="lesson-task" class="lesson-task">
      <div v-html="lesson_content"></div>
   </template>
</div>
<div v-else class="progress-container">
   <v-container fluid fill-height>
      <v-layout column align-center justify-center>
         <v-progress-circular indeterminate :size="$store.state.progress.size" :width="$store.state.progress.width"></v-progress-circular>
         <div class="progress-text text-center">{{$store.state.progress.text}}...</div>
      </v-layout>
   </v-container>
</div>
</template>
<script src="./lesson.js"></script>
<style src="./lesson.scss" lang="scss"></style>
