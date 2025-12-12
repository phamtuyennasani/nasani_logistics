<script setup>
import LinkMenu from './LinkMenu.vue';
import { ref, computed } from 'vue';
import { usePage } from '@inertiajs/vue3';

const props = defineProps({
    menu: {
        type: Object,
        required: true,
    },
});

const openMenus = ref({});
const toggle = (index) => {
    openMenus.value[index] = !openMenus.value[index];
};
const isOpen = (index) => !!openMenus.value[index];

const page = usePage();
const userRoles = computed(() => page.props.auth.roles || []);

const hasPermission = (item) => {
    if (!item.roles || item.roles.length === 0) return true;
    return item.roles.some(role => userRoles.value.includes(role));
};

const visibleChildren = computed(() => {
    if (!props.menu.children) return [];
    return props.menu.children.filter(item => hasPermission(item));
});

// Transition hooks for slide animation
const beforeEnter = (el) => {
    el.style.height = '0';
    el.style.overflow = 'hidden';
    el.style.transition = 'height 0.3s ease-in-out';
};

const enter = (el) => {
    if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px';
    } else {
        el.style.height = 'auto';
    }
};

const afterEnter = (el) => {
    el.style.height = 'auto';
    el.style.overflow = 'visible';
};

const beforeLeave = (el) => {
    el.style.height = el.scrollHeight + 'px';
    el.style.overflow = 'hidden';
    el.style.transition = 'height 0.3s ease-in-out';
};

const leave = (el) => {
    getComputedStyle(el).height;
    requestAnimationFrame(() => {
        el.style.height = '0';
    });
};
</script>

<template>
    <div class="content-group-item">
        <ul class="space-y-[0.4rem]">
            <li v-for="(child, i) in visibleChildren" :key="i"
                class="rounded-[0.4rem] pl-[2.25rem] py-[0.8rem] pr-4 hover:bg-[#ECF1F8] hover:text-[#2F71DE] transition-colors duration-200"
                :class="$page.url.startsWith(child.to) ? 'bg-[#ECF1F8] text-[#2F71DE]' : 'text-base'">
                <template v-if="!child.children || child.children.length === 0">
                    <LinkMenu :href="child.to" :icon="child.icon" :title="child.label" />
                </template>
                <template v-else>
                    <div class="title-menu-of-sub gap-4 flex items-center justify-between cursor-pointer"
                        @click="toggle(i)">
                        <span class="icon-menu w-[1.6875rem] inline-block" v-if="child.icon" v-html="child.icon"></span>
                        <p
                            class="mb-0 text-[1rem] font-semibold flex-1 flex items-center justify-between pointer-events-none">
                            <span v-text="child.label"></span>
                            <svg class="w-4 h-4 transform transition-transform duration-300"
                                :class="isOpen(i) ? 'rotate-180' : ''" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </p>
                    </div>
                    <Transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
                        @before-leave="beforeLeave" @leave="leave">
                        <ul class="pl-2 mt-2" v-show="isOpen(i)">
                            <li v-for="(subChild, j) in child.children" :key="j"
                                class="rounded-[0.4rem] pl-[2.25rem] py-2 pr-4 hover:bg-[#ECF1F8] hover:text-[#2F71DE]"
                                :class="$page.url.startsWith(subChild.to) ? 'bg-[#ECF1F8] text-[#2F71DE]' : 'text-base'">
                                <LinkMenu :href="subChild.to" :title="subChild.label" class="!font-medium" />
                            </li>
                        </ul>
                    </Transition>
                </template>
            </li>
        </ul>
    </div>
</template>