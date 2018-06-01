<template>
    <div dir="ltr">
        <v-layout row wrap>
            <v-flex xsm12 md8 offset-md2>
                <div class="change-path-box" dir="rtl">
                    <v-form ref="form" lazy-validation>
                        <p class="heading" v-text="i18n.choosePath"></p>
                        <v-select
                        :items="items"
                        v-model="e1"
                        :label="i18n.choose"
                        single-line
                        dir="ltr"></v-select>
                        <p class="sub-heading heading" v-text="i18n.hint"></p>
        <v-btn class="my-btn" round   flat v-text="i18n.saveChanges" :disabled="!e1" ></v-btn>
                    </v-form>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>
<script src="./change-path.js"></script>
<style src="./change-path.scss" lang="scss" ></style>
