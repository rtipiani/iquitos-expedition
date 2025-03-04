import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderScript, f as createAstro, b as renderComponent, g as renderSlot, h as renderHead, a as addAttribute } from './astro/server_B02qANs2.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="main-header" class="fixed top-0 left-0 w-full backdrop-blur-md z-50"> <nav class="container mx-auto flex items-center justify-between px-4 py-4"> <div> <a href="/"> <img src="/logoDark.avif" width="180" height="60" alt="Logo Iquitos Expedition"> </a> </div> <button id="menu-toggle" class="xl:hidden text-white focus:outline-none" aria-label="Abrir Menú"> <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 transition-transform duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg> </button> <ul id="menu" class="hidden xl:flex flex-col xl:flex-row items-center text-white absolute xl:relative top-full left-0 w-full xl:w-auto bg-black bg-opacity-80 xl:bg-transparent shadow-md xl:shadow-none transition-all duration-300 ease-in-out text-center"> <li> <a href="/" class="block py-3 px-4 hover:text-yellow-400 transition menu-link">
Inicio
</a> </li> <li> <a href="/about" class="block py-3 px-4 hover:text-yellow-400 transition menu-link">
Nosotros
</a> </li> <li class="hidden xl:block"> <a href="/paquetes/irapay-amazon" class="block py-3 px-4 hover:text-yellow-400 transition menu-link">
Irapay Amazon
</a> </li> <li class="hidden xl:block"> <a href="/paquetes/heliconia-lodge" class="block py-3 px-4 hover:text-yellow-400 transition menu-link">
Heliconia Lodge
</a> </li> <li class="hidden xl:block"> <a href="/paquetes/cumaceba-lodge" class="block py-3 px-4 hover:text-yellow-400 transition menu-link">
Cumaceba Lodge
</a> </li> <li class="hidden xl:block"> <a href="/paquetes/pacaya-samiria" class="block py-3 px-4 hover:text-yellow-400 transition menu-link">
Pacaya Samiria
</a> </li> <li class="hidden xl:block"> <a href="/paquetes/tours-diarios" class="block py-3 px-4 hover:text-yellow-400 transition menu-link">
Tours Diarios
</a> </li> <li class="relative xl:hidden"> <a href="#" id="programs-toggle" class="py-3 px-6 hover:text-yellow-400 transition flex items-center justify-center">
Programas
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 transition-transform duration-300" id="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M6 9l6 6 6-6"></path> </svg> </a> <ul id="programs-menu" class="hidden bg-black shadow-lg text-center w-full"> <li> <a href="/paquetes/irapay-amazon" class="block px-4 py-2 hover:bg-gray-700 menu-link">
Irapay Amazon
</a> </li> <li> <a href="/paquetes/heliconia-lodge" class="block px-4 py-2 hover:bg-gray-700 menu-link">
Heliconia Lodge
</a> </li> <li> <a href="/paquetes/cumaceba-lodge" class="block px-4 py-2 hover:bg-gray-700 menu-link">
Cumaceba Lodge
</a> </li> <li> <a href="/paquetes/pacaya-samiria" class="block px-4 py-2 hover:bg-gray-700 menu-link">
Pacaya Samiria
</a> </li> <li> <a href="/paquetes/tours-diarios" class="block px-4 py-2 hover:bg-gray-700 menu-link">
Tours Diarios
</a> </li> </ul> </li> <li> <a href="/gallery" class="block py-3 px-4 hover:text-yellow-400 transition menu-link">
Galería
</a> </li> <li> <a href="/contacts" class="block py-3 px-4 hover:text-yellow-400 transition menu-link">
Contacto
</a> </li> </ul> </nav> </header> ${renderScript($$result, "C:/astro/iquitos-expedition/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/astro/iquitos-expedition/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-green-950 text-white py-12"> <div class="max-w-7xl mx-auto px-6 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <div> <h2 class="text-xl font-bold">Contáctanos</h2> <div class="mt-4 space-y-4 text-gray-300"> <p class="flex items-center gap-2"> <i class="fa-solid fa-location-dot text-white"></i>
Oficina Principal Jr. Simón Bolívar N.39, Iquitos, Perú
</p> <a href="tel:+51968786482" class="flex items-center gap-2 hover:text-orange-500"> <i class="fa-solid fa-phone text-white"></i>
+51 968 786 482
</a> <a href="mailto:iquitosexpeditionpe@gmail.com" class="flex items-center gap-2 hover:text-orange-500"> <i class="fa-solid fa-envelope text-white"></i>
iquitosexpeditionpe@gmail.com
</a> </div> <div class="flex gap-4 mt-4"> <a href="https://www.facebook.com/iquitosexpedition" target="_blank" aria-label="Facebook" class="hover:text-orange-500"> <i class="fa-brands fa-facebook fa-xl"></i> </a> <a href="https://www.instagram.com/iquitosexpedition/" target="_blank" aria-label="Instagram" class="hover:text-orange-500"> <i class="fa-brands fa-instagram fa-xl"></i> </a> <a href="https://wa.link/no5uic" target="_blank" aria-label="YouTube" class="hover:text-orange-500"> <i class="fa-brands fa-whatsapp fa-xl"></i> </a> <a href="https://www.youtube.com/" target="_blank" aria-label="YouTube" class="hover:text-orange-500"> <i class="fa-brands fa-youtube fa-xl"></i> </a> <a href="https://www.tiktok.com/@iquitos.expedition" target="_blank" aria-label="TikTok" class="hover:text-orange-500"> <i class="fa-brands fa-tiktok fa-xl"></i> </a> </div> </div> <div> <h3 class="text-xl font-bold">
Atractivos turísticos
</h3> <div class="grid grid-cols-3 gap-2 mt-4"> <img src="/../slide1.avif" alt="Amazonía" class="w-full h-auto rounded-md" loading="lazy"> <img src="/../slide2.avif" alt="Monos y Aves" class="w-full h-auto rounded-md" loading="lazy"> <img src="/../slide3.avif" alt="Pacaya Samiria" class="w-full h-auto rounded-md" loading="lazy"> <img src="/../slide4.avif" alt="Río Amazonas" class="w-full h-auto rounded-md" loading="lazy"> <img src="/../slide5.avif" alt="Heliconia Amazon" class="w-full h-auto rounded-md" loading="lazy"> <img src="/../slide6.avif" alt="Irapay Lodge" class="w-full h-auto rounded-md" loading="lazy"> </div> </div> <div> <h3 class="text-xl font-bold">
Links relacionados
</h3> <ul class="mt-4 space-y-2 text-gray-400"> <li> <a href="https://www.gob.pe/mincetur" class="hover:text-orange-500" target="_blank">
Mincetur
</a> </li> <li> <a href="https://www.ytuqueplanes.com/" class="hover:text-orange-500" target="_blank">
¿Y tú qué planes?
</a> </li> <li> <a href="https://www.gob.pe/institucion/regionamazonas/funcionarios?sheet=2" class="hover:text-orange-500" target="_blank">
GORE Amazonas
</a> </li> <li> <a href="https://www.tripadvisor.com/" class="hover:text-orange-500" target="_blank">
Tripadvisor
</a> </li> <li> <a href="https://peru.info/es-pe/" class="hover:text-orange-500" target="_blank">
Marca Perú
</a> </li> </ul> </div> <div> <h3 class="text-xl font-bold">
También te Podría Interesar
</h3> <ul class="mt-4 space-y-2 text-gray-400"> <li> <a href="./../paquetes/irapay-amazon" class="hover:text-orange-500">
Irapay Amazon
</a> </li> <li> <a href="./../paquetes/heliconia-lodge" class="hover:text-orange-500">
Heliconia Lodge
</a> </li> <li> <a href="./../paquetes/cumaceba-lodge" class="hover:text-orange-500">
Cumaceba Lodge
</a> </li> <li> <a href="./../paquetes/pacaya-samiria" class="hover:text-orange-500">
Pacaya Samiria
</a> </li> <li> <a href="./../paquetes/tours-diarios" class="hover:text-orange-500">
Tours Diarios
</a> </li> </ul> </div> </div> <div class="border-t border-gray-700 mt-8"></div> <div class="text-center py-4 text-gray-400 text-sm">
&copy; 2025 Iquitos Expedition - Todos los derechos reservados | RUC: 20608055801.
<p>
Diseñado por <a href="https://www.facebook.com/rubenestebantipiania" class="hover:text-orange-500" target="_blank"> Rubén Tipiani</a> </p> </div> </footer>`;
}, "C:/astro/iquitos-expedition/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://iquitosexpedition.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "C:/astro/iquitos-expedition/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/astro/iquitos-expedition/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://iquitosexpedition.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const meta = {
    title: "Iquitos Expedition - iquitosexpedition.com | Tours full day, paquetes ciudad, hotel y tours, Amazon Lodge todo incluido, paquetes exclusivos, pesca de pira\xF1as, comunidades nativas, isla de los monos, perezosos, Amazon Bio Park, Crea, Quisticocha, Lodge, Irapay Amazon Lodge, anacondas y mucho m\xE1s.",
    description: "Tours full day, paquetes ciudad, hotel y tours, Amazon Lodge todo incluido, paquetes exclusivos, pesca de pira\xF1as, comunidades nativas, isla de los monos, perezosos, anacondas, viaja de forma segura nuestro majestuoso R\xEDo Amazonas y sus encantos, somos tu mejor opci\xF3n en Iquitos, disfruta de un viaje organizado y libre de estr\xE9s. \xA1RESERVA TU EXPERIENCIA!",
    url: "https://iquitosexpedition.com/",
    image: "https://iquitosexpedition.com/imagen_de_previsualizacion.avif"
  };
  const { url } = Astro2;
  const isContactPage = url.pathname.includes("contacts");
  return renderTemplate(_b || (_b = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="robots" content="index, follow"><meta name="author" content="Rub\xE9n Tipiani"><meta name="copyright" content="Copyright (c) 2025, Iquitos Expedition"><title>\n			', '\n		</title><meta name="description"', '><meta property="og:site_name" content="Iquitos Expedition"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:type" content="website"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:type" content="image/avif"><meta property="twitter:card" content="summary_large_image"><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><meta property="twitter:site" content="@iquitosexpedition"><link rel="canonical"', '><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest">', "<script defer>\n			// Google Analytics\n			window.dataLayer = window.dataLayer || [];\n			function gtag() {\n				window.dataLayer.push(arguments);\n			}\n			gtag('js', new Date());\n			gtag('config', 'G-R3P2HY6LQP');\n		<\/script>", '</head> <body> <div id="loader" class="fixed inset-0 flex items-center justify-center bg-white z-50"> <div class="w-12 h-12 border-4 border-t-orange-600 border-gray-300 rounded-full animate-spin"></div> </div> ', " ", ' <a href="https://wa.link/no5uic" target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-30 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 transition duration-300 transform hover:scale-110" aria-label="Ir a Whatsapp"> <i class="fa-brands fa-whatsapp text-2xl"></i> </a> ', " </body></html>"])), meta.title, addAttribute(meta.description, "content"), addAttribute(meta.title, "content"), addAttribute(meta.description, "content"), addAttribute(meta.image, "content"), addAttribute(meta.url, "content"), addAttribute(meta.title, "content"), addAttribute(meta.description, "content"), addAttribute(meta.image, "content"), addAttribute(meta.url, "href"), isContactPage && renderTemplate(_a || (_a = __template(['<script src="https://www.google.com/recaptcha/api.js" async defer><\/script>']))), renderHead(), renderComponent($$result, "SpeedInsights", $$Index, {}), renderSlot($$result, $$slots["default"]), renderScript($$result, "C:/astro/iquitos-expedition/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "C:/astro/iquitos-expedition/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Navbar as a, $$Footer as b };
