<template>
<v-app>
   <header-component></header-component>
   <v-content>
      <v-container fluid class="main-container">
         <router-view></router-view>
      </v-container>
   </v-content>
</v-app>
</template>
<script src="./app.js"></script>
<style src="./app.scss" lang="scss"></style>
