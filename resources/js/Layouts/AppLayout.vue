<script setup>
import { computed, watch } from 'vue';
import { useOnline } from '@vueuse/core';
import { toast } from 'vue-sonner';
import { usePage } from '@inertiajs/vue3';
import Logo from '@component/Logo.vue';
import Header from '@layout/Header.vue';
import Footer from '@layout/Footer.vue';
import Sidebar from '@layout/Sidebar.vue';
import GlobalLoader from '@component/GlobalLoader.vue';
const page = usePage();
const user = computed(() => page.props.auth.user);
const online = useOnline();
watch(online, (isOnline) => {
    if (isOnline) {
        toast.success('Đã kết nối lại Internet', { duration: 3000, position: 'bottom-left' });
    } else {
        toast.error('Mất kết nối Internet', { duration: 5000, position: 'bottom-left' });
    }
});
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
                    <div class="header-main-content bg-white">
                        <Header />
                    </div>
                    <div class="body-main-content">
                        <slot></slot>
                    </div>
                    <div class="footer-main-content">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <slot></slot>
        </div>
        <Toaster richColors position="bottom-center" />
    </main>
</template>
