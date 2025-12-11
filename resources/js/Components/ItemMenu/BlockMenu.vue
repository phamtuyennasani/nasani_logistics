<script setup>
import LinkMenu from './LinkMenu.vue';
const props = defineProps({
    menu: {
        type: Object,
        required: true,
    },
});
</script>
<template>
    <div class="content-group-item">
        <ul class="space-y-[0.4rem]">
            <li v-for="(child, i) in props.menu.children" :key="i"
                class="rounded-[0.25rem] pl-[2.25rem] py-[0.8rem] pr-4 hover:bg-[#ECF1F8] hover:text-[#2F71DE]"
                :class="$page.url.startsWith(child.to) ? 'bg-[#ECF1F8] text-[#2F71DE]' : 'text-base'">
                <template v-if="!child.children || child.children.length === 0">
                    <LinkMenu :href="child.to" :icon="child.icon" :title="child.label" />
                </template>
                <template v-if="child.children && child.children.length > 0">
                    <div class="title-menu-of-sub gap-4 flex items-center justify-between ">
                        <span class="icon-menu w-[1.6875rem] inline-block" v-if="child.icon" v-html="child.icon"></span>
                        <p class="mb-0 text-[1rem] font-semibold flex-1 flex items-center justify-between">
                            <span v-text="child.label"></span>
                        </p>
                    </div>
                    <ul class="pl-2">
                        <li v-for="(subChild, j) in child.children" :key="j"
                            class="rounded-[0.25rem] pl-[2.25rem] py-[0.8rem] pr-4 hover:bg-[#ECF1F8] hover:text-[#2F71DE]"
                            :class="$page.url.startsWith(subChild.to) ? 'bg-[#ECF1F8] text-[#2F71DE]' : 'text-base'">
                            <LinkMenu :href="subChild.to" :title="subChild.label" class="!font-medium" />
                        </li>
                    </ul>
                </template>
            </li>
        </ul>
    </div>
</template>