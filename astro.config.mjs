// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://www.iquitosexpedition.com",
    trailingSlash: 'never',
    output: "server",
    adapter: vercel(),
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [sitemap()]
});
