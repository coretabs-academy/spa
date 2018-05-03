<template>
  <div id="signup">
    <v-container fluid fill-height>
      <v-layout row wrap align-center justify-center>
        <v-flex id="container" xs6>
          <v-layout row justify-center>
            <v-flex xs10 class="text-xs-right">
              <h2 class="black--text mt-4 mb-2" v-html="heading_text"></h2>
              <p class="black--text mt-0 mb-4" v-html="description_text"></p>
            </v-flex>
          </v-layout>
          <v-layout fluid row justify-center align-center wrap>
            <v-flex id="avatars" xs0 sm0 md5>
              <v-layout row wrap justify-start align-top>
                <v-flex id="avatar"></v-flex>
              </v-layout>
              <!-- <v-layout row wrap justify-end>
                  <v-flex class="avatar" xs4 v-for="i in 9" :key="`3${i}`"></v-flex>
              </v-layout> -->
            </v-flex>
            <v-flex id="form" xs10 sm10 md5>
              <v-form ref="form" lazy-validation>
                <v-alert type="success" v-model="alert.success" v-text="alert.message"></v-alert>
                <v-alert type="error" v-model="alert.error" v-text="alert.message"></v-alert>

                <v-text-field :label="fullname_label" v-model="fullname" :class="[alert.success ? 'disabled' : '']" :rules="fnRules" :disabled="alert.success" required></v-text-field>
                <v-text-field :label="email_label" v-model="email" :class="[alert.success ? 'disabled' : '']" :rules="emRules" :disabled="alert.success" required></v-text-field>
                <v-text-field :label="username_label" v-model="username" :class="[alert.success ? 'disabled' : '']" :rules="unRules" :disabled="alert.success" required></v-text-field>
                <v-text-field :label="password_label" v-model="password" :class="[alert.success ? 'disabled' : '']" :rules="pwRules"
                              :append-icon="pw ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (pw = !pw)" :type="pw ? 'password' : 'text'" :disabled="alert.success" required></v-text-field>
              </v-form>
            </v-flex>
          </v-layout>
          <v-layout id="footer" row justify-center align-center wrap>
            <v-flex xs10 sm10 md7>
              <p id="tos" v-html="tos_text" class="black--text text-xs-right mt-1 mb-0"></p>
            </v-flex>
            <v-flex xs10 sm10 md3 id="submit-container">
              <v-btn round id="submit" @click="submit" v-show="!alert.success" v-text="submit_btn_text" :disabled="valid < 4"></v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    </div>
</template>
<script src="./signup.js"></script>
<style src="./signup.scss" lang="scss"></style>
