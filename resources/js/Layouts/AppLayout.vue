<script setup>
import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';
import Logo from '../Components/Logo.vue';
import Sidebar from '../Components/Sidebar.vue';
import GlobalLoader from '../Components/GlobalLoader.vue';
const page = usePage();
const user = computed(() => page.props.auth.user);
</script>

<template>
    <main>
        <GlobalLoader />
        <div v-if="user">
            <div class="wrap-main-page flex">
                <aside
                    class="main-sidebar pl-[1.25rem] w-[21.8125rem] bg-white h-screen flex flex-col sticky top-0 border-r border-gray-100 z-50">
                    <div class="shrink-0 pr-[1.25rem]">
                        <Logo />
                    </div>
                    <Sidebar />
                </aside>
                <div class="main-content flex-1 bg-[#ECF1F8] min-h-screen">
                    <slot></slot>
                </div>
            </div>
        </div>
        <div v-else>
            <slot></slot>
        </div>
    </main>
</template>
