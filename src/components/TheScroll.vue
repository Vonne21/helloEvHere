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
		{ root: document.querySelector('.scrollContent'), threshold: 1 } // Adjust threshold as needed
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
		<div class="text-center md:text-right w-full md:w-52">
			<div class=" flex flex-row md:flex-col justify-center p-0">
				<a class="my-3 mr-2 md:mr-0 last-of-type:mr-0 cursor-pointer transition-all duration-200"
					v-for="(item, index) in expItems" :key="index"
					:class="{ 'font-extrabold block': activeSection === item.id, 'hidden md:block': activeSection !== item.id }" @click="scrollToSection(item.id)">
					{{ item.label }}
				</a>
			</div>
		</div>

		<!-- scrollContent Sections -->
		<div class="scrollContent">
			<section v-for="(item, index) in expItems" :id="item.id" :key="index"
				class="scrollContent-items pt-3 px-4 pb-10 rounded-lg shadow-[0px_0px_5px_1px_#a0aec0] m-3">
				<h2 class="font-Silkscreen text-2xl ">{{ item.company }}</h2>
				<div class="font-Quicksand mt-4" v-for="(c, index) in item.content" :key="index">
					<a :href="c.link" target="_blank" rel="AIA MALAYSIA"
						class="font-Silkscreen mb-2 text-xl cursor-pointer hover:underline">
						{{ c.subCompany }}
					</a>
					<div v-for="(project, index) in c.project" :key="index">
						<p class="font-bold">{{ project.projectName }}</p>
						<p class="text-sm text-gray-500">{{ project.duration }}</p>
						<ul class="list-disc ml-5">
							<li v-for="(d, index) in project.description" :key="index">{{ d }}</li>
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
}

@media screen and (max-width: 450px ), (max-width: 768px) {
.scrollContent {
		max-width: 100%;
		height: 70vh;
	}
}

/* .scrollContent-items {
	min-height: 60vh;
} */
</style>
