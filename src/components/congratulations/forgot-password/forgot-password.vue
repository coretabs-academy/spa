<template>
  <v-container id="forgot-password" fluid fill-height>
    <v-layout row align-center justify-center>
      <v-flex id="container" xs6>
        <v-layout row align-center justify-center>
          <v-flex id="splash" xs0 sm0 md6>
          </v-flex>
          <v-flex id="form" class="text-xs-right" xs12 sm12 md6>
            <v-form v-model="valid" ref="form" lazy-validation>
              <h2 class="black--text mb-2" v-html="heading_text"></h2>
              <p v-html="forgot_text"></p>
              <v-alert type="success" v-model="alert.success" v-text="alert.message"></v-alert>
              <v-alert type="error" v-model="alert.error" v-text="alert.message"></v-alert>
              <v-text-field :label="email_label" v-model="email" :class="[alert.success ? 'disabled' : '']" :rules="emRules" :disabled="alert.success" required></v-text-field>
              <v-btn round id="submit" @click="submit" v-show="!alert.success" v-html="submit_btn_text" :disabled="!valid"></v-btn>
            </v-form>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script src="./forgot-password.js"></script>
<style src="./forgot-password.scss" lang="scss"></style>
