<template>
  <section
    v-for="card in cards"
    :key="card.id"
    class="grid text-center content-center p-8 shadow-lg shadow-violet-100 w-[90%] lg:max-w-[25vw] h-[70vh] bg-cover bg-center bg-no-repeat rounded-lg"
    :style="{ 'background-image': `url(${card.image.backgroundImage})` }"
  >
    <div class="grid text-center content-center">
      <CardTitle>{{ card.title }}</CardTitle>
      <CardButton>
        <button
          class="rounded-md text-[#54295d] p-3 bg-violet-100 font-semibold hover:scale-110 transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-violet-300 duration-300"
        >
          {{ card.button }}
        </button>
      </CardButton>
    </div>
    <slot></slot>
  </section>
</template>

<script setup>
  const cards = [
    {
      title: "Prenatel",

      image: {
        backgroundImage:
          "https://images.unsplash.com/photo-1612767969528-5448a20175d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      },
      button: "Explore",
    },
    {
      title: "Delivery",
      image: {
        backgroundImage:
          "https://images.unsplash.com/photo-1550763200-07ec8d915a99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      },
      button: "Explore",
    },
    {
      title: "Post Partum & Lactation Support",
      image: {
        backgroundImage:
          "https://images.unsplash.com/photo-1609673347303-aba83277062d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      },
      button: "Explore",
    },
  ];
</script>
