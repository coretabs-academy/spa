<template>
  <div id="signin">
    <v-container fluid fill-height>
      <v-layout row wrap align-center justify-center>
        <v-flex id="container" xs6>
          <v-layout row align-center justify-center>
            <v-flex id="splash" xs0 sm0 md6>
            </v-flex>
            <v-flex id="form" xs12 sm12 md6>
              <v-form ref="form" lazy-validation>
                <h2 class="black--text mb-2" v-html="heading_text"></h2>
                <v-alert type="success" v-model="alert.success" v-text="alert.message"></v-alert>
                <v-alert type="error" v-model="alert.error" v-text="alert.message"></v-alert>
                <v-text-field :label="email_label" v-model="email" :class="[alert.success ? 'disabled' : '']" :rules="emRules" :disabled="alert.success" required></v-text-field>
                <v-text-field :label="password_label" v-model="password" :class="[alert.success ? 'disabled' : '']" :rules="pwRules" :disabled="alert.success" required
                              :append-icon="pw ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (pw = !pw)" :type="pw ? 'password' : 'text'"></v-text-field>
                <p id="forgot" v-html="forgot_link_text" class="black--text mt-1 mb-1"></p>
                <div id="buttons">
                  <v-btn round id="submit" @click="submit" v-show="!alert.success" v-html="submit_btn_text" :disabled="valid < 2"></v-btn>
                  <router-link round id="signup" to="/signup" v-html="signup_btn_text"></router-link>
                </div>
              </v-form>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script src="./signin.js"></script>
<style src="./signin.scss" lang="scss"></style>
