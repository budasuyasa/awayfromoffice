<script>
export default {
    props: {
        data: Array
    },
    emits:['showDetail']
}
</script>
<template>
    <div v-for="(row,index) in data" @click="$emit('showDetail', index)" :key="row.name" class="bg-white rounded-md border px-2 py-2 hover:shadow-md hover:ring-2 hover:ring-purple-300 hover:cursor-pointer">
        <h3 class="text-xl" v-text="row.name"></h3>
        <small class="text-gray-400" v-text="row.address"></small>
    </div>
</template>