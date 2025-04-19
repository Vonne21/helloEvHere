<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

let isMobileView = ref(false);
let callme = ref(false);

const checkIsMobile = () => {
  console.log('isMobile');
  if (window.innerWidth < 450) {
    isMobileView.value = true;
  } else {
    isMobileView.value = false;
  }
}
onMounted(() => {
  window.addEventListener('resize', checkIsMobile); // Pass the function reference, not the result of its call
  checkIsMobile(); // Check the screen size immediately after mounting
});

// Cleanup the event listener when the component is unmounted
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkIsMobile);
});

</script>

<template>
  <main>
    <div class="text-center mt-5">
      <div>
        <p class="font-Silkscreen text-4xl ">Contact Me</p>
        <p class="font-Silkscreen text-4xl mb-5">‾ ‾ ‾ ‾ ‾</p>
      </div>
      <!-- <img src="/530.png" alt="" class="max-h-44 mx-auto"> -->
      <img src="/hand.png" alt="" class="max-h-40 mx-auto animate-bounce">



      <div class="rounded-lg border-2 border-black border-dashed mx-auto w-max px-5 py-4 dim">

        <a class="flex justify-center mb-5 cursor-pointer" href="https://www.linkedin.com/in/eevonneng/"
          target="_blank">
          <img src="/linkedin.png" alt="" class="h-4 w-4 self-center mr-2">
          <p class="font-Silkscreen">Ee Vonne's Linkedin</p>
        </a>

        <p class="font-Silkscreen mb-5"><a href="mailto:eevonne.ng@gmail.com" type="email">eevonne.ng@gmail.com</a></p>

        <div v-if="!isMobileView" class="group relative font-Silkscreen cursor-pointer">
          <div class="flex visible group-hover:invisible justify-center">
            <p> <span class="animate-ping">>></span> So call me maybe <span class="animate-ping">
                << </span>
            </p>
          </div>
          <a href="https://wa.me/+60192842975"
            class="absolute top-0 left-0 invisible group-hover:visible bottom-0 right-0" target="_blank"
            id="phone-number"> +6019 284 2975
          </a>
        </div>

        <div v-if="isMobileView" class="group relative font-Silkscreen cursor-pointer">
            <a href="https://wa.me/+60192842975" target="_blank">
              <span class="animate-ping">>></span> So call me maybe
              <span class="animate-ping"><<</span>
            </a>
        </div>

      </div>

    </div>
  </main>
</template>

<style scope>
.dim {
  background-color: rgba(133, 164, 214, 0.2);
}
</style>
