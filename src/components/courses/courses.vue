<template>
<div v-if="loaded" class="courses">
   <v-toolbar app class="white">
      <v-toolbar-side-icon @click="drawer.isOpen = !drawer.isOpen"></v-toolbar-side-icon>
      <v-toolbar-title class="mx-auto">{{current.categorie.title}}</v-toolbar-title>
      <v-avatar class="brand-logo">
         <router-link to="/">
            <img :src="$store.state.icon" alt="coretabs" />
         </router-link>
      </v-avatar>
   </v-toolbar>
   <v-navigation-drawer app :right="drawer.isRight" v-model="drawer.isOpen">
      <v-toolbar flat>
         <v-btn flat icon color="white" v-if="!drawer.isRight" :to="trackURL">
            <v-icon>chevron_left</v-icon>
         </v-btn>
         <v-btn v-else flat icon color="white" :to="trackURL">
            <v-icon>chevron_right</v-icon>
         </v-btn>
         <v-toolbar-title class="white--text">{{current.categorie.title}}</v-toolbar-title>
      </v-toolbar>
      <v-list class="py-0">
         <v-stepper v-model="current.categorie.id" vertical class="py-0">
            <v-list-group v-for="categorie in categories" :key="`step-${categorie.id}`" :prepend-icon="categorie.action" v-model="categorie.active" no-action :class="getClass(categorie)">
               <v-list-tile slot="activator">
                  <v-stepper-step :step="categorie.id " :complete="categorie.complete ">{{categorie.title}}</v-stepper-step>
               </v-list-tile>
               <v-list-tile v-for="topic in categorie.topics " :key="`step-${categorie.id}-${topic.id}` ">
                  <v-list-tile-action :class="isTopicActive(categorie.id,topic.id) ">
                     <v-icon>{{topic.action}}</v-icon>
                  </v-list-tile-action>
                  <router-link :to="topic.url ">{{topic.title}}</router-link>
               </v-list-tile>
            </v-list-group>
         </v-stepper>
      </v-list>
   </v-navigation-drawer>
   <div class="content " v-bind:style="{ height: height + 'px' } " v-resize="onResize ">
      <router-view></router-view>
   </div>
</div>
<div v-else class="progress-container ">
   <v-container fluid grid-list-xs fill-height>
      <v-layout row align-center>
         <v-flex xs12>
            <v-progress-circular indeterminate color="primary " :size="80 " :width="7 "></v-progress-circular>
         </v-flex>
      </v-layout>
   </v-container>
</div>
</template>
<script src="./courses.js"></script>
<style src="./courses.scss" lang="scss"></style>
