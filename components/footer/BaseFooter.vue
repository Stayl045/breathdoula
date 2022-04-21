<template>
  <section
    class="grid grid-cols-3 bg-violet-50 opacity-95 text-[#54295D] w-full"
  >
    <FooterCopyright>
      <footer class="text-3xl tracking-wider">
        <p class="footer">&copy; Stephan Taylor & Renae Prince</p>
      </footer>
    </FooterCopyright>
    <div class="grid col-start-5 pt-6 mb-3 pr-12">
      <FooterSocialMedia>
        <a :href="'/'" class="hover:text-red-400 text-3xl">Social</a>
        <a :href="'/'" class="hover:text-red-400">Instagram</a>
        <a :href="'/'" class="hover:text-cyan-300">FaceBook</a>
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
