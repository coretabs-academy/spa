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
   <v-container fluid grid-list-xs fill-height>
      <v-layout row align-center>
         <v-flex xs12>
            <v-progress-circular indeterminate color="primary" :size="80" :width="7"></v-progress-circular>
         </v-flex>
      </v-layout>
   </v-container>
</div>
</template>
<script src="./lesson.js"></script>
<style src="./lesson.scss" lang="scss"></style>
