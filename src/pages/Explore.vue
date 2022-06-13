<script>
import ExploreItem from '@/components/ExploreItem.vue';
import caffess from '../data/dummy.js';
import SearchForm from '../components/SearchForm.vue';
import DetailPanel from '../components/DetailPanel.vue'
export default {
    data() {
        return {
            detailShow: false,
            caffess,
            detailsData: {},
            detailsDataFeature: {},
            filterInput: {}
        }
    },
    components: { ExploreItem, SearchForm, DetailPanel },
    methods: {
        sidebarDetail(data) {
            this.detailsData = data;
            this.detailShow = true;
        },
        updateFilter(data){
            this.filterInput = data;
        }
    },
    emits() {
        'showDetail',
        'filterChanges'
    }
}

</script>

<template>
    <FrontLayout>
        <div :class="['flex flex-row ']">
            <div :class="[' px-4 mt-20 flex flex-col w-full ']">
                <!-- Search Form -->
                <SearchForm v-on:filterChanges="updateFilter"/>

                <!-- Explore Item -->
                <div class="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4 my-5">
                    <ExploreItem v-on:showDetail="sidebarDetail" :filter="filterInput" />
                </div>
            </div>

            <!-- Details Panel -->
            <DetailPanel :show="detailShow" :data="detailsData" v-on:hidePanel="detailShow = false" />

        </div>
    </FrontLayout>
</template>