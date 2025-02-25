// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import sitemap from "astro-sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://iquitosexpedition.com",
    output: "server",
    adapter: vercel(),
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [sitemap()]
});
