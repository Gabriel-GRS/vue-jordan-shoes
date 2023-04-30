<template>
    <div>
        <img :src="props.pathImage"  alt="ok">
    </div>
</template>

<script setup>

const props = defineProps({
    pathImage: {
        type: String,
        default: '../assets/imgs/shoe1.svg'
    }
})


</script>
