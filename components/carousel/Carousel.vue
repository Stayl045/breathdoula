<template>
  <div class="carousel">
    <slot></slot>
    <button @click="next" class="next rounded-l-md">
      <svg
        class="mr-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 512"
      >
        <path
          d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
        />
      </svg>
    </button>
    <button @click="prev" class="prev rounded-r-md">
      <svg
        class="ml-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 512"
      >
        <path
          d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      next() {
        this.$emit("next");
      },
      prev() {
        this.$emit("prev");
      },
    },
  };
</script>

<style scoped>
  .carousel {
    position: relative;
    object-fit: contain;
    width: 100%;
    height: 90vh;
    overflow: hidden;
  }

  button {
    position: absolute;
    height: 40px;
    width: 50px;
    top: calc(50% - 20px);
    border: none;
  }

  button:focus,
  button:hover {
    outline: none;
    cursor: pointer;
  }

  .next {
    right: 0;
  }

  .prev {
    left: 0;
  }
</style>
