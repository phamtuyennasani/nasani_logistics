<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    src: {
        type: String,
        required: true,
    },
});

const audioRef = ref(null);
const isPlaying = ref(false);
const hasError = ref(false);
const togglePlay = () => {
    if (!audioRef.value) return;

    if (isPlaying.value) {
        audioRef.value.pause();
        isPlaying.value = false;
    } else {
        audioRef.value.play().then(() => {
            isPlaying.value = true;
            hasError.value = false;
        }).catch(error => {
            console.error("Autoplay failed:", error);
            hasError.value = true;
        });
    }
};

onMounted(() => {
    if (audioRef.value) {
        audioRef.value.play().then(() => {
            isPlaying.value = true;
        }).catch(() => {
            hasError.value = true;
        });
    }
});
</script>
<template>
    <div class="fixed bottom-4 right-4 z-50">
        <audio controls ref="audioRef" :src="src" loop />
        
        <button 
            @click="togglePlay"
            class="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center text-gray-800"
            :class="{ 'animate-pulse': hasError }"
            title="Toggle Music"
        >
            <span v-if="isPlaying">🔊</span>
            <span v-else>🔇</span>
        </button>
        
        <div v-if="hasError" class="absolute bottom-full right-0 mb-2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Click to play music
        </div>
    </div>
</template>
