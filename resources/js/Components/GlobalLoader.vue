<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { router } from '@inertiajs/vue3';

const isLoading = ref(false);
let timeout = null;
let removeStartListener = null;
let removeFinishListener = null;

const startLoading = () => {
    timeout = setTimeout(() => {
        isLoading.value = true;
    }, 200);
};

const stopLoading = () => {
    if (timeout) {
        clearTimeout(timeout);
        timeout = null;
    }
    isLoading.value = false;
};
onMounted(() => {
    removeStartListener = router.on('start', startLoading);
    removeFinishListener = router.on('finish', stopLoading);
});
onUnmounted(() => {
    if (removeStartListener) removeStartListener();
    if (removeFinishListener) removeFinishListener();
});
</script>

<template>
    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-if="isLoading"
            class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
            <div class="bg-white p-5 rounded-lg shadow-xl flex flex-col items-center">
                <i class="pi pi-spin pi-spinner text-4xl text-primary"></i>
                <span class="mt-3 text-gray-600 font-medium">Đang tải...</span>
            </div>
        </div>
    </Transition>
</template>
