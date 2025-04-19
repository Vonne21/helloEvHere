<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import expList from '@/assets/expList.json';

const expItems = ref(expList);
const activeSection = ref(expItems.value[0]?.id || '');
let observer = null;

onMounted(() => {
	observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					activeSection.value = entry.target.id;
				}
			});
		},
		{ root: document.querySelector('.scrollContent'), threshold: 0.6 } // Adjust threshold as needed
	);

	// Observe all sections
	expItems.value.forEach((item) => {
		const section = document.getElementById(item.id);
		if (section) observer.observe(section);
	});
});

onBeforeUnmount(() => {
	if (observer) {
		observer.disconnect(); // Stop observing when component is destroyed
	}
});

const scrollToSection = (sectionId) => {
	const section = document.getElementById(sectionId);
	const container = document.querySelector('.scrollContent');
	if (section && container) {
		const offset = 10; // Adjust offset for better visibility
		const sectionPosition = section.offsetTop - container.offsetTop - offset;
		container.scrollTo({ top: sectionPosition, behavior: 'smooth' });
	}
};
</script>

<template>
	<div class="fixed mx-auto max-w-4xl flex flex-col md:flex-row font-Silkscreen pt-2 left-0 right-0 px-4 md:px-0">
		<!-- Side Menu -->
		<div class="text-center md:text-right w-full md:w-52 ">
			<div class=" flex flex-row md:flex-col justify-center p-0 overflow-scroll flex-shrink-0">
				<a class="flex-shrink-0 my-3 mr-4 md:mr-0 last-of-type:mr-0 cursor-pointer transition-all duration-200"
					v-for="(item, index) in expItems" :key="index"
					:class="{ 'font-extrabold ': activeSection === item.id,}"
					@click="scrollToSection(item.id)">
					{{ item.label }}
				</a>
			</div>
		</div>

		<!-- scrollContent Sections -->
		<div class="scrollContent ml-2">
			<section v-for="(item, index) in expItems" :id="item.id" :key="index"
				class="scrollContent-items pt-3 px-4 pb-10 rounded-lg border-width border-cyan-200 shadow-[0px_0px_5px_3px_#b2e0f2] mx-3 mb-5 first:mt-2">
				<h2 class="font-Silkscreen text-2xl text-center text-shadow">{{ item.company }}</h2>
				<div class="font-Quicksand mt-4" v-for="(c, index) in item.content" :key="index">
					<a :href="c.link" target="_blank" rel="AIA MALAYSIA"
						class="font-Silkscreen mb-2 text-xl cursor-pointer hover:underline">
						{{ c.subCompany }}
					</a>
					<div v-for="(project, index) in c.project" :key="index">
						<p class="font-bold mt-2">{{ project.projectName }}</p>
						<p class="text-sm text-gray-500 ml-4">{{ project.duration }}</p>
						<ul class="list-none ml-3 mb-4">
							<li v-for="(d, index) in project.description" :key="index"
								class="flex mt-1 font-Figtree font-normal tracking-wide leading-[1.2]">
								<img src="/check_small.png" class="w-5 h-5 mt-1 mr-0.5">{{ d }}
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<style scoped>
.scrollContent {
	max-width: calc(100% - 20rem);
	height: 85vh;
	overflow-y: auto;
	scroll-behavior: smooth;
	padding-bottom: 100px;
	scrollbar-width: thin;
	scrollbar-color: #a5f3fc #ffffff00;
}
.scrollContent-items {
	background-color: rgba(133, 164, 214, 0.1);
}

.border-width {
	border-width: 1.5px;
}

.text-shadow {
	text-shadow: 4px 3px 4px #a5f3fc;
}

@media screen and (max-width: 450px ), (max-width: 768px) {
.scrollContent {
		max-width: 100%;
		height: 70vh;
	}
}
</style>
