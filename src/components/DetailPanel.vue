<script>
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
export default {
    props: {
        data: Object,
        show: Boolean
    },
    data() {
        return {
            isShow: this.show,
            detailsData: this.data
        }
    },
    components: { 
        IconGoogleMap, 
        IconInstagram, 
        IconClose, 
        IconPin, 
        FeatureCheckList, 
        IconAlcohol, 
        IconFlower, 
        IconSmoking, 
        IconPowerSource, 
        IconTable, 
        IconWIfi, 
        IconEggs, 
        IconDiapers, 
        IconMeeting, 
        IconCoffee 
    },
    emits: ['hidePanel'],
    watch: {
        data: {
            handler(newData) {
                this.detailsData = newData;
            },
            deep: true
        },
        show: {
            handler(newData) {
                this.isShow = newData;
            }
        }
    }
}
</script>
<template>
    <div id="detailPanel" 
        :class="[' w-[20rem] p-4 bg-white shadow-md h-screen fixed right-0 flex flex-col overflow-x-hidden overflow-y-scroll ', isShow ? 'block z-50' : 'hidden -z-50']">
        <div class="flex justify-end">
            <button class=" bg-white w-max ml-[auto] hover:text-purple-700" v-on:click="$emit('hidePanel')">
                <IconClose class="h-4 w-4" />
            </button>
        </div>
        <h3 class="text-2xl mt-4 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 line-clamp-1"
            v-text="data.name"></h3>
        <span class="text-sm text-gray-400 text-center line-clamp-2" v-text="data.address"></span>

        <div class="flex flex-row justify-evenly mt-4">
            <a class="px-2 py-2 rounded-full border focus:text-white focus:bg-purple-700 focus:ring-2 focus:ring-purple-300"
                :href="data.google_map" target="_blank">
                <IconGoogleMap class="h-4 w-4" />
            </a>
            <a class="px-2 py-2 rounded-full border focus:text-white focus:bg-purple-700 focus:ring-2 focus:ring-purple-300"
                :href="data.instagram" target="_blank">
                <IconInstagram class="h-4 w-4" />
            </a>
            <a class="px-2 py-2 rounded-full border focus:text-white focus:bg-purple-700 focus:ring-2 focus:ring-purple-300"
                href="#">
                <IconPin class="h-4 w-4" />
            </a>
        </div>

        <div class="flex flex-col mt-7" v-if="data">
            <FeatureCheckList :avail="data.diapersFriendly" label="Ramah Uang Popok">
                <IconDiapers class="h-4 w-4" />
            </FeatureCheckList>
            <FeatureCheckList :avail="data.goodCoffee" label="Kopinya Mantep">
                <IconCoffee class="h-4 w-4" />
            </FeatureCheckList>
            <FeatureCheckList :avail="data.mainfood" label="Makanan Beratnya Enak">
                <IconEggs class="h-4 w-4" />
            </featurechecklist>
            <FeatureCheckList :avail="data.meetings" label="Enak Buat Meeting">
                <IconMeeting class="h-4 w-4" />
            </FeatureCheckList>
            <FeatureCheckList :avail="data.wifi" label="WiFi Kenceng">
                <IconWIfi class="h-4 w-4" />
            </FeatureCheckList>
            <FeatureCheckList :avail="data.workingTable" label="Meja Kerja Ergonomis">
                <IconTable class="h-4 w-4" />
            </FeatureCheckList>
            <FeatureCheckList :avail="data.powerSource" label="Colokan Everywhere">
                <IconPowerSource class="h-4 w-4" />
            </FeatureCheckList>
            <FeatureCheckList :avail="data.smokingArea" label="Bisa Ngerokok">
                <IconSmoking class="h-4 w-4" />
            </FeatureCheckList>
            <FeatureCheckList :avail="data.greenView" label="Pemandangan Adem">
                <IconFlower class="w-4 h-4" />
            </FeatureCheckList>
            <FeatureCheckList :avail="data.alcohol" label="Alkohol Tipis-Tipis">
                <IconAlcohol class="w-4 h-4" />
            </FeatureCheckList>
        </div>
    </div>
</template>