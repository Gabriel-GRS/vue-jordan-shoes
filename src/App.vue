<template>
    <header>
        <div class="w-full flex justify-center p-2">
            <p class="text-2xl font-bold">JordanShoes</p>
        </div>
        <Banner/>
    </header>
    <section>
        <div class="flex flex-col gap-2 w-full items-center mt-4">
            <h2 class="font-bold text-[22px] sm:text-[32px]">Destaques</h2>
            <p class="text-[18px] sm:[text-20px] text-center text-[#474747]">Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </p>
        </div>
    </section>
    <div class="flex justify-center">
        <div class="flex flex-col sm:grid sm:grid-cols-12 gap-4 mt-8 p-4">
            <div v-for="path in 8" :key="path" class="sm:col-span-3">
                <ShoesCard :path-image="`/src/assets/imgs/shoe${path}.svg`"/>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import Banner from './components/Banner.vue';
import ShoesCard from './components/ShoesCard.vue';
import Footer from './components/Footer.vue';

const imagesPath = [
    {
        path: '/src/assets/imgs/shoe1.png'
    },
    {
        path: '/src/assets/imgs/shoe1.png'
    },
]


</script>
