<script setup>
import { watch, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute();
let currentPath = ref();
let currentAboutMe = ref(false);
let currentExp = ref(false);
let currentContact = ref(false);

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
  <header class="shadow-md shadow-blue-500/50 flex font-Silkscreen border-b-2 border-cyan-100">

    <RouterLink to="/" class="text-black pulse-animation mr-auto">HELLO :)</RouterLink>

    <RouterLink to="/AboutMe" class="group flex mr-3">
      <p :class="[currentAboutMe ? visible : 'invisible group-hover:visible group-hover:animate-pulse']">*</p>
      <button class="text-black">ABOUT</button>
    </RouterLink>

    <RouterLink to="/MyExperience" class="group flex mr-3">
      <p :class="[currentExp ? visible : 'invisible group-hover:visible group-hover:animate-pulse']">*</p>
      <button class="text-black">EXP</button>
    </RouterLink>

    <RouterLink to="/ContactMe" div class="group flex">
      <p :class="[currentContact ? visible : 'invisible group-hover:visible group-hover:animate-pulse']">*</p>
      <button class="text-black">CONTACT ME</button>
    </RouterLink>
  </header>
  <RouterView />
</template>

<style scoped>
.pulse-animation {
  animation: pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}


</style>
