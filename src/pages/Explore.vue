<script>
import ExploreItem from '@/components/ExploreItem.vue';
export default {
    data() {
        return {
            detailShow: false,
            caffess: [
                {
                    name: "Kumpulin Coffee",
                    address: "Jalan Gatot Subroto No 388B",
                    features: {
                        wifi: false,
                        goodCoffee: true,
                        workingTable: true,
                        powerSource: true,
                        smokingArea: true,
                        greenView: false,
                    }
                },
                {
                    name: "Ghosha",
                    address: "Jalan Gatot Subroto No 78B",
                    features: {
                        wifi: true,
                        goodCoffee: false,
                        workingTable: true,
                        powerSource: true,
                        smokingArea: false,
                        greenView: false,
                    }
                },
                {
                    name: "Hita",
                    address: "Jalan Cokroaminoto",
                    features: {
                        wifi: true,
                        goodCoffee: true,
                        workingTable: true,
                        powerSource: true,
                        smokingArea: true,
                        greenView: false,
                    }
                },
            ],
            detailsData: {},
            detailsDataFeature: {}
        }
    },
    components: { ExploreItem },
    methods: {
        hello(index){
            this.detailsData = this.caffess[index];
            this.detailShow = true;
        }
    },
    emits(){
        'showDetail'
    }

}

</script>

<template>
    <FrontLayout>
        <div :class="['flex flex-row ']">
            <div :class="[' px-4 mt-24 flex flex-col w-full ']">
                <form>
                    <input type="text" placeholder="Search"
                        class="w-full bg-white h-[3rem] px-4 border rounded-md focus:outline-none focus:shadow-md" />
                </form>

                <div class="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4 my-5">
                    <ExploreItem :data="caffess" v-on:showDetail="hello" />
                </div>
            </div>

            <div v-show="detailShow && detailsData.features"
                :class="['w-[20rem] p-4 z-50 bg-white shadow-md h-screen fixed right-0 flex flex-col']">
                <div class="flex justify-end">
                    <button class=" bg-white w-max ml-[auto] hover:text-purple-700"
                        v-on:click="detailShow = false">ⓧ</button>
                </div>
                <h3 class="text-xl mt-4" v-text="detailsData.name"></h3>
                <span class="text-sm text-gray-400" v-text="detailsData.address"></span>
                <div class="flex flex-col mt-5" v-if="detailsData.features">
                    <span avail="✅ " notavail="🙅 " :class="[detailsData.features.goodCoffee ? 'before:content-[attr(avail)]' : 'before:content-[attr(notavail)]']">Kopinya Enak</span>
                    <span avail="✅ " notavail="🙅 " :class="[detailsData.features.wifi ? 'before:content-[attr(avail)]' : 'before:content-[attr(notavail)]']">Wifi Kencang</span>
                    <span avail="✅ " notavail="🙅 " :class="[detailsData.features.workingTable ? 'before:content-[attr(avail)]' : 'before:content-[attr(notavail)]']">Meja Kerja</span>
                    <span avail="✅ " notavail="🙅 " :class="[detailsData.features.powerSource ? 'before:content-[attr(avail)]' : 'before:content-[attr(notavail)]']">Colokan</span>
                    <span avail="✅ " notavail="🙅 " :class="[detailsData.features.smokingArea ? 'before:content-[attr(avail)]' : 'before:content-[attr(notavail)]']">Smoking Area</span>
                    <span avail="✅ " notavail="🙅 " :class="[detailsData.features.greenView ? 'before:content-[attr(avail)]' : 'before:content-[attr(notavail)]']">View Sejuk </span>
                </div>

                <div class="flex flex-row justify-around mt-8">
                    <a class="px-3 py-1 rounded border focus:text-white focus:bg-purple-700 focus:ring-2 focus:ring-purple-300" href="#">
                        Google Map
                    </a>
                    <a class="px-3 py-1 rounded border focus:text-white focus:bg-purple-700 focus:ring-2 focus:ring-purple-300" href="#">Instagram</a>
                </div>
            </div>
        </div>
    </FrontLayout>
</template>