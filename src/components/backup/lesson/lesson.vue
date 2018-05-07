<template>
<div v-if="loaded" class="lesson">
   <div v-html="previewText(lesson.data)"></div>
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
