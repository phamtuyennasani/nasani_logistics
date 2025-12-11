<script setup>
import { Link } from '@inertiajs/vue3';
const props = defineProps({
    href: {
        type: String,
        required: false,
        default: 'javascript:;',
    },
    icon: {
        type: String,
        required: false,
        default: null,
    },
    title: {
        type: String,
        required: true,
    },
});
</script>
<template>
    <Link :href="props.href" class="flex items-center gap-4 text-[1rem] font-semibold text-current no-underline">
        <span class="icon-menu w-[1.6875rem] inline-block" v-if="props.icon" v-html="props.icon"></span>
        <span class="title-menu" v-text="props.title"></span>
    </Link>
</template>