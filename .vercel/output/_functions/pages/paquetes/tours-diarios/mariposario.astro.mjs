import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent } from '../../../chunks/astro/server_CEj8L07F.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../../../chunks/Layout_BXMIkbsN.mjs';
import { $ as $$BreadcrumbIrapay } from '../../../chunks/BreadcrumbIrapay_D7Uy8Wpf.mjs';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const $$Mariposario$1 = createComponent(($$result, $$props, $$slots) => {
  const tour = {
    image: "/../tours/toursdiariosmariposario.avif",
    title: "Mariposario."
  };
  const relatedTours = [
    {
      image: "/../tours/isladelosmonos.avif",
      title: "Isla de los Monos",
      duration: "Tours Diarios",
      link: "../tours-diarios/isla-de-los-monos"
    },
    {
      image: "/../tours/aventuraextrema.avif",
      title: "Aventura Extrema (Puentes Colgantes)",
      duration: "Tours Diarios",
      link: "../tours-diarios/aventura-extrema"
    },
    {
      image: "/../tours/quiticocha.avif",
      title: "CREA y Quiticocha",
      duration: "Tours Diarios",
      link: "../tours-diarios/crea-y-quiticocha"
    }
  ];
  const accordionItems = [
    {
      title: "Nuestro Servicio Incluye",
      content: [
        "Recojo del hotel al puerto.",
        "Gu\xEDa profesional.",
        "Entradas a los lugares a visitar.",
        "Transporte fluvial equipado.",
        "Equipo de seguridad.",
        "Botiqu\xEDn de primeros auxilios.",
        "Atenci\xF3n personalizada."
      ]
    },
    {
      title: "Nuestro Servicio No Incluye",
      content: [
        "Hotel.",
        "Pasajes a\xE9reos.",
        "Alimentaci\xF3n.",
        "Entre otros no mencionados."
      ]
    },
    {
      title: "Qu\xE9 Traer con Usted",
      content: [
        "Ropa ligera.",
        "Repelente.",
        "Bloqueador.",
        "C\xE1mara fotogr\xE1fica.",
        "Lentes de sol.",
        "Chaqueta de lluvia.",
        "Gorro o sombrero.",
        "Botiqu\xEDn personal."
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 my-16"> <div class="lg:col-span-2 space-y-4"> <div class="flex items-center gap-2 mb-4"> <a href="#" onclick="history.back()" class="flex items-center text-green-950 hover:text-orange-600 transition-all font-medium"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path> </svg>
Volver
</a> </div> <img${addAttribute(tour.image, "src")}${addAttribute(tour.title, "alt")} class="w-full h-60 sm:h-80 object-cover rounded-xl shadow-md"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between"> <h1 class="text-xl sm:text-3xl font-bold text-gray-900 leading-tight"> ${tour.title} </h1> <a href="https://wa.link/5cb32j" class="mt-4 sm:mt-0 w-full sm:w-auto text-center bg-green-950 hover:bg-orange-600 transition-all py-2 px-4 text-white font-medium rounded-md" target="_blank">
Consultar ahora
<i class="fa-brands fa-whatsapp"></i> </a> </div> <div class="space-y-4"> <ul class="list-disc list-inside text-gray-700 space-y-2"> <li class="indent-[-1.5em] pl-[1.5em]">
Recojo de su hotel y traslado al puerto de Bellavista Nanay
<strong>
(tour gastronómico: tacacho, suri, pescados y caimán a la parrilla)
</strong>.
</li> <li class="indent-[-1.5em] pl-[1.5em]">
Viaje por el río Nanay
<strong>
(río de aguas oscuras)
</strong>.
</li> <li class="indent-[-1.5em] pl-[1.5em]">
Llegada al centro de rescate y mariposario Pilpintuwasi, donde ingresaremos a una jaula en medio de la naturaleza y observaremos
<strong>
(metamorfosis de las mariposas, jaguar, aves, monos, entre otras especies)
</strong>
que han sido rescatadas y aquí son protegidas.
</li> <li class="indent-[-1.5em] pl-[1.5em]">
Presentación temática de las costumbres y creencias de la tribu Kukama
<strong>
(donde podrás ser partícipe de sus danzas típicas y admirar el gran trabajo que realizan a través de su artesanía y preservación de su cultura)
</strong>.
</li> <li class="indent-[-1.5em] pl-[1.5em]">
Pesca artesanal de pirañas. Traslado de retorno a la ciudad de Iquitos.
</li> <li class="indent-[-1.5em] pl-[1.5em]">
Llegada a puerto de Bellavista Nanay y traslado a su hotel, fin del tour.
</li> </ul> </div> <div class="space-y-4"> ${accordionItems.map((item) => renderTemplate`<details class="bg-blue-50 rounded-lg shadow-sm p-4"> <summary class="text-lg sm:text-xl font-semibold cursor-pointer text-green-950"> ${item.title} </summary> <ul class="mt-2 space-y-1 text-gray-700"> ${item.content.map((text) => renderTemplate`<li class="ml-4 list-disc">${text}</li>`)} </ul> </details>`)} </div> <div class="flex flex-col"> <a href="https://wa.link/5cb32j" class="mt-2 w-full text-center bg-green-950 hover:bg-orange-600 transition-all py-2 px-4 text-white font-medium rounded-md" target="_blank">
Consultar ahora
<i class="fa-brands fa-whatsapp fa-xl"></i> </a> </div> </div> <aside class="lg:col-span-1 order-last lg:order-none sticky top-10 space-y-6 self-start"> <h3 class="text-xl sm:text-2xl text-center font-bold text-gray-900">
También te <br> puede interesar
</h3> <div class="max-h-[670px] overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-green-100"> ${relatedTours.map((tour2) => renderTemplate`<a${addAttribute(tour2.link, "href")} class="block border rounded-xl overflow-hidden shadow-md transition-transform transform hover:shadow-lg bg-white"> <img${addAttribute(tour2.image, "src")}${addAttribute(tour2.title, "alt")} class="w-full h-32 sm:h-40 object-cover"> <div class="bg-green-950 text-white text-sm flex justify-center gap-2 py-2"> <span class="flex items-center"> <i class="fa-solid fa-calendar-check mr-2"></i> ${tour2.duration} </span> </div> <div class="p-4 text-center"> <h4 class="text-lg font-semibold text-gray-900">${tour2.title}</h4> <span class="mt-3 inline-block bg-green-950 hover:bg-green-800 transition-all py-2 px-4 text-white font-medium rounded-md">
Ver itinerario
</span> </div> </a>`)} </div> </aside> </section>`;
}, "C:/astro/iquitos-expedition/src/components/ToursDiarios/Mariposario.astro", void 0);

const $$Mariposario = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "BreadcrumbIrapay", $$BreadcrumbIrapay, {})} ${renderComponent($$result2, "MariposarioPC", $$Mariposario$1, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/astro/iquitos-expedition/src/pages/paquetes/tours-diarios/mariposario.astro", void 0);

const $$file = "C:/astro/iquitos-expedition/src/pages/paquetes/tours-diarios/mariposario.astro";
const $$url = "/paquetes/tours-diarios/mariposario";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Mariposario,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
