<script>
import NavItem from '@/components/NavItem.vue';

export default {
    components: {
        NavItem
    },
    mounted(){
    },
    methods: {
        isActive(path){
            return this.$route.name == path;
        }
    }
}


</script>

<template>
    <nav class="w-full fixed bg-white h-[3.4rem] flex flex-row p-4 shadow-lg">
        <NavItem :active="isActive('explore')" link="/" label="Explore"></NavItem>
        <NavItem :active="isActive('submit')" link="/new" label="Submit"></NavItem>
        <NavItem :active="isActive('about')" link="/about" label="About"></NavItem>
    </nav>
</template>