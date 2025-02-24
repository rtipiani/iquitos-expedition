import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderScript, a as addAttribute, b as renderComponent } from '../chunks/astro/server_CEj8L07F.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../chunks/Layout_BXMIkbsN.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$BreadcrumbGaleria = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative flex items-center justify-center min-h-[50vh] sm:min-h-64 md:h-95 lg:h-96 text-center pt-[var(--nav-height)]"> <img src="/../breadcrumb/bg-nosotros.avif" alt="Iquitos Expedition - Tours Amazonas" class="absolute object-cover w-full h-full" loading="eager"> <div class="absolute inset-0 bg-black opacity-80 mix-blend-multiply"></div> <div class="relative z-20 px-6 md:px-12 text-white max-w-7xl w-full"> <h3 class="text-5xl lg:text-6xl font-extrabold tracking-wide drop-shadow-lg">
Galería
</h3> <p class="mt-2 flex items-center justify-center gap-2 text-lg text-gray-300"> <a href="/" class="hover:text-white">Inicio</a> <i class="fa-solid fa-chevron-right text-orange-500"></i> <span class="text-white font-semibold">Galería</span> </p> </div> </section>`;
}, "C:/astro/iquitos-expedition/src/components/BreadcrumbGaleria.astro", void 0);

const $$Gallery$1 = createComponent(($$result, $$props, $$slots) => {
  const images = [
    "./gallery/gal-ie1.avif",
    "./gallery/gal-ie2.avif",
    "./gallery/gal-ie3.avif",
    "./gallery/gal-ie4.avif",
    "./gallery/gal-ie5.avif",
    "./gallery/gal-ie6.avif",
    "./gallery/gal-ie7.avif",
    "./gallery/gal-ie8.avif",
    "./gallery/gal-ie9.avif",
    "./gallery/gal-ie10.avif",
    "./gallery/gal-ie11.avif",
    "./gallery/gal-ie12.avif",
    "./gallery/gal-ie13.avif",
    "./gallery/gal-ie14.avif",
    "./gallery/gal-ie15.avif",
    "./gallery/gal-ie16.avif",
    "./gallery/gal-ie17.avif",
    "./gallery/gal-ie18.avif",
    "./gallery/gal-ie19.avif",
    "./gallery/gal-ie20.avif",
    "./gallery/gal-ie21.avif"
  ];
  return renderTemplate`${maybeRenderHead()}<section class="max-w-7xl mx-auto px-4 py-24"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pswp-gallery" id="my-gallery"> ${images.map((image, index) => renderTemplate`<a${addAttribute(image, "href")} rel="noreferrer" aria-label="Imagen de Iquitos, Amazon Irapay, Cumaceba Lodge" class="shadow-sm" data-pswp-width="831" data-pswp-height="552"> <div class="relative group cursor-pointer"> <img${addAttribute(index > 5 ? "lazy" : "eager", "loading")}${addAttribute(image, "src")} alt="Irapay Amazon" class="object-cover object-top w-full h-full rounded-md"> <p class="flex text-white backdrop-blur-md bg-black/40 text-2xl absolute font-bold w-full gap-2 items-center top-0 h-full justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"></path> </svg>
Iquitos Expedition
</p> </div> </a>`)} </div> </section> ${renderScript($$result, "C:/astro/iquitos-expedition/src/components/Gallery.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/astro/iquitos-expedition/src/components/Gallery.astro", void 0);

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "BreadcrumbGaleria", $$BreadcrumbGaleria, {})} ${renderComponent($$result2, "GalleryIE", $$Gallery$1, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/astro/iquitos-expedition/src/pages/gallery.astro", void 0);

const $$file = "C:/astro/iquitos-expedition/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Gallery,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
