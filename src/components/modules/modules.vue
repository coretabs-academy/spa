<template>
<div v-if="loaded" class="modules">
   <workshop-header-component :title="current.lesson.title"></workshop-header-component>
   <v-navigation-drawer app :right="drawer.isRight" v-model="drawer.isOpen" v-bind:class="{'elevation-15':drawer.isOpen}">
      <v-toolbar flat>
         <v-btn flat icon color="white" v-if="!drawer.isRight" :to="current.workshopURL">
            <v-icon>chevron_left</v-icon>
         </v-btn>
         <v-btn v-else flat icon color="white" :to="current.workshopURL">
            <v-icon>chevron_right</v-icon>
         </v-btn>
         <v-toolbar-title>{{current.lesson.title}}</v-toolbar-title>
      </v-toolbar>
      <modules-nav-component :modules="modules"></modules-nav-component>
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
<script src="./modules.js"></script>
<style src="./modules.scss" lang="scss"></style>
