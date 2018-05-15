<template>
<div v-if="loaded" class="workshops">
   <workshop-header-component :title="current.workshop.title"></workshop-header-component>
   <v-navigation-drawer id="sidenav" app :right="drawer.isRight" v-model="drawer.isOpen" :width="$store.state.css.workshops.drawerWidth" hide-overlay>
      <v-toolbar flat>
         <v-toolbar-side-icon v-on:click="drawer.isOpen=!drawer.isOpen"></v-toolbar-side-icon>
         <v-toolbar-title>{{title}}</v-toolbar-title>
      </v-toolbar>
      <v-list class="py-0">
         <v-stepper v-model="current.workshop.index" vertical class="py-0">
            <v-list-group v-for="workshop in workshops" :key="`step-${workshop.index}`">
               <v-list-tile slot="activator">
                  <v-stepper-step :step="workshop.index" :complete="workshop.shown_percentage === 100" v-bind:class="{'stepper__step--active':workshop.shown_percentage > 0}">
                     <router-link :to="workshop.url">{{workshop.title}}</router-link>
                  </v-stepper-step>
               </v-list-tile>
            </v-list-group>
         </v-stepper>
      </v-list>
   </v-navigation-drawer>
   <div class="content" v-bind:style="{ height: height + 'px' }" v-resize="onResize">
      <router-view :workshop="current.workshop"></router-view>
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
<script src="./workshops.js"></script>
<style src="./workshops.scss" lang="scss"></style>
