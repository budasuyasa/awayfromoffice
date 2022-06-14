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
import { useStore } from '@/stores/main'
export default {
    setup() {
        const store = useStore()
        return {
            store
        }
    },
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
    emits: ['hidePanel','showPanel'],
    watch: {
        data: {
            handler(newData) {
                this.detailsData = newData;
            },
            deep: true
        },
        show: {
            handler(newData) {
                console.log("show? ", newData)
                this.isShow = newData;
            }
        },
        "store.newPlaceData":{
            handler(data){
                if(Object.keys(data).length !== 0){
                    this.detailsData = data
                    console.log(this.detailsData)
                    this.$emit('showPanel');
                    console.log(this.detailsData)
                    this.store.$patch({ isLoading: false, isNewPlaceSubmited: false, newPlaceData: {}, filterInput: {keyword: data.name}  })
                }
            },
            deep: true

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

        <div class="flex flex-col mt-7" v-if="data">
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
</template>