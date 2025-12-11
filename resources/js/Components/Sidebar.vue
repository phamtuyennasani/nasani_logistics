<script setup>
import ListMenu from '@/Plugins/ListMenu';
import BlockMenu from './ItemMenu/BlockMenu.vue';
import Scrollbar from 'smooth-scrollbar';
import { onBeforeUnmount, onMounted, ref } from 'vue';
const scrollContainer = ref(null);
let scrollbarInstance = null;

onMounted(() => {
    if (scrollContainer.value) {
        scrollbarInstance = Scrollbar.init(scrollContainer.value, {
            damping: 0.1,
            thumbMinSize: 20,
        });
    }
});

onBeforeUnmount(() => {
    if (scrollbarInstance) {
        scrollbarInstance.destroy();
        scrollbarInstance = null;
    }
});
</script>
<template>
    <div class="group-aside flex-1 overflow-hidden pr-[1.25rem] relative" ref="scrollContainer">
        <div class="wrap-show-menu">
            <div class="menu-scrollable space-y-[1.5rem] pb-4">
                <div class="group-item-aside" v-for="(menu, index) in ListMenu" :key="index">
                    <div class="title-group-item mb-[0.81rem] px-[1.12rem]">
                        <p class="mb-0 text-title-sidebar text-[1.125rem] font-medium uppercase">{{ menu.title }}</p>
                    </div>
                    <BlockMenu :menu="menu" />
                </div>
            </div>
        </div>
    </div>

</template>