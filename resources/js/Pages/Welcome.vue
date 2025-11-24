<script setup>
import { Head } from '@inertiajs/vue3';

defineProps({
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Welcome" />
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
        <h1 class="text-4xl font-bold mb-4">Welcome to Nasani Logistics</h1>
        <p class="text-lg mb-8">Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})</p>
        <div class="p-6 bg-white rounded-lg shadow-md">
            <p>Powered by Inertia.js + Vue 3</p>
        </div>
    </div>
</template>
