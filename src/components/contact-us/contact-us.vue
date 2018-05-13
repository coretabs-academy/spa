<template>
  <v-container id="contact-us" fluid fill-height>
    <v-layout row align-center justify-center>
      <v-flex id="container" xs8>
        <v-layout row align-center justify-center>
          <v-flex id="splash" class="text-xs-center" xs0 sm0 md5>
            <img :src="forums_icon" />
            <p v-html="forums_text" class="mt-4 mb-0"></p>
          </v-flex>
          <v-flex id="form" class="text-xs-right" xs12 sm12 md7>
            <v-form ref="form" lazy-validation>
              <h2 class="black--text mb-2" v-html="heading_title_text"></h2>
              <p v-html="description_text"></p>
              <v-alert type="success" v-model="alert.success" v-text="alert.message"></v-alert>
              <v-alert type="error" v-model="alert.error" v-text="alert.message"></v-alert>
              <v-text-field :label="fullname_label" v-model="fullname" :class="[alert.success ? 'disabled' : '']" :rules="fnRules" :disabled="alert.success" required></v-text-field>
              <v-text-field :label="email_label" v-model="email" :class="[alert.success ? 'disabled' : '']" :rules="emRules" :disabled="alert.success" required></v-text-field>
              <v-text-field :label="message_label" v-model="message" class="disabled" :rules="meRules" :disabled="alert.success" multi-line required></v-text-field>
              <v-btn round id="submit" @click="submit" v-show="!alert.success" v-html="submit_btn_text" :disabled="valid < 3"></v-btn>
            </v-form>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script src="./contact-us.js"></script>
<style src="./contact-us.scss" lang="scss"></style>
