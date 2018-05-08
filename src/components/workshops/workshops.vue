<template>
<div v-if="loaded" class="workshops">
   <v-toolbar app class="white">
      <v-toolbar-side-icon @click="drawer.isOpen = !drawer.isOpen"></v-toolbar-side-icon>
      <v-toolbar-title class="mx-auto">{{current.workshop.title}}</v-toolbar-title>
      <v-avatar class="brand-logo">
         <router-link to="/">
            <img :src="$store.state.icon" alt="coretabs" />
         </router-link>
      </v-avatar>
   </v-toolbar>
   <v-navigation-drawer app :right="drawer.isRight" v-model="drawer.isOpen" v-bind:class="{'elevation-15':drawer.isOpen}">
      <v-toolbar flat>
         <v-toolbar-title class="mx-auto">{{title}}</v-toolbar-title>
      </v-toolbar>
      <v-list class="py-0">
         <v-stepper v-model="current.workshop.index" vertical class="py-0">
            <v-stepper-step v-for="workshop in workshops" :key="`step-${workshop.index}`" :step="workshop.index" :complete="workshop.progress === 100">
               <router-link :to="workshop.url">{{workshop.title}}</router-link>
            </v-stepper-step>
         </v-stepper>
      </v-list>
   </v-navigation-drawer>
   <div class="content" v-bind:style="{ height: height + 'px' }" v-resize="onResize">
      <router-view></router-view>
   </div>
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
<script src="./workshops.js"></script>
<style src="./workshops.scss" lang="scss"></style>
