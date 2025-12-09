export default {
    install: (app, options) => {
        // $asset helper
        app.config.globalProperties.$asset = (path) => {
            return `/${path.replace(/^\/+/, '')}`;
        };

        // $config helper
        app.config.globalProperties.$config = (key, defaultValue = null) => {
            const keys = key.split('.');
            let value = app.config.globalProperties.$page.props.config;

            for (const k of keys) {
                if (value && typeof value === 'object' && k in value) {
                    value = value[k];
                } else {
                    return defaultValue;
                }
            }

            return value;
        };

        // $request helper
        app.config.globalProperties.$request = (key = null) => {
            const request = app.config.globalProperties.$page.props.request;
            if (!key) return request;

            // Handle specific keys like 'url', 'fullUrl', 'query'
            if (key === 'url') return request.url;
            if (key === 'fullUrl') return request.fullUrl;
            if (key === 'query') return request.query;

            // Access query params directly if key is not one of the special ones
            return request.query[key] || null;
        };

        // $routeIs helper
        app.config.globalProperties.$routeIs = (pattern) => {
            const currentRoute = route().current();
            if (!currentRoute) return false;

            // Simple exact match or wildcard match
            if (pattern.includes('*')) {
                const regex = new RegExp('^' + pattern.replace(/\*/g, '.*') + '$');
                return regex.test(currentRoute);
            }

            return currentRoute === pattern;
        };
    },
};
