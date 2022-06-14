<script>
import filterItem from '../data/feature_list.js';
import IconClose from './icons/IconClose.vue';
import featureList from '@/data/feature_list.js'
import IconSpark from './icons/IconSpark.vue';
import config from '../data/config.js';
import axios from 'axios';
import { useStore } from '@/stores/main'
export default {
    setup(){
        const store = useStore()
        return {
            store
        }
    },
    props: {
        show: Boolean
    },
    data() {
        return {
            showSuccess: false,
            showModal: this.show,
            filterItem,
            _featureList: featureList,
            formData: {
                name: '',
                address: '',
                instagram: '',
                google_map: '',
            },
            formError: {
                name: {
                    status: false,
                    message: ''
                },
                address: {
                    status: false,
                    message: ''
                },
                instagram: {
                    status: false,
                    message: ''
                },
                google_map:{
                    status: false,
                    message: ''
                }
            }

        }
    },
    components: { IconClose, IconSpark },
    emits: ['closeModal', 'newPlaceSubmited'],
    methods: {
        closeModal() {
            this.showSuccess = false
            this.$emit('closeModal');
        },
        isValidURL(string) {
            var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
            return (res !== null)
        },
        submitPlace: async function(){
            this.formError.name.status = false;
            this.formError.address.status = false;
            this.formError.instagram.status = false;
            this.formError.google_map.status = false;

            if(!this.isValidURL(this.formData.instagram)){
                this.formError.instagram.status = true;
                this.formError.instagram.message = 'URL Instagram-nya salah format';
            }

            if(!this.isValidURL(this.formData.google_map)){
                this.formError.google_map.status = true;
                this.formError.google_map.message = 'URL Google Map-nya salah format';
            }

            if(this.formData.name == ''){
                this.formError.name.status = true;
                this.formError.name.message = 'Nama tempatnya tolong diisi ya bu/pak :)';
            }

            if(this.formData.address == ''){
                this.formError.address.status = true;
                this.formError.address.message = 'Alamat kalau diisi lebih estetik!';
            }


            try {
                const { data, status } = await axios.post(config.apiUrl + '/api/places', this.formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                
                if (status == 200) {
                    const newPlaceData = { ...this.formData}
                    this.store.$patch({ isLoading: true, isNewPlaceSubmited: true, newPlaceData: newPlaceData })
                    this.$emit("newPlaceSubmited", this.formData)
                    this.formData.name = ""
                    this.formData.address = ""
                    this.formData.instagram = ""
                    this.formData.google_map = ""
                } else if(status == 422) {
                    const errors = data.errors;
                    if("name" in errors) this.formError.name.status = true
                    if("address" in errors) this.formError.address.status = true
                    if("instagram" in errors) this.formError.instagram.status = true
                    if("google_map" in errors) this.formError.google_map.status = true
                } else {
                    console.log("Network Error")
                }
            } catch (error) {
                console.error(error);
            }

            
        }
    },
    watch: {
        show: {
            handler(newData) {
                this.showModal = newData;
            }
        },
        "formData.name"(newData){
            if(newData != ""){
                this.formError.name.status = false;
            } 
        },
        "formData.address"(newData){
            if(newData != null){
                this.formError.address.status = false;
            } 
        },
        "formData.instagram"(newData){
            if(this.isValidURL(newData)){
                this.formError.instagram.status = false;
            } 
        },
        "formData.google_map"(newData){
            if(this.isValidURL(newData)){
                this.formError.google_map.status = false;
            } 
        },
    }
}
</script>

<template>
    <div :class="['w-screen h-screen bg-white backdrop-blur-sm bg-black/50 fixed overflow-x-hidden overflow-y-scroll flex md:items-center justify-center', showModal ? 'block z-50' : 'hidden -z-50']"
        @click.self="closeModal">
        <div 
            class="md:mx-auto md:mt-18 w-10/12 h-fit my-auto bg-white md:max-w-sm border rounded-md p-4 border-transparent transition-colors">
            <form @submit.prevent="submitPlace">
                <div class="flex flex-row mb-4">
                    <h1 class="text-lg text-gray-500 flex flex-row">
                        <IconSpark class="w-6 h-6 text-purple-700" /> Tambahin Tempat Baru
                    </h1>
                    <button type="button" class="ml-auto" @click="closeModal">
                        <IconClose />
                    </button>
                </div>

                <div class="flex flex-col mb-3">
                    <label for="name" class="text-sm text-gray-500 mb-1 font-bold">Nama Tempat:</label>
                    <input id="name" type="text"
                        :class="['w-full py-2 px-3 rounded-md mb-1 focus:outline-none', formError.name.status ? 'border border-red-500' : 'border']"
                        v-model="formData.name" placeholder="Hidden Gem Enak Buat Kerja" autocomplete="off" />
                    <span v-if="formError.name.status" v-text="formError.name.message"
                        class="text-sm text-red-500"></span>
                </div>

                <div class="flex flex-col mb-3">
                    <label for="address" class="text-sm text-gray-500 mb-1 font-bold">Alamat:</label>
                    <input id="address" type="text"
                        :class="['w-full py-2 px-3 rounded-md mb-1 focus:outline-none', formError.address.status ? 'border border-red-500' : 'border']"
                        v-model="formData.address" placeholder="Jalan Kenangan No 7" />
                    <span v-if="formError.address.status" v-text="formError.address.message"
                        class="text-sm text-red-500"></span>
                </div>

                <div class="flex flex-col mb-3">
                    <label for="url_instagram" class="text-sm text-gray-500 mb-1 font-bold">URL Instagram:</label>
                    <input id="url_instagram" type="url" v-model="formData.instagram"
                        :class="[' w-full border py-2 px-3 rounded-md mb-1 focus:outline-none ', formError.instagram.status ? 'border border-red-500' : 'border']"
                        placeholder="https://instagram.com/@hiddengemku" />
                    <span v-if="formError.instagram.status" v-text="formError.instagram.message"
                        class="text-sm text-red-500"></span>
                </div>

                <div class="flex flex-col mb-3">
                    <label for="url_google_map" class="text-sm text-gray-500 mb-1 font-bold">URL Google Map:</label>
                    <input id="url_google_map" type="url" v-model="formData.google_map"
                        :class="[' w-full border py-2 px-3 rounded-md mb-2 focus:outline-none ', formError.google_map.status ? 'border border-red-500' : 'border']"
                        placeholder="https://goo.gl/maps/abcdefghijkl" />
                    <span v-if="formError.google_map.status" v-text="formError.google_map.message"
                        class="text-sm text-red-500"></span>
                </div>

                <!-- <h3 class="text-gray-500 my-3">Kenapa menurutmu tempat ini enak buat kerja?</h3> -->

                <!-- <div class="flex flex-row items-center text-sm mr-2 mb-3" v-for="(item, index) in _featureList"
                    :key="item.value">
                    <input :id="'f-'+item.id" type="checkbox" :name="item.value" v-model="item.model" />
                    <label :for="'f-'+item.id" class="mx-1 text-gray-600">{{ item.label }}</label>
                </div> -->

                <button type="submit" class="bg-purple-700 rounded-md text-white w-full p-2 my-4">Post</button>
            </form>
        </div>
    </div>
</template>