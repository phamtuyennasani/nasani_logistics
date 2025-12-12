<script setup>
import { ref } from 'vue';
import { Setting } from '@utils/setting';
import 'vue-sonner/style.css'
import { Toaster, toast } from 'vue-sonner';
const searchQuery = ref('');
const SubmitSearch = () => {
    if (searchQuery.value === '') {
        toast.error('Vui lòng nhập mã vận đơn để theo dõi!', {
            duration: 2000,
        });
        return;
    }
    if (Setting.TRACKING_URL === '') {
        toast.error('Chức năng hiện đang được phát triển !', {
            duration: 2000,
        });
        return;
    }
    const trackingUrl = `${Setting.TRACKING_URL}/${encodeURIComponent(searchQuery.value)}`;
    searchQuery.value = '';
    window.open(trackingUrl, '_blank');
};
</script>
<template>
    <div
        class="box-search-tracking flex items-center justify-between w-90 gap-x-3 relative bg-primary/10 py-[0.8rem] px-[1.38rem] rounded-[3.75rem]">
        <InputText type="text" v-model="searchQuery"
            class="border-none bg-transparent shadow-none  flex-1 outline-none text-[1rem] p-0 text-primary placeholder:text-primary/80"
            placeholder="Theo dõi vận đơn của bạn" />
        <Button @click="SubmitSearch"
            class="bg-transparent border-none w-[1.25rem] h-[1.25rem] flex items-center justify-center p-0"
            type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M9.30176 10.6983L1.76176 8.185C1.3301 8.04083 1.03926 7.63583 1.04176 7.18083C1.04426 6.72583 1.33843 6.32333 1.77176 6.18417L17.5826 1.0925C17.9584 0.971665 18.3709 1.07083 18.6501 1.35C18.9293 1.62917 19.0284 2.04167 18.9076 2.4175L13.8159 18.2283C13.6768 18.6617 13.2743 18.9558 12.8193 18.9583C12.3643 18.9608 11.9593 18.67 11.8151 18.2383L9.30176 10.6983ZM2.7276 7.18917L9.99343 9.61167C10.1801 9.67333 10.3268 9.82 10.3884 10.0067L12.8109 17.2725L17.6001 2.4L2.7276 7.18917Z"
                    fill="#2F71DE" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M10.2376 10.6458C9.99427 10.89 9.5976 10.89 9.35427 10.6458C9.1101 10.4025 9.1101 10.0058 9.35427 9.7625L17.5218 1.595C17.7651 1.35083 18.1618 1.35083 18.4051 1.595C18.6493 1.83833 18.6493 2.235 18.4051 2.47833L10.2376 10.6458Z"
                    fill="#2F71DE" />
            </svg>
        </Button>
    </div>
</template>