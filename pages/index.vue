<template>
  <section>
    <header>
      <BaseHeader />
    </header>
    <main class="bg-slate-50">
      <!-- image Slider -->
      <!-- <div class="bg-slate-50">
        <div class="slide first">
          <img
            class="w-full h-[83vh] px-4 bg-violet-50 drop-shadow-xl"
            src="~/assets/images/hero-image.png"
            alt=""
          />
        </div>
      </div> -->
      <!-- Image Slider start -->
      <div class="app">
        <carousel @next="next" @prev="prev">
          <carousel-slide
            v-for="(slide, index) in slides"
            :key="slide"
            :index="index"
            :visibleSlide="visibleSlide"
            :direction="direction"
          >
            <img :src="slide" />
          </carousel-slide>
          <carousel-slide></carousel-slide>
          <carousel-slide></carousel-slide>
        </carousel>
      </div>
      <!-- Image Slider end -->
      <div
        class="grid text-center content-center px-24 relative h-[83vh] bg-violet-50 shadow-slate-200 shadow-lg"
      >
        <p class="text-3xl text-[#54295D] font-thin">
          Step into this experience with butterflies in your bones; with a
          nervous feeling so beautiful, you know you’re doing something right.
        </p>
        <p class="pt-6 text-[#54295D]">- d. antoinette foy</p>
      </div>
    </main>
    <BaseFooter />
  </section>
</template>

<script>
  import Carousel from "../components/carousel/Carousel.vue";
  import CarouselSlide from "../components/carousel/CarouselSlide.vue";
  export default {
    data() {
      return {
        slides: [
          "/assets/images/hero-image.png",
          "/assets/images/hero-2.png",
          "/assets/images/hero-3.png",
        ],
        visibleSlide: 0,
        direction: "left",
      };
    },
    computed: {
      slidesLen() {
        return this.slides.length;
      },
    },
    methods: {
      next() {
        if (this.visibleSlide >= this.slidesLen - 1) {
          this.visibleSlide = 0;
        } else {
          this.visibleSlide++;
        }
        this.direction = "left";
      },
      prev() {
        if (this.visibleSlide <= 0) {
          this.visibleSlide = this.slidesLen - 1;
        } else {
          this.visibleSlide--;
        }
        this.direction = "right";
      },
    },
    components: {
      Carousel,
      CarouselSlide,
    },
  };
</script>

<style scoped>
  .app {
    display: flex;
    justify-content: center;
  }
</style>
