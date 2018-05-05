<template>
<div id="about" v-resize="setPerPage">
   <div id="presentation">
      <div v-for="(d, i) in descriptions" :key="i" id="desc-box">
         <div class="description">
            <div class="desc-text">
               <h1>{{ d.header }}</h1>
               <p>{{ d.paragraph }}</p>
            </div>
         </div>
         <div class="desc-image">
            <img :src="imageSrc[i]" :alt="d.alt">
         </div>
      </div>
   </div>
   <v-container id="testimonials" fluid fill-height>
      <v-layout fluid row justify-center wrap>
         <v-flex text-xs-center>
            <div class="skew-box">
               <div class="particles"></div>
               <h1>{{ testimonials.title }}</h1>
               <p>{{ testimonials.description }}</p>
            </div>
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

   <div id="team">
     <h1>{{ team.title }}</h1>
     <p>{{ team.description }}</p>
     <div class="flex">
       <div class="box" v-for="(t, i) in team.set" :key="i">
         <div class="image-container">
           <img :src="teamImages[i]">
         </div>
         <div class="filter"></div>
         <div class="profile">
           <div class="profile-container">
             <h3>{{ t.name }}</h3>
             <p class="mb">{{ t.about }}</p>
             <div class="social">
               <div class="icon" v-for="(s, i) in t.socials" v-if="s.src" :key="i">
                 <a :href="s.src" :title="s.name" target="_blank"></a>
                 <img :src="icons[s.name]" :alt="s.name">
               </div>
            </div>
         </div>
      </div>
   </div>

   <div id="mentors">
     <h1>{{ mentors.title }}</h1>
     <p>{{ mentors.description }}</p>
     <siema :current.sync="currentSlide" class="mentors-carousel siema" ref="siema" :options="options" :auto-play="true" :play-duration="4000">
       <div class="mentors-carousel-item" v-for="(t, i) in mentors.set" :key="i" :ref="'item' + i">
         <div class="image-container">
           <img :src="mentorsImages[i]" :ref="'img'+i" class="photo">
         </div>
         <div class="profile">
           <div class="profile-container">
             <h3>{{ t.name }}</h3>
             <p class="mb">{{ t.about }}</p>
             <div class="social">
               <div class="icon" v-for="(s, i) in t.socials" v-if="s.src" :key="i">
                 <a :href="s.src" :title="s.name" target="_blank"></a>
                 <img :src="icons[s.name]" :alt="s.name">
               </div>
            </div>
         </div>
      </siema>
      <div class="navigation">
         <img class="left" :src="navigation.left" @click="$refs.siema.prev(1)">
         <img class="right" :src="navigation.right" @click="$refs.siema.next(1)">
      </div>
      <div class="controls" ref="controls">
         <button v-for="(b, i) in perPage" type="button" name="button" @click="show(b - 1, $event)" :key="i"></button>
      </div>
   </div>

   <footer>
      <router-link to="/">{{ footer.contactUs }}</router-link>|
      <router-link to="/">{{ footer.termsOfService }}</router-link>|
      <router-link to="/">{{ footer.privacyPolicy }}</router-link>
   </footer>
</div>
</template>
<script src="./about.js"></script>
<style src="./about.scss" lang="scss"></style>
