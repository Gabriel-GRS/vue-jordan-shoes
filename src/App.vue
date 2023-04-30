<template>
    <div class="w-full flex justify-center p-2">
        <p class="text-2xl font-bold">JordanShoes</p>
    </div>
    <Banner/>
    <div class="flex flex-col gap-2 w-full items-center mt-4">
        <h2 class="font-bold text-[32px]">Destaques</h2>
        <p class="text-[20px] text-[#474747]">Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </p>
    </div>
    <div v-for="(image, index) in images" :key="index">
        <ShoesCard :path-image="image.src"/>
    </div>
</template>

<script setup>
import Banner from './components/Banner.vue';
import ShoesCard from './components/ShoesCard.vue';


</script>
