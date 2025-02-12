<script setup>
</script>
<style scoped>
.hover-img {
  width: 60px;
  height: 60px;
  bottom: 100%;
  left: 48%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.hover-main:hover .hover-img {
  display: block;
  opacity: 1;
  transform: translateX(-50%) translateY(-10px);
}
</style>

<template>
  <main>
    <div class="text-center my-5 font-Silkscreen max-w-2xl mx-auto">
      <div>
        <p class="text-4xl ">About Me</p>
        <p class="text-4xl ">‾ ‾ ‾ ‾ ‾</p>
      </div>
      <img src="/582.png" alt="" class="max-h-44 mx-auto">

      <p class="text-2xl underline decoration-dotted decoration-1 underline-offset-4">· Ee Vonne Ng ·</p>
      <p class="mt-3 text-lg"> Graduated from UNITEN 2019</p>
      <p class="text-lg">On earth since 1996 DEC 21</p>
      <p class="text-lg">Ipoh Mari</p>


      <div class="mt-7">
        <p class="font-Quicksand text-justify">Dedicated front-end developer with over five years of experience in
          building dynamic web applications using Vue.js frameworks. Proven ability to create user-friendly interfaces
          and improve application performance while collaborating with cross-functional teams. Passionate about coding,
          design, and continuous learning.</p>
      </div>
      <!-- <div class="mt-7">
        <p class="font-Silkscreen text-lg mb-2">Skill</p>
        <p class="font-Quicksand">xxxx xxxxx xxxx xxxx xxxxx</p>
      </div> -->
      <div class="mt-7">
        <p class="font-Silkscreen text-xl mb-2">Skill</p>
        <p class="font-Quicksand">Vue, Tailwind, Agile, Jira, Git, Bitbucket, Bit of KQL, AEM. </p>
      </div>
      <div class="mt-7">
        <p class="font-Silkscreen text-xl mb-2">Language</p>
        <p class="font-Quicksand">Chinese, English, Malay, Cantonese.</p>
      </div>
      <div class="mt-7">
        <p class="font-Silkscreen text-xl mb-2">Fun Fact</p>

        <div class="font-Quicksand ">
          <div>
            <span>A </span>
            <span class="hover-main relative inline-block md:underline sm:no-underline decoration-dotted cursor-pointer">Dog mom,<img
                src="/dog.gif" alt="" class="hover-img absolute"></span>
            <span> Love to sleep, Love photography, K-pop, Love 2NE1, IU, MAYDAY.</span>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>
