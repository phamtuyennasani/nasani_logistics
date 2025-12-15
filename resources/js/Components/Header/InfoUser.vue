<script setup>
import { ref } from "vue";
import { Link } from '@inertiajs/vue3';
const Opened = ref();
const blockUser = ref();
const isOpened = ref(false);
const toggle = (event) => {
    Opened.value.toggle(event, blockUser.value);
    isOpened.value = !isOpened.value;
}
</script>
<template>
    <div class="flex items-center justify-between relative gap-x-14">
        <div ref="blockUser" class="block-user-header-component flex items-center gap-x-3">
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
            class="p-button-text p-button-plain !border-none !outline-none !shadow-none" @click="toggle">
        </Button>
        <Popover ref="Opened" :pt="{ content: 'px-0 py-2 pb-0 overflow-hidden' }">
            <div class="block-user-header-component flex items-center gap-x-3 px-3 w-[17rem]">
                <Avatar :image="$page.props.auth.user.photo"
                    :icon="$page.props.auth.user.photo ? undefined : 'pi pi-user'" size="large"
                    class="w-[3rem] h-[3rem]" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
                <div class="flex flex-col">
                    <p class="text-[#14181F] text-[1rem] font-medium leading-[1.3125rem] capitalize">{{
                        $page.props.auth.user.fullname }}
                    </p>
                    <p class="text-[#909090] text-[0.75rem] capitalize">
                        {{ $page.props.auth.roleName }}
                    </p>
                </div>
            </div>
            <ul class="mt-2">
                <li class="py-2 px-2 hover:bg-gray-100">
                    <Link class="text-[0.9rem] font-medium" view-transition>Thông tin cá nhân</Link>
                </li>
                <li class="py-2 px-2 hover:bg-gray-100">
                    <Link class="text-[0.9rem] font-medium" view-transition>Đổi mật khẩu</Link>
                </li>
                <li class="py-2 px-2 hover:bg-gray-100">
                    <Link class="text-[0.9rem] font-medium" :href="route('logout')" view-transition>Đăng xuất</Link>
                </li>
            </ul>
        </Popover>
    </div>
</template>