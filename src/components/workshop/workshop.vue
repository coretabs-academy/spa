<template>
<div v-if="loaded" class="workshop">
   <v-card class="elevation-5">
      <v-container class="no-select" fluid>
         <v-layout row align-center>
            <v-spacer></v-spacer>
            <v-flex d-flex xs3>
               <v-flex class="icon" xs2>
                  <img v-if="workshop.level === 0" src="../../assets/multimedia/icons/workshop/level1.svg" alt="course level icon">
                  <img v-if="workshop.level === 1" src="../../assets/multimedia/icons/workshop/level2.svg" alt="course level icon">
                  <img v-if="workshop.level === 2" src="../../assets/multimedia/icons/workshop/level3.svg" alt="course level icon">
               </v-flex>
               <v-flex class="text" xs10>
                  <div>{{i18n.card1.level.title}}</div>
                  <div>{{i18n.card1.level.value[workshop.level]}}</div>
               </v-flex>
            </v-flex>
            <v-flex d-flex xs3>
               <v-flex class="icon" xs2>
                  <img src="../../assets/multimedia/icons/workshop/timeline.svg" alt="last update icon">
               </v-flex>
               <v-flex class="text" xs10>
                  <div>{{i18n.card1.timeline.title}}</div>
                  <div>{{workshop.timeline}} {{i18n.card1.timeline.unit}}</div>
               </v-flex>
            </v-flex>
            <v-flex d-flex xs3>
               <v-flex class="icon" xs2>
                  <img src="../../assets/multimedia/icons/workshop/last-update.svg" alt="last update icon">
               </v-flex>
               <v-flex class="text" xs10>
                  <div>{{i18n.card1.last_update}}</div>
                  <div>{{workshop.last_update}}</div>
               </v-flex>
            </v-flex>
            <v-flex d-flex xs2>
               <v-btn round class="white--text" v-if="workshop.progress === 0">{{i18n.card1.start[0]}}</v-btn>
               <v-btn round class="white--text" v-else>{{i18n.card1.start[1]}}</v-btn>
               <v-spacer></v-spacer>
            </v-flex>
         </v-layout>
      </v-container>
   </v-card>
   <v-card class="elevation-5">
      <v-container class="no-select" fluid>
         <v-layout row>
            <v-flex xs7>
               <div class="title">{{i18n.card2.about}}</div>
               <p>{{workshop.desc}}</p>
               <div class="title">{{i18n.card2.techniques_used}}</div>
               <v-chip v-for="techniques_used in workshop.techniques_used" :key="techniques_used">{{techniques_used}}</v-chip>
               <div class="title">{{i18n.card2.users}}</div>
               <div class="title">{{i18n.card2.resutl}}</div>
               <v-btn flat round>{{i18n.card2.resutlBtn}}</v-btn>
            </v-flex>
            <v-flex xs5>
               <v-navigation-drawer open>
                  <v-toolbar flat>
                     <progress :value="workshop.progress" max="100" :data-value="workshop.progress + '%'"></progress>
                  </v-toolbar>
                  <modules-nav-component :modules="workshop.modules"></modules-nav-component>
               </v-navigation-drawer>
            </v-flex>
         </v-layout>
      </v-container>
   </v-card>
   <v-card class="elevation-5">
      <v-container class="no-select" fluid>
         <v-layout row align-center>
            <v-flex class="icon" xs2>
               <img :src="$store.state.forumLogo" alt="forum-logo icon">
            </v-flex>
            <v-flex class="text" xs10>
               <div>{{i18n.card3.title}}</div>
               <div>{{i18n.card3.text}} <a href="https://forums.coretabs.net" target="_blank">{{i18n.card3.here}}</a></div>
            </v-flex>
         </v-layout>
      </v-container>
   </v-card>
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
