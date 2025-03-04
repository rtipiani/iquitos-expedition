import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent } from '../../chunks/astro/server_B02qANs2.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../../chunks/Layout_BCuCHOvd.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$BreadcrumbTours = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative flex items-center justify-center min-h-[50vh] sm:min-h-64 md:h-95 lg:h-96 text-center pt-[var(--nav-height)]"> <img src="/../breadcrumb/bg-tourdiario.avif" alt="Iquitos Expedition - Tours Amazonas" class="absolute object-cover w-full h-full" loading="eager"> <div class="absolute inset-0 bg-black opacity-80 mix-blend-multiply"></div> <div class="relative z-20 px-6 md:px-12 text-white max-w-7xl w-full"> <h3 class="text-5xl lg:text-6xl font-extrabold tracking-wide drop-shadow-lg">
Tours Diarios
</h3> <p class="mt-2 flex items-center justify-center gap-2 text-lg text-gray-300"> <a href="/" class="hover:text-white">
Inicio
</a> <i class="fa-solid fa-chevron-right text-orange-500"></i> <span class="text-white font-semibold">
Tours Diarios
</span> </p> </div> </section>`;
}, "C:/astro/iquitos-expedition/src/components/BreadcrumbTours.astro", void 0);

const $$ToursDiarios$1 = createComponent(($$result, $$props, $$slots) => {
  const tours = [
    {
      image: "/../tours/aventuraextrema.avif",
      title: "Aventura Extrema (Puentes Colgantes)",
      description: "Disfruta de un emocionante recorrido por impresionantes puentes colgantes en la selva, donde la adrenalina y la belleza natural se fusionan para una experiencia inolvidable.",
      link: "./tours-diarios/aventura-extrema"
    },
    {
      image: "/../tours/quiticocha.avif",
      title: "CREA y Quiticocha",
      description: "Explora el Proyecto de Conservaci\xF3n de Manat\xEDes (CREA) y descubre la fauna local en el zool\xF3gico de Quistococha, disfrutando de su encantadora playa.",
      link: "./tours-diarios/crea-y-quiticocha"
    },
    {
      image: "/../tours/encantoamazonico.avif",
      title: "El Encanto Amaz\xF3nico",
      description: "Sum\xE9rgete en la fascinante biodiversidad de la selva, donde cada rinc\xF3n revela maravillas naturales y encuentros inolvidables con la fauna local.",
      link: "./tours-diarios/el-encanto-amazonico"
    },
    {
      image: "/../tours/isladelosmonos.avif",
      title: "Isla de los Monos",
      description: "Descubre un refugio natural donde primates viven en libertad, disfrutando de un entorno exuberante y aprendiendo sobre la rica biodiversidad de la regi\xF3n.",
      link: "./tours-diarios/isla-de-los-monos"
    },
    {
      image: "/../tours/mariposario.avif",
      title: "Mariposario",
      description: "Explora un colorido santuario de mariposas, donde podr\xE1s observar diversas especies en su h\xE1bitat natural y aprender sobre su ciclo de vida y su importancia en el ecosistema.",
      link: "./tours-diarios/mariposario"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-white my-12"> <div class="max-w-7xl mx-auto px-6 space-y-6"> <ul class="grid grid-cols-1 lg:grid-cols-2 gap-6"> ${tours.map((tour) => renderTemplate`<li class="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-xl border transition-colors duration-200"> <article> <img${addAttribute(tour.image, "src")}${addAttribute(tour.title, "alt")} class="w-full h-80 rounded-t-xl object-cover" loading="lazy"> <div class="w-full"> <div class="flex flex-col justify-start gap-3 p-4"> <h2 class="text-xl font-bold"> ${tour.title} </h2> <p class="text-md text-gray-700"> ${tour.description} </p> <div class="flex items-center gap-4"> <a${addAttribute(tour.link, "href")} class="inline-flex"> <span class="bg-green-950 hover:bg-orange-600 transition-colors duration-300 py-3 px-6 text-sm font-bold text-white rounded-md">
Ver itinerario
</span> </a> <a href="https://wa.link/kn19ze" target="_blank" class="inline-flex"> <span class="border border-green-950 text-green-950 hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-colors duration-300 py-3 px-6 text-sm font-bold rounded-md">
Consultar ahora
<i class="fa-brands fa-whatsapp fa-xl"></i> </span> </a> </div> </div> </div> </article> </li>`)} </ul> </div> </section>`;
}, "C:/astro/iquitos-expedition/src/components/ToursDiarios.astro", void 0);

const $$ToursDiarios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "BreadcrumbTours", $$BreadcrumbTours, {})} ${renderComponent($$result2, "ToursDiariosPackage", $$ToursDiarios$1, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/astro/iquitos-expedition/src/pages/paquetes/tours-diarios.astro", void 0);

const $$file = "C:/astro/iquitos-expedition/src/pages/paquetes/tours-diarios.astro";
const $$url = "/paquetes/tours-diarios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ToursDiarios,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
