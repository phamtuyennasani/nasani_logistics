<script setup>
import { ref } from "vue";
import { onClickOutside, useEventListener } from '@vueuse/core'
import { Link } from '@inertiajs/vue3';
const blockUser = ref();
const isOpened = ref(false);

onClickOutside(blockUser, event => {
    isOpened.value = false;
});
useEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpened.value) {
        isOpened.value = false;
    }
});
</script>
<template>
    <div class="flex items-center justify-between relative gap-x-14" ref="blockUser">
        <div class="block-user-header-component flex items-center gap-x-3">
            <Avatar :image="$page.props.auth.user.photo" :icon="$page.props.auth.user.photo ? undefined : 'pi pi-user'"
                size="large" class="w-[3.625rem] h-[3.625rem]" style="background-color: #ece9fc; color: #2a1261"
                shape="circle" />
            <div class="flex flex-col">
                <p class="text-[#14181F] text-[1.25rem] font-medium leading-[1.3125rem] capitalize">
                    {{ $page.props.auth.user.fullname }}
                </p>
                <p class="text-[#909090] text-[0.8125rem] capitalize">
                    {{ $page.props.auth.roleName }}
                </p>
            </div>
        </div>
        <Button type="button" icon="pi pi-angle-down"
            class="p-button-text p-button-plain !border-none !outline-none !shadow-none"
            :class="isOpened ? 'rotate-180' : ''" @click="isOpened = !isOpened">
        </Button>
        <Transition name="slide">
            <div v-if="isOpened == true"
                class="list-none p-2 m-0 rounded-2xl border border-surface overflow-hidden w-full absolute bg-surface-0 origin-top mt-2 left-0 z-[999] top-full shadow-[0px_56px_16px_0px_rgba(0,0,0,0.00),0px_36px_14px_0px_rgba(0,0,0,0.01),0px_20px_12px_0px_rgba(0,0,0,0.02),0px_9px_9px_0px_rgba(0,0,0,0.03),0px_2px_5px_0px_rgba(0,0,0,0.04)]">
                <ul class="flex flex-col gap-1">
                    <li>
                        <Link :href="route('logout')" view-transition
                            class="text-[0.9rem] flex gap-2 py-2 px-2.5 rounded-lg items-center hover:bg-emphasis transition-colors duration-150 cursor-pointer">
                            <i class="pi pi-user"></i><span>Thông tin cá nhân</span>
                        </Link>
                    </li>
                    <li>
                        <Link :href="route('logout')" view-transition
                            class="text-[0.9rem] flex gap-2 py-2 px-2.5 rounded-lg items-center hover:bg-emphasis transition-colors duration-150 cursor-pointer">
                            <i class="pi pi-cog"></i><span>Cài đặt</span>
                        </Link>
                    </li>
                    <li>
                        <Link :href="route('logout')" view-transition
                            class="text-[0.9rem] flex gap-2 py-2 px-2.5 rounded-lg items-center hover:bg-emphasis transition-colors duration-150 cursor-pointer">
                            <i class="pi pi-power-off"></i><span>Đăng xuất</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </Transition>
    </div>
</template>