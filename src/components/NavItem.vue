<script>
import { ref } from 'vue';
export default {
    data(){
        return {
            normalClass: 'mr-5 hover:text-purple-700 hover:underline underline-offset-4',
            activeClass: 'underline text-purple-700'
        }
    },
    props: {
        link: String,
        label: String,
        active: Boolean,
    },
    mounted(){
    }
}

</script>
<template>
    <router-link :to="link" :class="[normalClass, active ? activeClass : '']">{{ label }}</router-link>
</template>