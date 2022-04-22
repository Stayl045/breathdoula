<template>
  <section>
    <header>
      <BaseHeader />
    </header>
    
    <h1 class="flex justify-center py-7 text-6xl text-[#a99db4] text">
      Services
    </h1>
    <div
      class="flex flex-wrap flex-shrink-0 bg-[#a99db4] justify-evenly text-center justify-items-center gap-20 bg-cover m-3 p-20"
    >
      <BaseCard />
    </div>

    <section
      v-for="hero in hero"
      :key="hero.id"
      :style="{ 'background-image': `url(${hero.image.backgroundImage})` }"
      class="h-[110vh] bg-cover object-top grid m-3"
    ></section>
    <BaseFooter />
  </section>
</template>

<style scoped>
  h1 {
    font-family: "Quicksand", sans-serif;
  }
</style>

<script setup>
  const hero = [
    {
      image: {
        backgroundImage: "../../assets/images/services-page.png",
      },
    },
  ];
</script>

<script>
  export default {
    head() {
      return {
        link: [
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap",
          },
        ],
      };
    },
  };
</script>
