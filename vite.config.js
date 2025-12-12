import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
            publicDirectory: 'public_html',
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        Components({
            resolvers: [PrimeVueResolver()],
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
            '@component': path.resolve('resources/js/Components'),
            '@layout': path.resolve('resources/js/Layouts'),
            '@plugin': path.resolve('resources/js/Plugins'),
            '@utils': path.resolve('resources/js/Utils'),
            '@images': path.resolve('resources/images'),
            '@fonts': path.resolve('resources/fonts'),
        },
    },
});
