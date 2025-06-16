import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
    ],
    preview: {
        host: true, // binds to 0.0.0.0
        port: process.env.PORT || 4173, // use Render's injected PORT
        allowedHosts: ['laravel-todolist.onrender.com'], // ✅ ALLOW your Render domain
    },
});

