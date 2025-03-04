import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent } from '../../chunks/astro/server_B02qANs2.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../../chunks/Layout_BCuCHOvd.mjs';
import { $ as $$BreadcrumbHeliconia } from '../../chunks/BreadcrumbHeliconia_DUewoDtN.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$HeliconiaLodge$1 = createComponent(($$result, $$props, $$slots) => {
  const tours = [
    {
      image: "/../tours/inolvidablerioamazonas.avif",
      title: "Inolvidable R\xEDo Amazonas (3D/2N)",
      description: "Vive tres d\xEDas de magia en la selva, explorando el majestuoso r\xEDo Amazonas y disfrutando de la naturaleza, el confort y la aventura.",
      link: "./tours-heliconia-lodge/inolvidable-rio-amazonas-3-dias-2-noches"
    },
    {
      image: "/../tours/maravillasdelaamazonia.avif",
      title: "Descubre Las Maravillas De La Amazon\xEDa (4D/3N)",
      description: "Explora la selva amaz\xF3nica en cuatro d\xEDas llenos de aventuras, biodiversidad y experiencias inolvidables.",
      link: "./tours-heliconia-lodge/descubre-las-maravillas-de-la-amazonia-4-dias-3-noches"
    },
    {
      image: "/../tours/culturayaventurasenlaselva.avif",
      title: "Cultura Y Aventuras En La Selva (5D/4N)",
      description: "Sum\xE9rgete en la cultura amaz\xF3nica y disfruta de cinco d\xEDas de emocionantes aventuras en plena selva.",
      link: "./tours-heliconia-lodge/cultura-y-aventuras-en-la-selva-5-dias-4-noches"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-white my-12"> <div class="max-w-7xl mx-auto px-6 space-y-6"> <ul class="grid grid-cols-1 lg:grid-cols-2 gap-6"> ${tours.map((tour) => renderTemplate`<li class="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-xl border transition-colors duration-200"> <article> <img${addAttribute(tour.image, "src")}${addAttribute(tour.title, "alt")} class="w-full h-80 rounded-t-xl object-cover" loading="lazy"> <div class="w-full"> <div class="flex flex-col justify-start gap-3 p-4"> <h2 class="text-xl font-bold"> ${tour.title} </h2> <p class="text-md text-gray-700"> ${tour.description} </p> <div class="flex items-center gap-4"> <a${addAttribute(tour.link, "href")} class="inline-flex"> <span class="bg-green-950 hover:bg-orange-600 transition-colors duration-300 py-3 px-6 text-sm font-bold text-white rounded-md">
Ver itinerario
</span> </a> <a href="https://wa.link/kn19ze" target="_blank" class="inline-flex"> <span class="border border-green-950 text-green-950 hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-colors duration-300 py-3 px-6 text-sm font-bold rounded-md">
Consultar ahora
<i class="fa-brands fa-whatsapp fa-xl"></i> </span> </a> </div> </div> </div> </article> </li>`)} </ul> </div> </section>`;
}, "C:/astro/iquitos-expedition/src/components/HeliconiaLodge.astro", void 0);

const $$HeliconiaLodge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "BreadcrumbHeliconia", $$BreadcrumbHeliconia, {})} ${renderComponent($$result2, "HeliconiaLodgePackage", $$HeliconiaLodge$1, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/astro/iquitos-expedition/src/pages/paquetes/heliconia-lodge.astro", void 0);

const $$file = "C:/astro/iquitos-expedition/src/pages/paquetes/heliconia-lodge.astro";
const $$url = "/paquetes/heliconia-lodge";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$HeliconiaLodge,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
