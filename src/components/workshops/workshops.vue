<template>
<div v-if="loaded" class="workshops">
   <workshop-header-component :title="current.workshop.title"></workshop-header-component>
   <v-navigation-drawer app :right="drawer.isRight" v-model="drawer.isOpen" id="sidenav">
      <v-toolbar flat>
         <v-toolbar-title>{{title}}</v-toolbar-title>
      </v-toolbar>
      <v-list class="py-0" expand>
         <v-stepper v-model="current.workshop.index" vertical class="py-0">
            <v-list-group v-for="workshop in workshops" :key="`step-${workshop.index}`">
               <v-list-tile slot="activator">
                  <v-stepper-step :step="workshop.index" :complete="workshop.progress === 100" v-bind:class="{'stepper__step--active':workshop.progress > 0}">
                     <router-link :to="workshop.url">{{workshop.title}}</router-link>
                  </v-stepper-step>
               </v-list-tile>
            </v-list-group>
         </v-stepper>
      </v-list>
   </v-navigation-drawer>
   <div class="content" v-bind:style="{ height: height + 'px' }" v-resize="onResize">
      <router-view :workshop="this.current.workshop"></router-view>
   </div>
</div>
<div v-else class="progress-container">
   <v-container fluid fill-height>
      <v-layout column align-center justify-center>
         <v-progress-circular indeterminate :size="$store.state.progress.size" :width="$store.state.progress.width"></v-progress-circular>
         <div class="progress-text text-center">{{$store.state.progress.text}}...</div>
      </v-layout>
   </v-container>
</div>
</template>
<script src="./workshops.js"></script>
<style src="./workshops.scss" lang="scss"></style>
