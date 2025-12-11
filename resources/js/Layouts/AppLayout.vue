<script setup>
import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';
import Logo from '../Components/Logo.vue';
import Sidebar from '../Components/Sidebar.vue';
const page = usePage();
const user = computed(() => page.props.auth.user);
</script>

<template>
    <main>
        <div v-if="user">
            <div class="wrap-main-page flex">
                <aside class="main-sidebar px-[1.25rem] flixed w-[21.8125rem] bg-white h-screen">
                    <Logo />
                    <div class="group-aside">
                        <div class="wrap-show-menu">
                            <div class="menu-scrollable space-y-[1.5rem]">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </aside>
                <div class="main-content flex-1 bg-[#ECF1F8]">
                    <slot></slot>
                </div>
            </div>
        </div>
        <div v-else>
            <slot></slot>
        </div>
    </main>
</template>
