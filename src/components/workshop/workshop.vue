<template>
<div v-if="loaded" class="workshop">
   <v-card>
      <v-layout>
         <v-flex>
            <v-btn flat @click="goToLessons('/test/facebook-site-workshop/collo')">{{start}}</v-btn>
         </v-flex>
         <v-flex>{{workshop.last_update}}</v-flex>
         <v-flex></v-flex>
         <v-flex></v-flex>
      </v-layout>
   </v-card>
   <v-card></v-card>
   <v-card></v-card>
   <v-card></v-card>
   <v-navigation-drawer>
      <modules-nav-component :modules="workshop.modules"></modules-nav-component>
   </v-navigation-drawer>
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
<script src="./workshop.js"></script>
<style src="./workshop.scss" lang="scss"></style>
