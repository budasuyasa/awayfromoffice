import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => ({
        isLoading: false,
        isNewPlaceSubmited: false,
        newPlaceData: {},
        filterInput: {
            keyword: '',
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
    }),

    getters: {
        getLoading(state){
            return state.isLoading
        },
        getIsNewPlaceSubmited(state){
            return state.isNewPlaceSubmited
        },
        getNewPlaceData(state){
            return state.newPlaceData
        }
    },

    actions: {
        updateLoading(state){
            this.isLoading = state
        },

        updateNewPlaceSubmited(state){
            this.isNewPlaceSubmited = state
        },

        updateNewPlaceData(data){
            this.newPlaceData = data
        }
    }

})