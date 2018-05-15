<template>
<div v-if="loaded" class="modules">
   <workshop-header-component :title="current.lesson.title"></workshop-header-component>
   <v-navigation-drawer app :right="drawer.isRight" v-model="drawer.isOpen" :width="$store.state.css.workshops.drawerWidth" hide-overlay>
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
   <v-container fluid fill-height>
      <v-layout column align-center justify-center>
         <v-progress-circular indeterminate :size="$store.state.progress.size" :width="$store.state.progress.width"></v-progress-circular>
         <div class="progress-text text-center">{{$store.state.progress.pageText}}...</div>
      </v-layout>
   </v-container>
</div>
</template>
<script src="./modules.js"></script>
<style src="./modules.scss" lang="scss"></style>
