<template>
  <v-container id="page" fluid fill-height>
    <v-layout row align-center justify-center>
      <v-flex id="container" class="text-xs-center" xs8>
        <div>
          <h2 class="my-4" v-html="heading_title_text">
          </h2>
          <v-tabs fixed-tabs>
            <v-tab v-for="(tab, index) in tabs" :to="tab.id" :target="tab.id" :key="index">
              {{ tab.title }}
            </v-tab>
            <v-tab-item v-for="(tab, oindex) in tabs" :id="tab.id" :key="oindex">
              <v-card flat>
                <v-card-text class="text-xs-right" v-html="tab.content"></v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script src="./page.js"></script>
<style src="./page.scss" lang="scss"></style>
