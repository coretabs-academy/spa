<template>
<div v-if="loaded" class="workshop">
   <v-card class="elevation-5">
      <v-container class="no-select" fluid grid-list-xl>
         <v-layout row wrap align-center justify-center>
            <v-flex xs8 sm4 md3>
               <v-layout row wrap align-center justify-center>
                  <img v-if="workshop.level === '0'" src="../../assets/multimedia/icons/workshop/level1.svg" alt="course level icon">
                  <img v-if="workshop.level === '1'" src="../../assets/multimedia/icons/workshop/level2.svg" alt="course level icon">
                  <img v-if="workshop.level === '2'" src="../../assets/multimedia/icons/workshop/level3.svg" alt="course level icon">
                  <div class="text">
                     <div>{{i18n.card1.level.title}}</div>
                     <div>{{i18n.card1.level.value[workshop.level]}}</div>
                  </div>
               </v-layout>
            </v-flex>
            <v-flex xs8 sm4 md3>
               <v-layout row wrap align-center justify-center>
                  <img src="../../assets/multimedia/icons/workshop/duration.svg" alt="duration icon">
                  <div class="text">
                     <div>{{i18n.card1.duration.title}}</div>
                     <div>{{workshop.duration}} {{i18n.card1.duration.unit}}</div>
                  </div>
               </v-layout>
            </v-flex>
            <v-flex xs8 sm4 md3>
               <v-layout row wrap align-center justify-center>
                  <img src="../../assets/multimedia/icons/workshop/last-update.svg" alt="last update icon">
                  <div class="text">
                     <div>{{i18n.card1.last_update_date}}</div>
                     <div>{{workshop.last_update_date}}</div>
                  </div>
               </v-layout>
            </v-flex>
            <v-flex xs8 sm4 md3>
               <v-layout row wrap align-center justify-center>
                  <v-flex md8>
                     <v-btn round class="white--text" v-if="workshop.shown_percentage === 0">{{i18n.card1.start[0]}}</v-btn>
                     <v-btn round class="white--text" v-else>{{i18n.card1.start[1]}}</v-btn>
                  </v-flex>
               </v-layout>
            </v-flex>
         </v-layout>
      </v-container>
   </v-card>
   <v-card class="elevation-5">
      <v-container class="no-select" fluid>
         <v-layout row wrap>
            <v-flex xs12 sm12 md7>
               <div class="title">{{i18n.card2.description}}</div>
               <p>{{workshop.description}}</p>
               <div class="title">{{i18n.card2.used_technologies}}</div>
               <div class="chips">
                  <v-chip v-for="used_technologies in workshop.used_technologies" :key="used_technologies">{{used_technologies}}</v-chip>
               </div>
               <div class="title">{{i18n.card2.authors}}</div>
               <div class="authors">
                 <div class="author" v-for="(author, index) in workshop.authors" :key="index">
                  <v-avatar >{{ author.name[0] }}</v-avatar>
                  <div class="info">
                    <div>
                      {{ author.name }}
                    </div>
                    <div>
                      {{ author.role }}
                    </div>
                  </div>
                 </div>

               </div>
               <div class="title">{{i18n.card2.resutl}}</div>
               <v-btn flat round target="_blank" :href="workshop.workshop_result_url">{{i18n.card2.resutlBtn}}</v-btn>
            </v-flex>
            <v-flex xs12 sm12 md5>
               <div class="navigation">
                  <v-toolbar flat>
                     <progress :value="workshop.shown_percentage" max="100" :data-value="workshop.shown_percentage + '%'"></progress>
                  </v-toolbar>
                  <modules-nav-component :modules="workshop.modules"></modules-nav-component>
               </div>
            </v-flex>
         </v-layout>
      </v-container>
   </v-card>
   <v-card class="elevation-5">
      <v-container class="no-select" fluid grid-list-xl>
         <v-layout row wrap align-center justify-center>
            <v-flex xs11 sm11 md11>
               <v-layout row align-center>
                  <img :src="$store.state.forumLogo" alt="forum-logo icon">
                  <div class="text">
                     <div>{{i18n.card3.title}}</div>
                     <div>{{i18n.card3.text}} <a href="https://forums.coretabs.net" target="_blank">{{i18n.card3.here}}</a></div>
                  </div>
               </v-layout>
            </v-flex>
         </v-layout>
      </v-container>
   </v-card>
</div>
<div v-else class="progress-container">
   <v-container fluid fill-height>
      <v-layout column align-center justify-center>
         <v-progress-circular indeterminate :size="$store.state.progress.size" :width="$store.state.progress.width"></v-progress-circular>
         <div class="progress-text text-center">{{$store.state.progress.pageText}}...</div>
      </v-layout>
   </v-container>
</div>
</template>
<script src="./workshop.js"></script>
<style src="./workshop.scss" lang="scss"></style>
