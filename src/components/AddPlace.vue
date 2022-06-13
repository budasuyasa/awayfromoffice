<script>
import filterItem from '../data/feature_list.js';
import IconClose from './icons/IconClose.vue';
import featureList from '@/data/feature_list.js'
import IconSpark from './icons/IconSpark.vue';
export default {
    props: {
        show: Boolean
    },
    data() {
        return {
            showModal: this.show,
            filterItem,
            _featureList: featureList,
            formData: {
                name: '',
                address: '',
                instagram_url: '',
                google_map_url: '',
                wifi: false,
                mainFood: false,
                goodCoffee: false,
                meetings: false,
                workingTable: false,
                powerSource: false,
                smokingArea: false,
                greenView: false,
                alcohol: false,
            }
        }
    },
    components: { IconClose, IconSpark },
    emits: ['closeModal'],
    methods: {
        closeModal() {
            this.$emit('closeModal');
        }
    },
    watch: {
        show: {
            handler(newData) {
                this.showModal = newData;
            }
        }
    }
}
</script>

<template>
    <div :class="['w-screen h-screen bg-white backdrop-blur-sm bg-black/50 fixed overflow-x-hidden overflow-y-scroll flex md:items-center justify-center', showModal ? 'block z-50' : 'hidden -z-50']"
        @click.self="closeModal">
        <div class="md:mx-auto md:mt-18 w-10/12 h-fit my-auto  bg-white md:max-w-sm border rounded-md p-4">
            <form @submit.prevent="submitPlace">
                <div class="flex flex-row mb-4">
                    <h1 class="text-lg text-gray-500 flex flex-row">
                        <IconSpark class="w-6 h-6 text-purple-700" /> Tambahin Tempat Baru</h1>
                    <button class="ml-auto" @click="closeModal">
                        <IconClose />
                    </button>
                </div>
                <div class="flex flex-col mb-2">
                    <label for="name" class="text-sm text-gray-500 mb-1">Nama Tempat:</label>
                    <input id="name" type="text" class="w-full border py-2 px-3 rounded-md mb-2 focus:outline-none"
                        placeholder="Hidden Gem Enak Buat Kerja" />
                </div>
                <div class="flex flex-col mb-2">
                    <label for="address" class="text-sm text-gray-500 mb-1">Alamat:</label>
                    <input id="address" type="text" class="w-full border py-2 px-3 rounded-md mb-2 focus:outline-none"
                        placeholder="Jalan Kenangan No 7" />
                </div>
                <div class="flex flex-col mb-2">
                    <label for="url_instagram" class="text-sm text-gray-500 mb-1">URL Instagram:</label>
                    <input id="url_instagram" type="url"
                        class="w-full border py-2 px-3 rounded-md mb-2 focus:outline-none"
                        placeholder="https://instagram.com/@hiddengemku" />
                </div>
                <div class="flex flex-col mb-2">
                    <label for="url_google_map" class="text-sm text-gray-500 mb-1">URL Google Map:</label>
                    <input id="url_google_map" type="url"
                        class="w-full border py-2 px-3 rounded-md mb-2 focus:outline-none"
                        placeholder="https://goo.gl/maps/abcdefghijkl" />
                </div>

                <!-- <h3 class="text-gray-500 my-3">Kenapa menurutmu tempat ini enak buat kerja?</h3> -->

                <!-- <div class="flex flex-row items-center text-sm mr-2 mb-3" v-for="(item, index) in _featureList"
                    :key="item.value">
                    <input :id="'f-'+item.id" type="checkbox" :name="item.value" v-model="item.model" />
                    <label :for="'f-'+item.id" class="mx-1 text-gray-600">{{ item.label }}</label>
                </div> -->

                <button type="button" class="bg-purple-700 rounded-md text-white w-full p-2 my-4">Post</button>
            </form>
        </div>
    </div>
</template>