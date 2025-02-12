<script setup>
import { ref, onMounted } from 'vue'

let latitude = ref();
let longitude = ref();
let weatherData = ref();
let date = ref(new Date().toDateString());

async function callWeatherApi(latitude, longitude ) {
	let weatherApiUrl = `http://api.weatherapi.com/v1/current.json?key= 50292dda8cac4db083985947241112&q=` + `${latitude},${longitude}` + `&aqi=yes`
	await fetch(weatherApiUrl)
		.then(response => { return response.json() })
		.then(data => {
			weatherData.value = data;
		})
}
async function getGeolocation() {
	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			latitude.value = position.coords.latitude;
			longitude.value = position.coords.longitude; 
			callWeatherApi(position.coords.latitude, position.coords.longitude)
		});
	} else {
		console.log("Geolocation is not supported by this browser.");
	}
}

onMounted(() => {
	getGeolocation();
});



</script>

<style scope></style>

<template>
	<div v-if="weatherData" class="px-6 visible mt-2 text-xs font-Silkscreen ">
		<div class="max-w-2xl mx-auto">
			<span class="flex flex-col md:flex-row items-center md:justify-center">
				<p class="mr-0 md:mr-4">★ {{ weatherData.location.region }}</p>
				<p class="mr-0 md:mr-4">{{ date }}</p>
				<p class="mr-0 md:mr-4">{{ weatherData.current.temp_c }}°C</p>
				<p class="">{{ weatherData.current.condition.text }} ★</p>
			</span>
		</div>
	</div>
	<div v-else class="flex justify-center"><img src="/loading.gif" alt="" class="w-6 h-4 mt-2"></div>
</template>