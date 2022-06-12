<script>
import ExploreItem from '@/components/ExploreItem.vue';
import IconGoogleMap from '@/components/icons/IconGoogleMap.vue';
import IconInstagram from '../components/icons/IconInstagram.vue';
import IconClose from '../components/icons/IconClose.vue';
import IconPin from '../components/icons/IconPin.vue';
import FeatureCheckList from '../components/FeatureCheckList.vue';
import IconAlcohol from '../components/icons/IconAlcohol.vue';
import IconFlower from '../components/icons/IconFlower.vue';
import IconSmoking from '../components/icons/IconSmoking.vue';
import IconPowerSource from '../components/icons/IconPowerSource.vue';
import IconTable from '../components/icons/IconTable.vue';
import IconWIfi from '../components/icons/IconWIfi.vue';
import IconEggs from '../components/icons/IconEggs.vue';
import IconDiapers from '../components/icons/IconDiapers.vue';
import IconMeeting from '../components/icons/IconMeeting.vue';
import IconCoffee from '../components/icons/IconCoffee.vue';
import caffess from '../data/dummy.js';
import SearchForm from '../components/SearchForm.vue';
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
    components: { ExploreItem, IconGoogleMap, IconInstagram, IconClose, IconPin, FeatureCheckList, IconAlcohol, IconFlower, IconSmoking, IconPowerSource, IconTable, IconWIfi, IconEggs, IconDiapers, IconMeeting, IconCoffee, SearchForm },
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
            <div id="detailPanel" v-show="detailShow && detailsData"
                class="w-[20rem] p-4 z-50 bg-white shadow-md h-screen fixed right-0 flex flex-col overflow-x-hidden overflow-y-scroll">
                <div class="flex justify-end">
                    <button class=" bg-white w-max ml-[auto] hover:text-purple-700" v-on:click="detailShow = false">
                        <IconClose class="h-4 w-4" />
                    </button>
                </div>
                <h3 class="text-2xl mt-4 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 line-clamp-1"
                    v-text="detailsData.name"></h3>
                <span class="text-sm text-gray-400 text-center line-clamp-2" v-text="detailsData.address"></span>

                <div class="flex flex-row justify-evenly mt-4">
                    <a class="px-2 py-2 rounded-full border focus:text-white focus:bg-purple-700 focus:ring-2 focus:ring-purple-300"
                        :href="detailsData.google_map" target="_blank">
                        <IconGoogleMap class="h-4 w-4" />
                    </a>
                    <a class="px-2 py-2 rounded-full border focus:text-white focus:bg-purple-700 focus:ring-2 focus:ring-purple-300"
                        :href="detailsData.instagram" target="_blank">
                        <IconInstagram class="h-4 w-4" />
                    </a>

                    <a class="px-2 py-2 rounded-full border focus:text-white focus:bg-purple-700 focus:ring-2 focus:ring-purple-300"
                        href="#">
                        <IconPin class="h-4 w-4" />
                    </a>
                </div>

                <div class="flex flex-col mt-7" v-if="detailsData">
                    <FeatureCheckList :avail="detailsData.diapersFriendly" label="Ramah Uang Popok">
                        <IconDiapers class="h-4 w-4" />
                    </FeatureCheckList>
                    <FeatureCheckList :avail="detailsData.goodCoffee" label="Kopinya Mantep">
                        <IconCoffee class="h-4 w-4" />
                    </FeatureCheckList>
                    <FeatureCheckList :avail="detailsData.mainfood" label="Makanan Beratnya Enak">
                        <IconEggs class="h-4 w-4" />
                    </featurechecklist>
                    <FeatureCheckList :avail="detailsData.meetings" label="Enak Buat Meeting">
                        <IconMeeting class="h-4 w-4" />
                    </FeatureCheckList>
                    <FeatureCheckList :avail="detailsData.wifi" label="WiFi Kenceng">
                        <IconWIfi class="h-4 w-4" />
                    </FeatureCheckList>
                    <FeatureCheckList :avail="detailsData.workingTable" label="Meja Kerja Ergonomis">
                        <IconTable class="h-4 w-4" />
                    </FeatureCheckList>
                    <FeatureCheckList :avail="detailsData.powerSource" label="Colokan Everywhere">
                        <IconPowerSource class="h-4 w-4" />
                    </FeatureCheckList>
                    <FeatureCheckList :avail="detailsData.smokingArea" label="Bisa Ngerokok">
                        <IconSmoking class="h-4 w-4" />
                    </FeatureCheckList>
                    <FeatureCheckList :avail="detailsData.greenView" label="Pemandangan Adem">
                        <IconFlower class="w-4 h-4" />
                    </FeatureCheckList>
                    <FeatureCheckList :avail="detailsData.alcohol" label="Alkohol Tipis-Tipis">
                        <IconAlcohol class="w-4 h-4" />
                    </FeatureCheckList>
                </div>

            </div>
        </div>
    </FrontLayout>
</template>