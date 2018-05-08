<template>
<div class="modules-nav">
   <v-navigation-drawer app :right="drawer.isRight" v-model="drawer.isOpen" v-bind:class="{'elevation-15':drawer.isOpen}">
      <v-toolbar flat>
         <v-btn flat icon color="white" v-if="!drawer.isRight" :to="trackURL">
            <v-icon>chevron_left</v-icon>
         </v-btn>
         <v-btn v-else flat icon color="white" :to="trackURL">
            <v-icon>chevron_right</v-icon>
         </v-btn>
         <v-toolbar-title>{{current.categorie.title}}</v-toolbar-title>
      </v-toolbar>
      <v-list class="py-0" expand>
         <v-stepper v-model="current.categorie.id" vertical class="py-0">
            <v-list-group v-for="categorie in categories" :key="`step-${categorie.id}`" :prepend-icon="categorie.action" v-model="categorie.active" :class="getClass(categorie)">
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
</div>
</template>
<script src="./modules-nav.js"></script>
<style src="./modules-nav.scss" lang="scss"></style>
