<template>
<div id="home">
  <v-container fluid fill-height>
      <v-layout fluid row justify-center wrap>
        <v-flex text-xs-center xs10 sm8 md5 id="introductory-video">
          <v-btn id="play" @click="play(vPlayer)"><i></i></v-btn>
          <video-player id="player" class="vjs-custom-skin" ref="videoPlayer"
            :options="playerOptions"
            @pause="pause(vPlayer)" @ended="ended(vPlayer)">
          </video-player>
        </v-flex>
        <v-flex text-xs-right xs10 sm8 md5 id="introduction">
            <h2 class="black--text" v-html="introduction.heading_text"></h2>
            <p class="black--text mt-4 mb-0" v-html="introduction.description_text_1"></p>
            <p class="black--text mt-4 mb-0" v-html="introduction.description_text_2"></p>
            <div id="introduction-buttons">
              <v-btn id="yes" round dark class="mt-4 mb-0 mr-0 ml-3" v-html="introduction.yes_btn_text"></v-btn>
              <v-btn id="no" round light class="mt-4 mb-0 mx-0" v-html="introduction.no_btn_text"></v-btn>
            </div>
        </v-flex>
      </v-layout>
  </v-container>
</div>
</template>
<script src="./home.js"></script>
<style src="./home.scss" lang="scss"></style>
