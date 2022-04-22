<template>
  <section
    class="flex text-center justify-center flex-col bg-violet-50 opacity-95 text-[#54295D] w-full"
  >
    <FooterCopyright>
      <footer class="text-3xl tracking-wider">
        <p class="footer pt-10">&copy;Stephan Taylor & Renae Prince</p>
      </footer>
    </FooterCopyright>
    <div class="grid text-center content-center pb-10">
      <FooterSocialMedia>
        <a :href="'/'" class="hover:text-violet-400 text-3xl">Social</a>
        <a :href="'/'" class="hover:text-violet-400">Instagram</a>
        <a :href="'/'" class="hover:text-violet-400">FaceBook</a>
      </FooterSocialMedia>
    </div>
  </section>
</template>

<style scoped>
  .footer {
    font-family: "Indie Flower", cursive;
  }
</style>

<script>
  export default {
    head() {
      return {
        link: [
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap",
          },
        ],
      };
    },
  };
</script>
