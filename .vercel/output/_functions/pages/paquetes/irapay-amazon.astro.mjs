import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent } from '../../chunks/astro/server_B02qANs2.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../../chunks/Layout_BCuCHOvd.mjs';
import { $ as $$BreadcrumbIrapay } from '../../chunks/BreadcrumbIrapay_7NH7SDPu.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$IrapayAmazon$1 = createComponent(($$result, $$props, $$slots) => {
  const tours = [
    {
      image: "/../tours/iquitosrelax.avif",
      title: "Iquitos Relax (3D/2N)",
      description: "Esc\xE1pate a Iquitos y descubre un para\xEDso escondido donde la naturaleza, la comodidad y la aventura se encuentran.",
      link: "./tours-irapay-amazon/iquitos-relax-3-dias-2-noches"
    },
    {
      image: "/../tours/explorandoamazonas.avif",
      title: "Explorando el Amazonas (4D/3N)",
      description: "Avent\xFArate en la selva amaz\xF3nica y vive una experiencia \xFAnica donde la biodiversidad, el confort y la emoci\xF3n se unen.",
      link: "./tours-irapay-amazon/explorando-el-amazonas-4-dias-3-noches"
    },
    {
      image: "/../tours/iquitosdeaventura.avif",
      title: "Iquitos de Aventura (5D/4N)",
      description: "Descubre la selva amaz\xF3nica y vive una experiencia inolvidable donde la exploraci\xF3n, la naturaleza y la emoci\xF3n convergen.",
      link: "./tours-irapay-amazon/iquitos-de-aventura-5-dias-4-noches"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-white my-12"> <div class="max-w-7xl mx-auto px-6 space-y-6"> <ul class="grid grid-cols-1 lg:grid-cols-2 gap-6"> ${tours.map((tour) => renderTemplate`<li class="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-xl border transition-colors duration-200"> <article> <img${addAttribute(tour.image, "src")}${addAttribute(tour.title, "alt")} class="w-full h-80 rounded-t-xl object-cover" loading="lazy"> <div class="w-full"> <div class="flex flex-col justify-start gap-3 p-4"> <h2 class="text-xl font-bold"> ${tour.title} </h2> <p class="text-md text-gray-700"> ${tour.description} </p> <div class="flex items-center gap-4"> <a${addAttribute(tour.link, "href")} class="inline-flex"> <span class="bg-green-950 hover:bg-orange-600 transition-colors duration-300 py-3 px-6 text-sm font-bold text-white rounded-md">
Ver itinerario
</span> </a> <a href="https://wa.link/kn19ze" target="_blank" class="inline-flex"> <span class="border border-green-950 text-green-950 hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-colors duration-300 py-3 px-6 text-sm font-bold rounded-md">
Consultar ahora
<i class="fa-brands fa-whatsapp fa-xl"></i> </span> </a> </div> </div> </div> </article> </li>`)} </ul> </div> </section>`;
}, "C:/astro/iquitos-expedition/src/components/IrapayAmazon.astro", void 0);

const $$IrapayAmazon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "BreadcrumbIrapay", $$BreadcrumbIrapay, {})} ${renderComponent($$result2, "IrapayAmazonPackage", $$IrapayAmazon$1, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/astro/iquitos-expedition/src/pages/paquetes/irapay-amazon.astro", void 0);

const $$file = "C:/astro/iquitos-expedition/src/pages/paquetes/irapay-amazon.astro";
const $$url = "/paquetes/irapay-amazon";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$IrapayAmazon,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
