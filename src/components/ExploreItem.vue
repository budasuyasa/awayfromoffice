<script>
import axios from 'axios';
import config from '../data/config';
import { useStore } from '@/stores/main'
export default {
    setup() {
        const store = useStore()

        return {
            store
        }
    },
    data() {
        return {
            data: []
        }
    },
    props: { filter: Object },
    emits: ['showDetail'],
    methods: {
        getData: async function (filter) {
            try {
                const { data, status } = await axios.get(config.apiUrl + '/api/places', { params: filter }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (status == 200) {
                    this.data = data.data
                    this.store.$patch({ isLoading: false, isNewPlaceSubmited: false, newPlaceData: {} })
                } else {
                    console.log("Network error")
                }
            } catch (error) {
                console.error(error);
            }
        }
    },
    mounted() {
        this.getData(null);
    },
    watch: {
        "store.filterInput": {
            handler(newValue, oldStore) {
                setTimeout(() => {
                    this.getData(newValue);
                }, 200);
            },
            deep: true
        },
        "store.newPlaceData": {
            handler(newData){
                if(newData){
                    this.getData({keyword: newData.name})
                }
            },
            deep: true
        }
    }

}
</script>
<template>
    <div v-for="(row, index) in data" @click="$emit('showDetail', row)" :key="row.id"
        class="bg-white rounded-md border px-4 py-4 hover:shadow-md hover:ring-2 hover:ring-purple-300 hover:cursor-pointer explore-item">
        <h3 class="text-lg " v-text="row.name"></h3>
        <small class="text-gray-400 overflow-y-scroll" v-text="row.address"></small>
    </div>
</template>