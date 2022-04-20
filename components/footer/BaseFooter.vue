<template>
  <section
    class="grid grid-cols-3 bg-slate-50 opacity-95 mt-7 text-[#54295D] w-full"
  >
    <FooterCopyright>
      <footer>
        <p>&copy; Stephan Taylor & Renae Prince</p>
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
