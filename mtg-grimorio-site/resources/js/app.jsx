import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx');
        const page = pages[`./Pages/${name}.jsx`];
        return page();
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});