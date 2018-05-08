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
     <div class="testimonials-carousel">
       <div class="testimonials-carousel-item" v-for="(t,i) in testimonials.carousel" :key="i"
            @mouseenter="stopTSiema()"
            @mouseleave="playTSiema()"
            >
           <img class="quotation" :src="quotationIcon" />
           <div class="avatar" :style="{ backgroundImage: 'linear-gradient(rgba(84, 0, 255, 0.4), rgba(202, 62, 75, 0.4)), url(' + t.img + ')' }" />
           <div class="testimonial">
              <h3 class="name">{{ t.name }}<span class="description"> - {{ t.description }}</span></h3>
              <p class="quote">{{ t.quote }}</p>
              <div class="rating">
                 <img v-for="i in 5" :key="i" :src="calc(i, t.rating)" />
              </div>
              <div class="navigation">
                <img class="left" :src="navigation.left" @click="testimonialsSiema.next(1)">
                <img class="right" :src="navigation.right" @click="testimonialsSiema.prev(1)">
              </div>
           </div>
        </div>
     </div>
     <div class="controls t" ref="controlsT">
       <button v-for="(b, i) in testimonials.carousel.length" type="button" name="button" @click="showTestimonials(b - 1, $event)" :key="i"></button>
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

   <div id="mentors">
     <h1>{{ mentors.title }}</h1>
     <p>{{ mentors.description }}</p>
     <div class="mentors-carousel">
       <div class="mentors-carousel-item" v-for="(t, i) in mentors.set" :key="i" :ref="'item' + i"
           @mouseenter="stopMSiema()"
           @mouseleave="playMSiema()"
           >
         <div class="image-container">
           <img :src="mentorsImages[i]" :ref="'img'+i" class="photo">
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
     <div class="navigation">
       <img class="left" :src="navigation.left" @click="prev()" @mouseenter="stopMSiema()"
       @mouseleave="playMSiema()">
       <img class="right" :src="navigation.right" @click="next()" @mouseenter="stopMSiema()"
       @mouseleave="playMSiema()">
     </div>
     <div class="controls m" ref="controlsM" style="direction: ltr">
       <button v-for="(b, i) in count()" type="button" name="button" @click="showMentors(b - 1, $event)" :key="i"></button>
     </div>
   </div>

   <footer>
     <router-link to="/contact-us">{{ footer.contactUs }}</router-link>|
     <router-link to="/page/terms-of-service">{{ footer.termsOfService }}</router-link>|
     <router-link to="/page/privacy-policy">{{ footer.privacyPolicy }}</router-link>
   </footer>
</div>
</template>
<script src="./about.js"></script>
<style src="./about.scss" lang="scss"></style>
