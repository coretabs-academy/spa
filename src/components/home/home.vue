<template>
<div id="home">
  <v-container fluid fill-height id="full-screen-height">
      <v-layout fluid row justify-center wrap>
        <v-flex text-xs-center xs10 sm8 md5 id="introductory-video">
          <iframe src="https://www.youtube.com/embed/s7wmiS2mSXY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </v-flex>
        <v-flex text-xs-right xs10 sm8 md5 id="introduction">
            <h2 class="black--text">{{introduction.title}}</h2>
            <p class="black--text mt-4 mb-0">{{introduction.p1}}</p>
            <p class="black--text mt-4 mb-0">{{introduction.p2}}</p>
            <div>
              <v-btn id="yes" round dark class="mt-4 mb-0 mr-0 ml-3">{{introduction.button1}}</v-btn>
              <v-btn id="no" round light class="mt-4 mb-0 mx-0">{{introduction.button2}}</v-btn>
            </div>
        </v-flex>
      </v-layout>
  </v-container>
  <v-container fluid fill-height>
    <v-layout row justify-center>
      <v-btn id="scroll" fab flat class="mt-5" @click="$vuetify.goTo('#testimonials',{duration: 0,offset: 0,easing: 'easeInOutCubic'})">
        <img :src="scrollIcon" />
      </v-btn>
    </v-layout>
  </v-container>
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
<script src="./home.js"></script>
<style src="./home.scss" lang="scss"></style>
