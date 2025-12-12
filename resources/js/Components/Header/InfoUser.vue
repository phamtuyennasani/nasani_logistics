<script setup>
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
const page = usePage();
const user = computed(() => page.props.auth.user);

</script>
<template>
    <div class="flex items-center justify-between relative gap-x-3">
        <div class="block-user-header-component flex items-center gap-x-3">
            <Avatar :image="user.photo" :icon="user.photo ? undefined : 'pi pi-user'" size="large"
                class="w-[3.625rem] h-[3.625rem]" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
            <div class="flex flex-col">
                <span class="text-[#14181F] text-sm font-bold leading-[1.3125rem]">{{ user.fullname }}</span>
            </div>
        </div>
    </div>
</template>