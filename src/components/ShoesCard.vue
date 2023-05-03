<template>
    <div class="w-[350px] h-[350px] bg-[#EBE9EA] flex justify-center items-center rounded-xl">
        <img :src="pathImage"  alt="ok">
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(["pathImage"]);

</script>
