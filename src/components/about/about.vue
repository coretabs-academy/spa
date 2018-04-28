<template>
<div id="about">
  <v-container id="testimonials" fluid fill-height>
    <v-layout fluid row justify-center wrap>
      <v-flex text-xs-center>
        <h2>{{ testimonials.title }}</h2>
        <v-carousel cycle>
          <v-carousel-item v-for="(testimonial,i) in testimonials.carousel" :key="i" transition="fade" reverse-transition="fade">
            <img class="quotation" :src="quotationIcon" />
            <div class="avatar" :style="{ backgroundImage: 'url(' + testimonial.img + ')' }" />
            <div class="testimonial">
              <h3 class="name">{{ testimonial.name }}<span class="description"> - {{ testimonial.description }}</span></h3>
              <p class="quote">{{ testimonial.quote }}</p>
              <div class="rating">
                <span v-for="i in testimonial.rating" :key="i">
                  <img :src="starIcon" />
                </span>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>
<script src="./about.js"></script>
<style src="./about.scss" lang="scss"></style>
