<template>
  <section>
    <header>
      <BaseHeader />
    </header>
    <div class="grid grid-flow-col rounded-sm m-5">
      <!-- Beginning of Form -->
      <div class="p-4 max-w-xl">
        <FormKit
          type="form"
          v-model="formData"
          :form-class="submitted ? 'hide' : 'show'"
          submit-label="Submit"
          @submit="submitHandler"
          submit-label-class="bg-slate-500"
        >
          <h1 class="text-4xl font-semibold pt-5">Get in Touch!</h1>
          <p class="w-2xl pt-5">
            I look forward to hearing from you to schedule an interview to see
            if we would be the right fit for you and your journey. Feel free to
            message with any questions or for more information.
          </p>
          <hr class="pb-10" />
          <!-- Name -->
          <FormKit
            type="text"
            name="name"
            label="First Name"
            placeholder="First Name"
            help="What do people call you?"
            validation="required"
            outer-class="mb-5"
            label-class="block mb-1 font-bold text-sm"
            inner-class="max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-[#54295D]"
            input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400"
            help-class="text-xs text-gray-500"
          />
          <!-- Late Name -->
          <FormKit
            type="text"
            name="last name"
            label="Last Name"
            placeholder="Last Name"
            help="What is your sir name?"
            validation="required"
            :classes="{
              outer: 'mb-5',
              label: 'block mb-1 font-bold text-sm',
              inner:
                'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-[#54295D]',
              input:
                'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
              help: 'text-xs text-gray-500',
            }"
          />
          <!-- Email -->
          <FormKit
            type="text"
            name="email"
            label="Your Email"
            placeholder="example@example.com"
            help="What email should we use?"
            validation="required|email"
            :classes="{
              outer: 'mb-5',
              label: 'block mb-1 font-bold text-sm',
              inner:
                'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-[#54295D]',
              input:
                'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
              help: 'text-xs text-gray-500',
            }"
          />
          <!-- Expected Due Date? -->
          <FormKit
            type="date"
            name="date"
            label="Expected Due Date?"
            validation="required"
            :classes="{
              outer: 'mb-5',
              label: 'block mb-1 font-bold text-sm',
              inner:
                'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
              input:
                'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
              help: 'text-xs text-gray-500',
            }"
          />
          <!-- Doula Options -->
          <FormKit
            type="radio"
            name="interested"
            label="Interested In?"
            :options="{
              birth: 'Birth Doula Support',
              post: 'Post Partum Doula Support',
              breast: 'Breast Feeding Support',
            }"
          />
          <!-- Textarea -->
          <FormKit
            type="textarea"
            name="text"
            label="Anything Else?"
            validation="required"
            placeholder="What can I do for you"
            help="A short message letting me know what you are looking for"
            :classes="{
              outer: 'mb-5',
              inner:
                'max-w-md h-24 border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
              input:
                'w-full h-24 px-3 border-none text-base text-gray-700 placeholder-gray-400',
              label: 'block mb-1 font-bold text-sm',
              help: 'text-xs text-gray-500',
            }"
          />
        </FormKit>
      </div>
      <div class="grid text-center content-center">
        <img
          class="w-[100%] max-w-[90vw] h-[100vh] rounded-full px-10"
          src="../../assets/images/connect-page.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="flex justify-center gap-y-14" v-if="submitted">
      <h2>Submission successful!</h2>
    </div>
    <BaseFooter />
  </section>
</template>

<script setup>
  import { ref } from "vue";
  import "@formkit/themes/genesis";
  const submitted = ref(false);
  const formData = ref({});
  const submitHandler = async () => {
    // Let's pretend this is an ajax request:
    await new Promise((r) => setTimeout(r, 1000));
    submitted.value = true;
  };
</script>
