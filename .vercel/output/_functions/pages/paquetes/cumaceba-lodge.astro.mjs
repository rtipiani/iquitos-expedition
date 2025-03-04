import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent } from '../../chunks/astro/server_B02qANs2.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../../chunks/Layout_BCuCHOvd.mjs';
import { $ as $$BreadcrumbCumaceba } from '../../chunks/BreadcrumbCumaceba_CwTT67_D.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$CumacebaLodge$1 = createComponent(($$result, $$props, $$slots) => {
  const tours = [
    {
      image: "/../tours/cumaceba1.avif",
      title: "Cumaceba Lodge (3D/2N)",
      description: "Disfruta de una escapada de tres d\xEDas en el Cumaceba Lodge, donde la naturaleza, la comodidad y la aventura se fusionan en un entorno espectacular, lleno de experiencias inolvidables y momentos \xFAnicos.",
      link: "./tours-cumaceba-lodge/tour-3-dias-2-noches"
    },
    {
      image: "/../tours/cumaceba2.avif",
      title: "Cumaceba Lodge (4D/3N)",
      description: "Sum\xE9rgete en una experiencia de cuatro d\xEDas en Cumaceba Lodge, explorando la selva, disfrutando de actividades emocionantes y relaj\xE1ndote en un entorno natural impresionante.",
      link: "./tours-cumaceba-lodge/tour-4-dias-3-noches"
    },
    {
      image: "/../tours/cumaceba3.avif",
      title: "Cumaceba Lodge (5D/4N)",
      description: "Este recorrido est\xE1 dise\xF1ado para sumergirte en la riqueza y diversidad de la selva peruana, brind\xE1ndote una experiencia \xFAnica y memorable que te har\xE1 sentir conectado con la naturaleza.",
      link: "./tours-cumaceba-lodge/tour-5-dias-4-noches"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-white my-12"> <div class="max-w-7xl mx-auto px-6 space-y-6"> <ul class="grid grid-cols-1 lg:grid-cols-2 gap-6"> ${tours.map((tour) => renderTemplate`<li class="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-xl border transition-colors duration-200"> <article> <img${addAttribute(tour.image, "src")}${addAttribute(tour.title, "alt")} class="w-full h-80 rounded-t-xl object-cover" loading="lazy"> <div class="w-full"> <div class="flex flex-col justify-start gap-3 p-4"> <h2 class="text-xl font-bold"> ${tour.title} </h2> <p class="text-md text-gray-700"> ${tour.description} </p> <div class="flex items-center gap-4"> <a${addAttribute(tour.link, "href")} class="inline-flex"> <span class="bg-green-950 hover:bg-orange-600 transition-colors duration-300 py-3 px-6 text-sm font-bold text-white rounded-md">
Ver itinerario
</span> </a> <a href="https://wa.link/kn19ze" target="_blank" class="inline-flex"> <span class="border border-green-950 text-green-950 hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-colors duration-300 py-3 px-6 text-sm font-bold rounded-md">
Consultar ahora
<i class="fa-brands fa-whatsapp fa-xl"></i> </span> </a> </div> </div> </div> </article> </li>`)} </ul> </div> </section>`;
}, "C:/astro/iquitos-expedition/src/components/CumacebaLodge.astro", void 0);

const $$CumacebaLodge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "BreadcrumbCumaceba", $$BreadcrumbCumaceba, {})} ${renderComponent($$result2, "CumacebaLodgePackage", $$CumacebaLodge$1, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/astro/iquitos-expedition/src/pages/paquetes/cumaceba-lodge.astro", void 0);

const $$file = "C:/astro/iquitos-expedition/src/pages/paquetes/cumaceba-lodge.astro";
const $$url = "/paquetes/cumaceba-lodge";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$CumacebaLodge,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
