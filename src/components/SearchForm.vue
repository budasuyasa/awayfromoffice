<script>
import IconFilter from '@/components/icons/IconFilter.vue';
export default {
    data() {
        return {
            showFilter: false,
            filterItem: [
                {
                    id: "check_wifi",
                    value: "wifi",
                    label: "WiFi Kenceng"
                },

                {
                    id: "check_food",
                    value: "mainFood",
                    label: "Makanan Beratnya Enak"
                },

                {
                    id: "check_coffee",
                    value: "goodCoffee",
                    label: "Kopinya Mantep"
                },
                {
                    id: "check_meetings",
                    value: "meetings",
                    label: "Enak Buat Meeting"
                },
                {
                    id: "check_table",
                    value: "table",
                    label: "Meja Kerja Ergonomis"
                },
                {
                    id: "check_power",
                    value: "powerSource",
                    label: "Colokan Everywhere"
                },
                {
                    id: "check_smoking",
                    value: "smoking",
                    label: "Bisa Ngerokok"
                },
                {
                    id: "check_view",
                    value: "greenView",
                    label: "Pemandangan Adem"
                },
                {
                    id: "check_alcohol",
                    value: "alcohol",
                    label: "Alkohol Tipis-Tipis"
                },
            ]
        }
    },
    components: { IconFilter }
}
</script>
<template>
    <form class="flex flex-col">
        <div class="flex flex-row">
            <button type="button" @click="showFilter = !showFilter"
                :class="['bg-white rounded border p-2 mr-2 lg:mr-2 hover:ring-1 hover:ring-purple-400 focus:ring-purple-400', showFilter ? 'ring-1 ring-purple-400':'']">
                <IconFilter class="w-4 h-4" />
            </button>

            <input type="text" placeholder="Search"
                class="w-full bg-white h-[3rem] px-4 border rounded-md focus:outline-none focus:shadow-md" />

            <button type="button"
                class="bg-white rounded border p-2 ml-2 lg:ml-2 hover:ring-1 hover:ring-purple-400 focus:ring-purple-400">
                Search
            </button>
        </div>
        <div class="flex flex-col flex-wrap md:grid md:grid-cols-4 lg:grid lg:grid-cols-5 mt-4 " v-if="showFilter">
            <div class="flex flex-row items-center text-sm mr-2" v-for="item in filterItem" :key="item.id">
                <input :id="item.id" type="checkbox" :value="item.value"/> 
                <label :for="item.id" class="mx-1 text-gray-600">{{ item.label }}</label>
            </div>

        </div>


    </form>
</template>