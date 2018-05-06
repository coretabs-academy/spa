<template>
  <div id="about">
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
  <div id="testimonials">
    <div class="skew-box">
      <div class="particles"></div>
      <h1>{{ testimonials.title }}</h1>
      <p>{{ testimonials.description }}</p>
    </div>
     <siema :current.sync="currentSlide" class="siema testimonials-carousel" ref="siema" :options="options" :auto-play="true" :play-duration="4000">
        <div class="testimonials-carousel-item" v-for="(testimonial,i) in testimonials.carousel" :key="i"
             @mouseenter="$refs.siema.stop()"
             @mouseleave="$refs.siema.play()">
           <img class="quotation" :src="quotationIcon" />
           <div class="avatar" :style="{ backgroundImage: 'linear-gradient(rgba(84, 0, 255, 0.4), rgba(202, 62, 75, 0.4)), url(' + testimonial.img + ')' }" />
           <div class="testimonial">
              <h3 class="name">{{ testimonial.name }}<span class="description"> - {{ testimonial.description }}</span></h3>
              <p class="quote">{{ testimonial.quote }}</p>
              <div class="rating">
                 <img v-for="i in 5" :key="i" :src="calc(i, testimonial.rating)" />
              </div>
              <div class="navigation">
                <img class="left" :src="navigation.left" @click="$refs.siema.next(1)">
                <img class="right" :src="navigation.right" @click="$refs.siema.prev(1)">
              </div>
           </div>
        </div>
     </siema>
     <div class="controls" ref="controls">
       <button v-for="(b, i) in perPage" type="button" name="button" @click="show(b - 1, $event)" :key="i"></button>
     </div>
  </div>

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
     </div>
   </div>

   <!-- <div id="mentors">
     <h1>{{ mentors.title }}</h1>
     <p>{{ mentors.description }}</p>
     <div :current.sync="currentSlide" class="mentorscarousel" ref="mentorscarousel" :options="mentorsOptions" :auto-play="true" :play-duration="4000">
       <div class="mentorscarousel-item" v-for="(t, i) in mentors.set" :key="i" :ref="'item' + i">
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
         </div>
       </div>
     </div>
     <div class="navigation">
       <img class="left" :src="navigation.left" @click="$refs.mentorscarousel.prev(1)">
       <img class="right" :src="navigation.right" @click="$refs.mentorscarousel.next(1)">
     </div>
     <div class="controls" ref="controls">
       <button v-for="(b, i) in perPage" type="button" name="button" @click="show(b - 1, $event)" :key="i"></button>
     </div>
   </div> -->

   <footer>
     <router-link to="/">{{ footer.contactUs }}</router-link>|
     <router-link to="/">{{ footer.termsOfService }}</router-link>|
     <router-link to="/">{{ footer.privacyPolicy }}</router-link>
   </footer>
</div>
</template>
<script src="./about.js"></script>
<style src="./about.scss" lang="scss"></style>
