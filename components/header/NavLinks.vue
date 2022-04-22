<template>
  <section class="sm:flex sm:justify-between sm:px-3 sm:items-center sm:py-3">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <NuxtLink to="/" class="mx-10">
        <img src="../../assets/images/doula-logo.svg" alt="logo" />
      </NuxtLink>
      <div class="sm:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-white focus:text-white focus:outline-none"
        >
          <svg
            class="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.6.2C.2.7-.4 2.5.4 3.7L4.6 8l4 4L4.4 16C.4 20.1.3 20.3.1 21c-.2.6-.1 1.2.2 1.8.4.7 1.3 1.3 2.2 1.3.1 0 .4 0 .7-.2.5-.1 1-.6 4.7-4.3l4.1-4 4.1 4c4.1 4.1 4.2 4.2 4.8 4.3.4.2.7.2 1 .2a2.4 2.4 0 0 0 2-3.2c-.2-.5-.5-.8-4.3-4.7L15.5 12l4-4a54 54 0 0 0 4.2-4.6c.4-.6.4-1.5 0-2-.5-1.2-2-1.7-3.1-1.2l-4.4 4.2-4.2 4s-2-1.7-4.2-4A93.6 93.6 0 0 0 3.4.2C2.9 0 2.2 0 1.6.2Z"
              class="fill-[#54295D]"
            />

            <path
              v-if="!isOpen"
              fill="#54295D"
              class="fill-[#54295D]"
              d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3zm0
        7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0
        0-2H3z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="sm:flex mt-1 sm:ml-2 sm:p-0 mr-2"
    >
      <NuxtLink
        v-for="navLink in navLinks"
        :key="navLink.id"
        class="block p-1 font-thin text-[#54295D] hover:bg-violet-400 hover:text-white hover:rounded-md px-2 focus:text-gray-600 text-lg sm:mt-0"
        :to="navLink.path"
        >{{ navLink.name }}</NuxtLink
      >
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false,
      };
    },
  };
</script>

<script setup>
  const navLinks = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Inclusivity",
      path: "/inclusivity",
    },
    {
      name: "Connect",
      path: "/connect",
    },
  ];
</script>
