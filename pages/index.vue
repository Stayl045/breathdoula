<template>
  <section>
    <header>
      <BaseHeader />
    </header>
    <!-- Hero Image Slider -->
    <main class="bg-slate-50">
      <div class="app">
        <carousel @next="next" @prev="prev">
          <carousel-slide
            v-for="(slide, index) in slides"
            :key="slide"
            :index="index"
            :visibleSlide="visibleSlide"
            :direction="direction"
          >
            <img class="w-[100%] h-[90vh]" :src="slide" />
          </carousel-slide>
        </carousel>
      </div>
      <!-- Quote -->
      <div
        class="grid text-center content-center px-24 relative h-[83vh] bg-violet-50"
      >
        <p class="text-3xl text-[#54295D] font-thin">
          "Step into this experience with butterflies in your bones; with a
          nervous feeling so beautiful, you know you’re doing something right."
        </p>
        <p class="pt-6 text-[#54295D]">- d. antoinette foy</p>
      </div>
      <!-- Doula Packages -->
      <section
        v-for="hero in hero"
        :key="hero.id"
        :style="{ 'background-image': `url(${hero.image.backgroundImage})` }"
        class="h-[83vh] bg-cover grid text-center content-center"
      >
        <div class="grid text-center content-center xs:mt-20">
          <h1 class="text-violet-500 text-5xl font-extrabold">
            {{ hero.title }}
          </h1>
          <p class="pt-5 px-24">{{ hero.description }}</p>
          <CardButton
            ><button
              class="text-[#54295d] p-7 bg-violet-100 rounded-2xl mt-6 font-extrabold hover:bg-violet-300 hover:text-white"
            >
              {{ hero.button }}
            </button></CardButton
          >
        </div>
      </section>
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

<script setup>
  const hero = [
    {
      title: "Services",
      description:
        "We offer individual services based around your unique needs. We work with you to find the right support for the hopes and needs of your journeying birth story",
      image: {
        backgroundImage: "../../assets/images/sign-up-image.png",
      },
      button: "See Doula Packages",
    },
  ];
</script>

<style scoped>
  .app {
    display: flex;
    justify-content: center;
  }
</style>
