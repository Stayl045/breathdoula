<template>
  <section>
    <header>
      <BaseHeader />
    </header>
    <!-- hero Image -->
    <section
      v-for="hero in hero"
      :key="hero.id"
      :style="{ 'background-image': `url(${hero.image.backgroundImage})` }"
      class="h-[90vh] bg-cover bg-center m-3 grid text-center content-center justify-center pt-56"
    >
      <h1 class="text-violet-50 text-9xl">
        {{ hero.title }}
      </h1>
    </section>
    <!-- Content -->
    <section
      class="flex flex-wrap flex-row justify-evenly bg-[#a99db4] m-3 px-24 py-10"
    >
      <div>
        <img
          class="h-[60vh] rounded-full p-7"
          src="~/assets/images/inclusivity-butterflys.jpg"
          alt="butterflys"
        />
      </div>
      <div class="grid text-center content-center max-w-sm">
        <p class="grid text-left content-start font-normal text-lg text-white">
          Family is created through built connections, making each unit unique
          and diverse. All forms of family are supportted and valued here at
          Breath Doula. <br />

          We support the lgbtq+ community and identity reclamation, striving to
          create an enviroment of safety and support for all our clients,
          particularily in regards to the sensitive area of birthing bodies.
          <br />
          We also recognize the particular struggles of marginalized bodies,
          approaching each situation with an awareness and deep appreciation for
          specific challenges faced by many in our unsettling colonialized,
          heteronormative society.
        </p>
      </div>
    </section>
  </section>
</template>

<script setup>
  const hero = [
    {
      title: "Inclusivity",
      image: {
        backgroundImage: "../../assets/images/inclusivity-image.jpg",
      },
    },
  ];
</script>
