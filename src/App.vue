<script setup>
import { watch, ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import TheWeatherDisplay from "./components/TheWeatherDisplay.vue";

const router = useRouter()
const route = useRoute();
let currentPath = ref();
let currentAboutMe = ref(false);
let currentExp = ref(false);
let currentContact = ref(false);
let isMobileView = ref(false);
let isMenuOpen = ref(false)

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


watch(route, (route) => {
  
  currentPath.value = route.fullPath;
  switch (currentPath.value) {
    case '/':
      router.push('/AboutMe')
      currentAboutMe.value = true;
      currentExp.value = false;
      currentContact.value = false;
      break;
    case '/AboutMe':
      currentAboutMe.value = true;
      currentExp.value = false;
      currentContact.value = false;
      break;
    case '/MyExperience':
      currentAboutMe.value = false;
      currentExp.value = true;
      currentContact.value = false;
      break;
    case '/ContactMe':
      currentAboutMe.value = false;
      currentExp.value = false;
      currentContact.value = true;
      break;
  
    default:
      break;
  }
  if (currentPath.value == '/') {
    router.push('/AboutMe')
    currentAboutMe.value = true;
  }
})



</script>

<template >

  <header
    class="shadow-md shadow-blue-500/50 flex font-Silkscreen border-b-2 border-cyan-100 items-center fixed top-0 w-full z-50">

    <RouterLink to="/" class="text-black pulse-animation mr-auto md:ml-7">HELLO :)</RouterLink>


    <div v-if="!isMobileView" class="flex mr-7">
      <RouterLink to="/AboutMe" class="group flex mr-6 ">
        <p
          :class="[currentAboutMe ? 'visible pulse-animation' : 'invisible group-hover:visible group-hover:animate-pulse']">
          *</p>
        <button class="text-black">ABOUT</button>
      </RouterLink>

      <RouterLink to="/MyExperience" class="group flex mr-6">
        <p
          :class="[currentExp ? 'visible pulse-animation' : 'invisible group-hover:visible group-hover:animate-pulse']">
          *</p>
        <button class="text-black">EXP</button>
      </RouterLink>

      <RouterLink to="/ContactMe" div class="group flex">
        <p
          :class="[currentContact ? 'visible pulse-animation' : 'invisible group-hover:visible group-hover:animate-pulse']">
          *</p>
        <button class="text-black">CONTACT ME</button>
      </RouterLink>
    </div>

    <div v-else>
      <button class="flex flex-col content-center">
        <span v-if="!isMenuOpen" @click="isMenuOpen = true"><img class="w-8 h-8" src="/star-0.png" alt=""></span>
        <span v-else @click="isMenuOpen = false"><img class="w-8 h-8 pulse-animation" src="/star-1.png" alt=""></span>
      </button>

      <nav v-if="isMenuOpen"
        class="z-50 border-b-2 border-t-2 border-black border-dotted rounded-md shadow shadow-gray-500/50 bg-blue-666 bg-opacity-95 bg-blend-darken w-2/5 right-3 top-16 absolute px-3 py-2">
        <div class="text-right">
          <RouterLink @click="isMenuOpen = false" to="/AboutMe" class="group flex justify-end mb-1">
            <button class="text-black mr-1">ABOUT</button>
            <p
              :class="[currentAboutMe ? 'visible pulse-animation' : 'invisible group-hover:visible group-hover:animate-pulse']">
              *</p>
          </RouterLink>

          <RouterLink @click="isMenuOpen = false" to="/MyExperience" class="group flex mb-1 justify-end">
            <button class="text-black mr-1">EXP</button>
            <p
              :class="[currentExp ? 'visible pulse-animation' : 'invisible group-hover:visible group-hover:animate-pulse']">
              *</p>
          </RouterLink>

          <RouterLink @click="isMenuOpen = false" to="/ContactMe" div class="group flex justify-end">
            <button class="text-black mr-1">CALL ME</button>
            <p
              :class="[currentContact ? 'visible pulse-animation' : 'invisible group-hover:visible group-hover:animate-pulse']">
              *</p>
          </RouterLink>
        </div>
      </nav>
    </div>

  </header>

  <TheWeatherDisplay />
  <transition name="fade" mode="out-in">
    <RouterView :key="$route.fullPath" class="screen-h pt-32 md:pt-28" />
  </transition>

</template>

<style scoped>
.pulse-animation {
  animation: pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
/* Add animation manually */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.screen-h {
  min-height: calc(100vh - 74px);
}

@media screen and (max-width: 450px), (max-width: 768px) {
.screen-h {
    min-height: calc(100vh - 120px);
  }
}
</style>