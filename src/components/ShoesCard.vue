<template>
    <div class="w-[350px] h-[350px] bg-[#EBE9EA] flex justify-center items-center">
        <img :src="pathImage"  alt="ok">
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(["pathImage"]);

</script>
