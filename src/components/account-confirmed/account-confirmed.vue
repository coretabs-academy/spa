<template>
  <v-container id="account-confirmed" fluid fill-height>
    <v-layout row align-center justify-center>
      <v-flex id="container" xs6>
        <v-layout row align-center justify-center>
          <v-flex id="splash" xs0 sm0 md6>
          </v-flex>
          <v-flex id="form" class="text-xs-right" xs12 sm12 md6>
            <v-form ref="form" lazy-validation>
              <h2 class="black--text mb-4" v-html="heading_title_text"></h2>
              <p v-html="description_text"></p>
              <div id="buttons">
                <v-btn round id="start" @click="start" v-html="start_btn_text"></v-btn>
                <v-btn round id="dismiss" @click="dismiss" v-html="dismiss_btn_text"></v-btn>
              </div>
            </v-form>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script src="./account-confirmed.js"></script>
<style src="./account-confirmed.scss" lang="scss"></style>
