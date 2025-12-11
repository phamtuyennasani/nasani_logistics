<script setup>
import ListMenu from '@/Plugins/ListMenu';
import BlockMenu from './ItemMenu/BlockMenu.vue';
</script>
<template>
    <div class="group-item-aside" v-for="(menu, index) in ListMenu" :key="index">
        <div class="title-group-item mb-[0.81rem] px-[1.12rem]">
            <p class="mb-0 text-title-sidebar text-[1.125rem] font-medium uppercase">{{ menu.title }}</p>
        </div>
        <BlockMenu :menu="menu" />
    </div>
</template>