<script>
export default {
    props: {
        label: String,
        avail: Number,
    },
    methods: {
        cssClass() {
            return this.avail == 1 ? 'text-black font-bolder' : 'text-gray-400 line-through';
        }
    },
}
</script>
<template>
    <div :class="['inline-flex items-center gap-2 mb-2', cssClass()]">
        <slot></slot>
        <span>{{ label }}</span>
    </div>
</template>