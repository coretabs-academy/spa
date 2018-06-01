<template>
    <div dir="ltr" class="">
        <v-layout row wrap>
            <v-flex xsm12 md8 offset-md2>
                <div class="change-password-box" dir="rtl">
                    <v-form ref="form" lazy-validation>
                        <v-text-field :placeholder="i18ln.currentPass"  v-model="password" :rules="pwRules" :append-icon="pw ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (pw = !pw)" :type="pw ? 'password' : 'text'" :disabled="false" required></v-text-field>
                        <v-text-field :placeholder="i18ln.newPass" v-model="password1" :rules="pwRules"
                             type="password"  required></v-text-field>
                             <v-text-field :placeholder="i18ln.newPass" v-model="password2" :rules="pwRules"
                             type="password"  required></v-text-field>
                             <v-btn class="my-btn" round   flat v-text="i18ln.submitBtnText" disabled ></v-btn>
                    </v-form>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>
<script src="./change-password.js"></script>
<style src="./change-password.scss" lang="scss" scoped></style>
