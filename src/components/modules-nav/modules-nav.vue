<template>
<div class="modules-nav">
   <v-list class="py-0">
      <v-stepper v-model="current.module.index" vertical class="py-0">
         <v-list-group v-for="module in modules" :key="`step-${module.index}`" v-model="module.active" :class="getClass(module)">
            <v-list-tile slot="activator">
               <v-stepper-step :step="module.index" :complete="isComplete(module)"><span>{{module.title}}</span></v-stepper-step>
            </v-list-tile>
            <v-list-tile v-for="lesson in module.lessons" :key="`step-${module.id}-${lesson.index}`">
               <v-list-tile-action :class="isLessonActive(module.id,lesson.index)">
                  <v-icon>{{getLessonAction(lesson.type)}}</v-icon>
               </v-list-tile-action>
               <router-link :to="lesson.url">{{lesson.title}}</router-link>
            </v-list-tile>
         </v-list-group>
      </v-stepper>
   </v-list>
</div>
</template>
<script src="./modules-nav.js"></script>
<style src="./modules-nav.scss" lang="scss"></style>
