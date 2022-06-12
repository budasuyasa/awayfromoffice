<script>
import IconFilter from '@/components/icons/IconFilter.vue';
import IconClose from './icons/IconClose.vue';
import IconUp from './icons/IconUp.vue';
import filterItem from '../data/feature_list.js';


export default {
    data() {
        return {
            showFilter: false,
            filterItem,
            filterInput: {}

        }
    },
    components: { IconFilter, IconClose, IconUp },
    methods: {
        checkWifi() {
            console.log(this.wifi);
        },
        checkKeyword: function () {
            console.log(this.keyword);
        },
        updateFilter(){
            this.$emit('filterChanges', this.filterInput)
        }
    },
    mounted() {
        let _filterInput = { keyword: '' };
        for (let i = 0; i < this.filterItem.length; i++) {
            _filterInput[this.filterItem[i].value] = false;
        }
        this.filterInput = _filterInput;

    },
    emits: ['filterChanges'],
    watch: {
        filterInput: {
            handler(newData) {
                this.updateFilter();
            },
            deep: true
        }
    }

}
</script>
<template>
    <form class="flex flex-col" @submit.prevent="updateFilter">
        <div class="flex flex-row">
            <button type="button" @click="showFilter = !showFilter"
                :class="['bg-white rounded border p-2 mr-1 lg:mr-1 hover:ring-1 hover:ring-purple-400 focus:ring-purple-400', showFilter ? 'ring-1 ring-purple-400' : '']">
                <IconFilter class="w-4 h-4" v-if="showFilter == false" />
                <IconUp class="w-4 h-4" v-if="showFilter" />
            </button>

            <input type="text" placeholder="Cari Caffee..." name="keyword" autocomplete="off"
                class="w-full bg-white h-[3rem] px-4 border rounded-md focus:outline-none focus:shadow-md"
                v-model="filterInput['keyword']" />

        </div>

        <div class="flex flex-col flex-wrap md:grid md:grid-cols-4 lg:grid lg:grid-cols-5 mt-4 " v-if="showFilter">
            <div class="flex flex-row items-center text-sm mr-2 mb-3" v-for="(item, index) in filterItem"
                :key="item.id">
                <input :id="item.id" type="checkbox" :name="item.value" v-model="filterInput[item.value]" />
                <label :for="item.id" class="mx-1 text-gray-600">{{ item.label }}</label>
            </div>
        </div>
    </form>
</template>