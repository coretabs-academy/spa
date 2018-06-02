<template>
  <div dir="ltr">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md8 offset-md2 d-flex class="mother-container">
          <v-layout row wrap>
            <v-flex xs12 md4  class="grad-cont">
              <v-layout row wrap>
                  <v-flex md12  xs4  class="image-container">
                <div class="pic-border">
                  <img class="pic" :src="imageData || user.image " />
                  <label for="file_uploader" class="leave">
                    <v-icon small>edit</v-icon>
                    <input @change="previewImage($event)" v-show="false" name="My File" type="file" id="file_uploader" accept="image/*"/>
                  </label>
                </div>
                </v-flex>
                <v-flex xs8 md12 d-flex justify-center align-center class="info-container">
                  <div class="">
                    <h3 v-text="fullname || user.fullname"></h3>
                    <p v-text="`@${username || user.username}`"></p>
                  </div>
                  </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12 md8 d-flex>
              <div class="form-container">
                <v-form ref="form" lazy-validation>
                    <v-alert type="success" v-model="alert.success" v-text="alert.message"></v-alert>
                    <v-alert type="error" v-model="alert.error" v-text="alert.message"></v-alert>

                  <v-text-field :label="fullname_label" v-model="fullname" :rules="fnRules" required></v-text-field>
                  <v-text-field :label="email_label" v-model="email" :rules="emRules" required></v-text-field>
                  <v-text-field :label="username_label" v-model="username" :rules="unRules" required></v-text-field>
                  <v-checkbox v-model="mailSubs" color="primary"  label="فعل وضع القائمة البريدية" required></v-checkbox>
                  <p v-text="i18n.text1"></p>
                  <v-btn right round id="submit" @click="submit" class="my-btn" v-text="i18n.saveChanges" :disabled="valid < 4"></v-btn>
                </v-form>
              </div>
            </v-flex>
          </v-layout>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script src="./edit-personal-info.js"></script>
<style src="./edit-personal-info.scss" lang="scss"></style>
