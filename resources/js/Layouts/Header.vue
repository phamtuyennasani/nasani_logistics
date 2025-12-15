<script setup>
import SearchTracking from '@component/SearchTracking.vue';
import InfoUser from '@component/Header/InfoUser.vue';
</script>
<template>
    <div class="wrap-header-component py-[1.5rem] flex items-center justify-between px-[2.31rem]">
        <div class="tracking-component">
            <SearchTracking />
        </div>
        <div class="header-right-component flex items-center justify-end flex-1">
            <div class="header-action-button">

            </div>
            <div class="header-action-user border-l border-[#ECF1F8] pl-[3.12rem]">
                <InfoUser />
            </div>
        </div>
    </div>
</template>