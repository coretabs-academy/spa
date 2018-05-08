<template>
<div class="workshop-header">
   <v-toolbar app class="white">
      <v-toolbar-side-icon v-on:click="$parent.$emit('toggle-drawer')"></v-toolbar-side-icon>
      <v-toolbar-title class="mx-auto">{{title}}</v-toolbar-title>
      <v-avatar class="brand-logo">
         <router-link to="/">
            <img :src="$store.state.icon" alt="coretabs" />
         </router-link>
      </v-avatar>
   </v-toolbar>
</div>
</template>
<script src="./workshop-header.js"></script>
<style src="./workshop-header.scss" lang="scss"></style>
