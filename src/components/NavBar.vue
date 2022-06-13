<script>
import NavItem from '@/components/NavItem.vue';
import AddPlace from './AddPlace.vue';
export default {
    data() {
        return {
            showAddModal: false,
        }
    },
    components: {
        NavItem, AddPlace
    },
    mounted() {
    },
    methods: {
        isActive(path) {
            return this.$route.name == path;
        },
    }
}
</script>

<template>
    <nav class="w-full fixed bg-white h-[3.4rem] flex flex-row justify-start align-middle p-2 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 48 48">
            <g fill="currentColor">
                <path d="M35 9.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z" />
                <path fill-rule="evenodd"
                    d="M31.5 11a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0 2a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7ZM19 16a2 2 0 1 0 0 4h7v20a2 2 0 1 0 4 0v-9h3v9a2 2 0 1 0 4 0V27.917A6.002 6.002 0 0 0 36 16H19Zm20 6a2 2 0 0 0-2-2v4a2 2 0 0 0 2-2Z"
                    clip-rule="evenodd" />
                <path fill-rule="evenodd"
                    d="M6 32a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8Zm4 7v-6h2v6h-2Zm7-6v6h2v-6h-2Zm-6-5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2h-2v-2h-3v2h-2v-2Z"
                    clip-rule="evenodd" />
            </g>
        </svg>
        <span class="font-extrabold my-auto">Kerja di Luar</span>
        <button @click="showAddModal = true"
            class="font-bold text-purple-700 border py-2 px-2 mr-2 rounded-md ml-auto text-sm hover:ring-purple-700 hover:ring-2 ">Tambahin
            Tempat</button>
    </nav>

    <AddPlace :show="showAddModal" v-on:close-modal="showAddModal = false" />
</template>
<style>
</style>