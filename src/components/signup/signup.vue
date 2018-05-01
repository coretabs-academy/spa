<template>
  <div id="signup">
    <v-container fluid fill-height>
      <v-layout fluid row justify-center wrap>
        <v-flex id="container" xs8>
          <v-layout fluid row justify-center wrap fill-height>
            <v-flex xs10>
              <h2 class="black--text">{{h2}}</h2>
              <p class="black--text mt-2 mb-0">{{p}}</p>
            </v-flex>
          </v-layout>
          <v-layout fluid row justify-center wrap>
            <v-flex id="avatars" xs0 sm0 md5>
              <v-layout row wrap justify-end>
                  <v-flex class="avatar" xs4 v-for="i in 9" :key="`3${i}`">
                  </v-flex>
              </v-layout>
            </v-flex>
            <v-flex id="form" xs10 sm10 md5>
              <v-form ref="form" lazy-validation>
                <v-alert type="success" v-model="alert.success" v-text="alert.message"></v-alert>
                <v-alert type="error" v-model="alert.error" v-text="alert.message"></v-alert>

                <v-text-field label="اسمك الكامل" v-model="fullname" :class="[alert.success ? 'disabled' : '']" :rules="fnRules" :disabled="alert.success" required></v-text-field>
                <v-text-field label="البريد الإلكتروني" v-model="email" :class="[alert.success ? 'disabled' : '']" :rules="emRules" :disabled="alert.success" required></v-text-field>
                <v-text-field label="اسم المستخدم" v-model="username" :class="[alert.success ? 'disabled' : '']" :rules="unRules" :disabled="alert.success" required></v-text-field>
                <v-text-field label="كلمة المرور" v-model="password" :class="[alert.success ? 'disabled' : '']" :rules="pwRules" :append-icon="pw ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (pw = !pw)"
          :type="pw ? 'password' : 'text'" :disabled="alert.success" required></v-text-field>
              </v-form>
            </v-flex>
          </v-layout>
          <v-layout fluid row justify-center wrap>
            <v-flex xs10 sm10 md7>
              <p id="tos" v-html="tos" class="black--text mt-1 mb-0">
              </p>
            </v-flex>
            <v-flex xs10 sm10 md3>
              <v-btn round id="submit" @click="submit" v-show="!alert.success" :disabled="valid < 4">
                إنشاء الحساب
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    </div>
</template>
<script src="./signup.js"></script>
<style src="./signup.scss" lang="scss"></style>
