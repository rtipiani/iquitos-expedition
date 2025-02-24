import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent } from '../../chunks/astro/server_CEj8L07F.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../../chunks/Layout_BXMIkbsN.mjs';
import { $ as $$BreadcrumbPacaya } from '../../chunks/BreadcrumbPacaya_CUmI9O0A.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$PacayaSamiria$1 = createComponent(($$result, $$props, $$slots) => {
  const tours = [
    {
      image: "/../tours/pacayasamiria1.avif",
      title: "Tours Reserva Nacional Pacaya Samiria (3D/2N) - Desde Yurimaguas",
      description: "Emb\xE1rcate en una aventura de tres d\xEDas en la Reserva Nacional Pacaya Samiria, explorando la rica biodiversidad y la belleza natural desde Yurimaguas.",
      link: "./tours-pacaya-samiria/tour-3-dias-2-noches"
    },
    {
      image: "/../tours/pacayasamiria2.avif",
      title: "Tours Reserva Nacional Pacaya Samiria (4D/3N) - Desde Iquitos",
      description: "Descubre la magia de la Amazon\xEDa en un tour de cuatro d\xEDas por la Reserva Nacional Pacaya Samiria, donde la aventura y la naturaleza se unen desde Iquitos.",
      link: "./tours-pacaya-samiria/tour-4-dias-3-noches"
    },
    {
      image: "/../tours/pacayasamiria3.avif",
      title: "Expedici\xF3n Pacaya Samiria (5D/4N) - Desde Iquitos",
      description: "Vive una expedici\xF3n de cinco d\xEDas en la impresionante Reserva Nacional Pacaya Samiria, disfrutando de la fauna, flora y cultura amaz\xF3nica desde Iquitos.",
      link: "./tours-pacaya-samiria/tour-5-dias-4-noches"
    },
    {
      image: "/../tours/pacayasamiria4.avif",
      title: "Tours R. N. Pacaya Samiria (6D/5N) - Desde Yurimaguas",
      description: "Sum\xE9rgete en una experiencia de seis d\xEDas en la Reserva Nacional Pacaya Samiria, explorando sus maravillas naturales y culturales desde Yurimaguas.",
      link: "./tours-pacaya-samiria/tour-6-dias-5-noches"
    },
    {
      image: "/../tours/pacayasamiria5.avif",
      title: "Tours Pacaya Samiria (8D/7N) - Desde Tarapoto",
      description: "Disfruta de una inmersi\xF3n total en la Amazon\xEDa con un tour de ocho d\xEDas por la Reserva Nacional Pacaya Samiria, donde la aventura y la naturaleza te esperan desde Tarapoto.",
      link: "./tours-pacaya-samiria/tour-8-dias-7-noches"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-white my-12"> <div class="max-w-7xl mx-auto px-6 space-y-6"> <ul class="grid grid-cols-1 lg:grid-cols-2 gap-6"> ${tours.map((tour) => renderTemplate`<li class="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-xl border transition-colors duration-200"> <article> <img${addAttribute(tour.image, "src")}${addAttribute(tour.title, "alt")} class="w-full h-80 rounded-t-xl object-cover" loading="lazy"> <div class="w-full"> <div class="flex flex-col justify-start gap-3 p-4"> <h2 class="text-xl font-bold"> ${tour.title} </h2> <p class="text-md text-gray-700"> ${tour.description} </p> <div class="flex items-center gap-4"> <a${addAttribute(tour.link, "href")} class="inline-flex"> <span class="bg-green-950 hover:bg-orange-600 transition-colors duration-300 py-3 px-6 text-sm font-bold text-white rounded-md">
Ver itinerario
</span> </a> <a href="https://wa.link/kn19ze" target="_blank" class="inline-flex"> <span class="border border-green-950 text-green-950 hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-colors duration-300 py-3 px-6 text-sm font-bold rounded-md">
Consultar ahora
<i class="fa-brands fa-whatsapp fa-xl"></i> </span> </a> </div> </div> </div> </article> </li>`)} </ul> </div> </section>`;
}, "C:/astro/iquitos-expedition/src/components/PacayaSamiria.astro", void 0);

const $$PacayaSamiria = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "BreadcrumbPacaya", $$BreadcrumbPacaya, {})} ${renderComponent($$result2, "PacayaSamiriaPackage", $$PacayaSamiria$1, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/astro/iquitos-expedition/src/pages/paquetes/pacaya-samiria.astro", void 0);

const $$file = "C:/astro/iquitos-expedition/src/pages/paquetes/pacaya-samiria.astro";
const $$url = "/paquetes/pacaya-samiria";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$PacayaSamiria,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
