<script>
export default {
    props: {
        label: String,
        avail: Boolean,
    },
    methods: {
        cssClass() {
            return this.avail ? 'text-black font-bolder' : 'text-gray-400 line-through';
        }
    },
}
</script>
<template>
        <div :class="['inline-flex items-center gap-2', cssClass()]">
            <slot></slot>
            <span>{{ label }}</span>
        </div>
</template>