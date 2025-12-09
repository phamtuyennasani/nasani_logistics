import '../css/app.css';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import AppLayout from './Layouts/AppLayout.vue'
import LaravelHelpers from './Plugins/LaravelHelpers';
import PrimeVue from 'primevue/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/index.esm.js';
import { Toaster, toast } from 'vue-sonner'
const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{gray.50}',
            100: '{gray.100}',
            200: '{gray.200}',
            300: '{gray.300}',
            400: '{gray.400}',
            500: '{gray.500}',
            600: '{gray.600}',
            700: '{gray.700}',
            800: '{gray.800}',
            900: '{gray.900}',
            950: '{gray.950}'
        }
    }
});
createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue')
        ).then((module) => {
            module.default.layout = module.default.layout || AppLayout
            return module
        }),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, props.initialPage.props.ziggy)
            .component('Toaster', Toaster)
            .use(LaravelHelpers)
            .use(PrimeVue, {
                theme: {
                    preset: MyPreset,
                    options: {
                        darkModeSelector: false,
                        cssLayer: {
                            name: 'primevue',
                            order: 'theme, base, primevue'
                        }
                    }
                }
            })
            .mount(el);
    },
});
