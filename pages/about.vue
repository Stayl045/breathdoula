<template>
  <section>
    <header>
      <BaseHeader />
    </header>
    <!-- About Hero -->
    <section
      v-for="hero in hero"
      :key="hero.id"
      :style="{ 'background-image': `url(${hero.image.backgroundImage})` }"
      class="h-[90vh] bg-cover bg-center m-3"
    ></section>
    <!-- About Info -->

    <section
      class="flex flex-wrap flex-row justify-evenly bg-[#a99db4] m-3 px-24"
    >
      <div class="grid text-center content-center max-w-sm">
        <h1 class="grid text-left content-star py-5 text-4xl">About Me</h1>
        <p class="grid text-left content-start font-normal text-lg text-white">
          Hi! So great to meet you! Let me tell you a little about myself. My
          name is Rae, I’m a mother to 3 teenagers, and a student of Sociology.
          I love books, vibrant colors, and warm weather. <br />

          And I’m a Birth Doula. I believe that every birth story is unique,
          beautiful, and worth celebrating. I’m passionate about nurturing power
          inherent in women that is demonstrated so preciously through pregnancy
          and childbirth. Bodily autonomy and inclusivity are central to my
          practice. <br />

          I look forward to meeting with you to discuss how I can support you
          and your partner in your sacred soon-to-be birth story.
        </p>
      </div>
      <div>
        <img
          class="rounded-full p-7"
          src="~/assets/images/about-image.png"
          alt="renae"
        />
      </div>
    </section>
    <BaseFooter />
  </section>
</template>

<script setup>
  const hero = [
    {
      image: {
        backgroundImage: "../../assets/images/about-page.jpg",
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
            href: "https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@300&display=swap",
          },
        ],
      };
    },
  };
</script>

<style scoped>
  h1 {
    font-family: "Josefin Slab", serif;
  }
  p {
    font-family: "Josefin Slab", serif;
  }
</style>
