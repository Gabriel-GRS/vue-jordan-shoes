<template>
    <div>
        <img :src="pathImage"  alt="ok">
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(["pathImage"]);

</script>
