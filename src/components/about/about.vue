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
        <img :src="getImageSrc(i)" :alt="d.alt">
      </div>
    </div>
  </div>
   <v-container id="testimonials" fluid fill-height>
      <v-layout fluid row justify-center wrap>
         <v-flex text-xs-center>
           <div class="skew-box">
             <div class="particles"></div>
             <h1>مجتمعنا رائع يضم مئات المبرمجين</h1>
             <p>بإنضمامك معنا لن تتعلم البرمجة فحسب بل ستلتحق بمجتمع يوفر بيئة خصبة لتبادل الخبرات و بناء روابط و علاقات مع عدد كبير من المبرمجين الأكفاء</p>
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
     <h1>فريق العمل</h1>
     <p>فريق عملنا يعمل على مدار الساعة ليحرص على حصولكم على الفائدة المرجوة و على أفضل تجربة خلال رحلتكم التدريبية على منصة coretabs</p>
     <div class="flex">
       <div class="box" v-for="(t, i) in coretabsTeam" :key="i">
         <div class="image-container">
           <img :src="getTeamSrc(i)">
         </div>
         <div class="profile">
           <div class="profile-container">
             <h3>{{ t.name }}</h3>
             <p class="mb" v-for="(job, i) in t.jobs" :key="i">{{ job }}</p>
             <div class="social">
               <div class="icon" v-for="(s, i) in t.socials" v-if="s.src" :key="i">
                 <a :href="s.src" :title="s.name"></a>
                 <img :src="getIcon(s.name)" :alt="s.name">
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>

   <div id="mentors">
     <h1>الموجهون</h1>
     <p>فريق التوجية في الأكاديمية يتألف من عدد من الأشخاص المتميزين الذي سيقوموا بمساندتك أثناء رحلتك التدريبية على منصة coretabs</p>
     <siema :current.sync="currentSlide" class="mentors-carousel siema" ref="siema" :options="options" :auto-play="true" :play-duration="4000">
       <div class="mentors-carousel-item" v-for="(t, i) in mentors" :key="i" :ref="'item' + i">
         <div class="image-container">
           <img :src="getMentorsSrc(i)" :ref="'img'+i" class="photo">
         </div>
         <div class="profile">
           <div class="profile-container">
             <h3>{{ t.name }}</h3>
             <p class="mb" v-for="(job, i) in t.jobs" :key="i">{{ job }}</p>
             <div class="social">
               <div class="icon" v-for="(s, i) in t.socials" v-if="s.src" :key="i">
                 <a :href="s.src" :title="s.name"></a>
                 <img :src="getIcon(s.name)" :alt="s.name">
               </div>
             </div>
           </div>
         </div>
       </div>
     </siema>
     <div class="navigation">
       <img class="left" :src="getImage('left')" @click="prev()">
       <img class="right" :src="getImage('right')" @click="next()">
     </div>
     <div class="controls" ref="controls">
       <button v-for="(b, i) in perPage()" type="button" name="button" @click="show(b - 1, $event)" :key="i"></button>
     </div>
   </div>

   <footer>
     <router-link to="/">إتصل بنا</router-link>|
     <router-link to="/">شروط الخدمة</router-link>|
     <router-link to="/">سياسة الخصوصية</router-link>
   </footer>
</div>
</template>
<script src="./about.js"></script>
<style src="./about.scss" lang="scss"></style>
