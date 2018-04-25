<template>
    <div id="signup-form">
      <v-alert type="success" v-model="alert.success" v-text="alert.message"></v-alert>
      <v-alert type="error" v-model="alert.error" v-text="alert.message"></v-alert>
      <v-form v-model="valid" v-if="!alert.success" ref="form" lazy-validation>
        <v-text-field label="اسم المستخدم " v-model="username" :rules="nameRules" :counter="20" required></v-text-field>
        <v-text-field label="البريد الإلكتروني " v-model="email" :rules="emailRules" required></v-text-field>
        <v-btn @click="submit" :disabled="!valid">
          تسجيل
        </v-btn>
      </v-form>
     </div>
</template>
<script src="./signup.js"></script>
<style src="./signup.scss" lang="scss"></style>
