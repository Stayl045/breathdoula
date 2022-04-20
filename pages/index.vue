<template>
  <section>
    <header>
      <BaseHeader />
    </header>
    <main class="bg-slate-50">
      <div class="bg-slate-50">
        <img
          class="w-full h-[83vh] px-4 opacity-80"
          src="~/assets/images/hero-image.png"
          alt=""
        />
      </div>
      <div
        class="grid text-center content-center px-24 py-10 relative h-[83vh] bg-slate-100 shadow-slate-200 shadow-lg"
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
  export default {
    data() {
      return {
        slides: [],
        visibleSlide: 0,
      };
    },
  };
</script>
