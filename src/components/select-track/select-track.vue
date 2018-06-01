<template>
  <v-container id="select-track" fluid fill-height>
    <v-layout row align-center justify-center>
      <v-flex id="container" xs9 md6>
        <v-layout row align-center justify-center wrap>
          <v-flex class="track" xs12 sm6 md6>
            <div @click="select('1')">
              <input type="radio" name="track" v-model="track_selected" value="1" />
              <span class="custom-radio"></span>
              <div class="icon"></div>
              <p v-html="track_1_text_en" class="mt-4 mb-2"></p>
              <p v-html="track_1_text_ar" class="mt-2 mb-4"></p>
            </div>
            <v-btn round class="submit" @click="submit('1')" v-html="submit_btn_text" :disabled="track_selected != 1"></v-btn>
          </v-flex>
          <v-flex class="track" xs12 sm6 md6>
            <div @click="select('2')">
              <input type="radio" name="track" v-model="track_selected" value="2" />
              <span class="custom-radio"></span>
              <div class="icon"></div>
              <p v-html="track_2_text_en" class="mt-4 mb-2"></p>
              <p v-html="track_2_text_ar" class="mt-2 mb-4"></p>
            </div>
            <v-btn round class="submit" @click="submit('2')" v-html="submit_btn_text" :disabled="track_selected != 2"></v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script src="./select-track.js"></script>
<style src="./select-track.scss" lang="scss"></style>
