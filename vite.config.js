import {defineConfig} from 'vite';

export default defineConfig({
    root: 'src',
    assetsIncludes: ['./assets/**/*.*'],
    build: {
        emptyOutDir: true,
        outDir: '../dist',
    },
});
