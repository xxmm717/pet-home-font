import { defineStore } from "pinia";
import { ref } from "vue";

export const useActiveStore = defineStore('activeStore', () => {
    const id = ref()
    let liked 
    return {
        liked
    }
}, {
    persist: true
}
)