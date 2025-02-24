import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent } from '../../../chunks/astro/server_CEj8L07F.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../../../chunks/Layout_BXMIkbsN.mjs';
import { $ as $$BreadcrumbPacaya } from '../../../chunks/BreadcrumbPacaya_CUmI9O0A.mjs';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const $$PacayaSamiria3D = createComponent(($$result, $$props, $$slots) => {
  const tour = {
    image: "/../tours/pacayasamiriadesdeyurimaguas3d2n.avif",
    title: "Tours Reserva Nacional Pacaya Samiria (3D/2N)",
    itinerary: [
      {
        day: "D\xEDa 1",
        title: "Yurimaguas- Lagunas- Posa Gloria",
        parrafo1: "4:00 AM Personal de nuestra agencia pasara por su hotel para trasladarle al puerto de la ciudad de Yurimaguas-en seguida iniciamos nuestro viaje de 4 horas en transporte fluvial hasta la comunidad de Lagunas , donde nos reunimos con nuestros gu\xEDas nativos, despu\xE9s del desayuno iniciamos con nuestro traslado de 30 minutos en moto taxi hasta puerto Tibilo.",
        parrafo2: "10:00 AM Iniciamos nuestra expedici\xF3n, este d\xEDa usaremos embarcaciones artesanales para trasladarnos por 5 horas por el rio Tibilo hasta nuestra caba\xF1a que est\xE1 ubicada en el sector llamado posa Gloria. Durante nuestras visitas haremos observaci\xF3n de aves end\xE9micas, avistamiento de cocodrilos, pesca de pira\xF1as entre otras actividades Ave End\xE9mica Pacaya-Samiria."
      },
      {
        day: "D\xEDa 2",
        title: "Excursi\xF3n dentro de la Reserva & pernocte en Posa Gloria",
        parrafo1: "8:00 AM Despu\xE9s del desayuno iniciamos nuestra visita dentro del parque nacional, usaremos canoa para movilizarse durante la excursi\xF3n, este d\xEDa haremos avistamiento de cocodrilos, monos, aves ex\xF3ticas de la Amazon\xEDa, pesca de pira\xF1as entre otras actividades.",
        parrafo2: "7:00 PM Iniciamos nuestra visita nocturna para avistar cocodrilos, hacer pesca de Pira\xF1as y disfrutar de leyendas de la amazonia."
      },
      {
        day: "D\xEDa 3",
        title: "Posa Gloria \u2013 Lagunas \u2013 Yurimaguas",
        parrafo1: "5:00 AM Iniciamos nuestro viaje de retorno por 6 horas hasta puerto Tibilo donde nos espera nuestra movilidad para trasladarnos a la comunidad de Lagunas. Almuerzo y traslado al puerto para nuestro viaje de retorno a la ciudad de Yurimaguas."
      }
    ]
  };
  const relatedTours = [
    {
      image: "/../tours/cumaceba1.avif",
      title: "Cumaceba Lodge (3D/2N)",
      duration: "3 d\xEDas | 2 noches",
      link: "../tours-cumaceba-lodge/tour-3-dias-2-noches"
    },
    {
      image: "/../tours/inolvidablerioamazonas.avif",
      title: "Explorando el Amazonas (3D/2N)",
      duration: "3 d\xEDas | 2 noches",
      link: "../tours-heliconia-lodge/inolvidable-rio-amazonas-3-dias-2-noches"
    },
    {
      image: "/../tours/iquitosrelax.avif",
      title: "Tours Reserva Nacional Pacaya Samiria (3D/2N) - Desde Iquitos",
      duration: "3 d\xEDas | 2 noches",
      link: "../tours-pacaya-samiria/tour-3-dias-2-noches"
    }
  ];
  const accordionItems = [
    {
      title: "Nuestro Servicio Incluye",
      content: [
        "Transporte.",
        "Traslado del Hotel al Puerto Hotel.",
        "Barco Yurimaguas Lagunas Yurimaguas.",
        "2 noches de alojamiento.",
        "Alimentaci\xF3n:",
        "Desayuno.",
        "Almuerzo.",
        "Cena.",
        "Equipo de pesca.",
        "Gu\xEDas nativos.",
        "Ticket de entrada a parques."
      ]
    },
    {
      title: "Nuestro Servicio No Incluye",
      content: [
        "Pasajes a\xE9reos.",
        "Bebidas.",
        "Traslado de Tarapoto Yurimaguas Tarapoto.",
        "Alimentaci\xF3n extra.",
        "Seguro de viaje.",
        "Propinas (opcional)."
      ]
    },
    {
      title: "Sugerimos llevar con usted",
      content: [
        "Mochila de 30 a 50 litros para llevar las cosas que utilizar\xE1s durante el tour.",
        "Mochila de 15 litros para las caminatas cortas que realizar\xE1s durante el d\xEDa.",
        "Camisetas o camisas manga larga.",
        "Pantal\xF3n y chaqueta impermeables.",
        "Poncho de lluvia.",
        "Zapatos de trekking",
        "Snacks.",
        "Gorro para el sol.",
        "Bloqueador solar.",
        "Repelente de insectos.",
        "Binoculares.",
        "Linterna frontal.",
        "Bolsas Ziploc o similar (para envolver tu ropa y evitar mojarla en caso de lluvia).",
        "Dinero extra para gastos no incluidos en el tour.",
        "Seguro de viaje."
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 my-16"> <div class="lg:col-span-2 space-y-4"> <div class="flex items-center gap-2 mb-4"> <a href="#" onclick="history.back()" class="flex items-center text-green-950 hover:text-orange-600 transition-all font-medium"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path> </svg>
Volver
</a> </div> <img${addAttribute(tour.image, "src")}${addAttribute(tour.title, "alt")} class="w-full h-60 sm:h-80 object-cover rounded-xl shadow-md"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between"> <h1 class="text-xl sm:text-3xl font-bold text-gray-900 leading-tight"> ${tour.title} </h1> <a href="https://wa.link/cdio8q" class="mt-4 sm:mt-0 w-full sm:w-auto text-center bg-green-950 hover:bg-orange-600 transition-all py-2 px-4 text-white font-medium rounded-md" target="_blank">
Consultar ahora
<i class="fa-brands fa-whatsapp"></i> </a> </div> <div class="space-y-4"> <div class="bg-white p-2"> <p class="text-gray-700 leading-relaxed text-justify mb-3">
La Reserva Nacional Pacaya-Samiria es un área protegida ubicada en la Región de Loreto, Amazonía de Perú. Protege un área de colinas bajas y bosques inundables estacionalmente en la selva amazónica. La Reserva Nacional Pacaya-Samiria y la cercana Reserva Tamshiyacu-Tahuayo forman un punto crítico de biodiversidad en la selva amazónica en Perú.
</p> <p class="text-gray-700 leading-relaxed mb-3">
El Amazonas de Paso La Reserva Pacaya Samiria es uno de los parques naturales protegidos más grandes de Perú, la misma que fue establecida en el año 1982, como reserva natural. Este parque cuenta con más de dos millones de hectáreas de bosque tropical Amazónico que conserva la más grande biodiversidad del planeta.
</p> </div> </div> <div class="space-y-4"> ${tour.itinerary.map((item) => renderTemplate`<div class="bg-gray-50 p-2 rounded-lg shadow-sm"> <h2 class="text-lg sm:text-xl font-bold text-green-950 underline mb-3"> ${item.day}. ${item.title} </h2> <div class="space-y-4"> ${[
    item.parrafo1,
    item.parrafo2
  ].filter((parrafo) => parrafo).map((parrafo) => renderTemplate`<p class="text-gray-700 leading-relaxed">${parrafo}</p>`)} </div> </div>`)} </div> <div class="space-y-4"> ${accordionItems.map((item) => renderTemplate`<details class="bg-blue-50 rounded-lg shadow-sm p-4"> <summary class="text-lg sm:text-xl font-semibold cursor-pointer text-green-950"> ${item.title} </summary> <ul class="mt-2 space-y-1 text-gray-700"> ${item.content.map((text) => renderTemplate`<li class="ml-4 list-disc">${text}</li>`)} </ul> </details>`)} </div> <div class="flex flex-col"> <a href="https://wa.link/cdio8q" class="mt-2 w-full text-center bg-green-950 hover:bg-orange-600 transition-all py-2 px-4 text-white font-medium rounded-md" target="_blank">
Consultar ahora
<i class="fa-brands fa-whatsapp fa-xl"></i> </a> </div> </div> <aside class="lg:col-span-1 order-last lg:order-none sticky top-10 space-y-6 self-start"> <h3 class="text-xl sm:text-2xl text-center font-bold text-gray-900">
También te <br> puede interesar
</h3> <div class="max-h-[670px] overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-green-100"> ${relatedTours.map((tour2) => renderTemplate`<a${addAttribute(tour2.link, "href")} class="block border rounded-xl overflow-hidden shadow-md transition-transform transform hover:shadow-lg bg-white"> <img${addAttribute(tour2.image, "src")}${addAttribute(tour2.title, "alt")} class="w-full h-32 sm:h-40 object-cover"> <div class="bg-green-950 text-white text-sm flex justify-center gap-2 py-2"> <span class="flex items-center"> <i class="fa-solid fa-calendar-check mr-2"></i> ${tour2.duration} </span> </div> <div class="p-4 text-center"> <h4 class="text-lg font-semibold text-gray-900">${tour2.title}</h4> <span class="mt-3 inline-block bg-green-950 hover:bg-green-800 transition-all py-2 px-4 text-white font-medium rounded-md">
Ver itinerario
</span> </div> </a>`)} </div> </aside> </section>`;
}, "C:/astro/iquitos-expedition/src/components/PacayaSamiria/PacayaSamiria3D.astro", void 0);

const $$Tour3Dias2Noches = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "BreadcrumbPacaya", $$BreadcrumbPacaya, {})} ${renderComponent($$result2, "PacayaSamiria3D", $$PacayaSamiria3D, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/astro/iquitos-expedition/src/pages/paquetes/tours-pacaya-samiria/tour-3-dias-2-noches.astro", void 0);

const $$file = "C:/astro/iquitos-expedition/src/pages/paquetes/tours-pacaya-samiria/tour-3-dias-2-noches.astro";
const $$url = "/paquetes/tours-pacaya-samiria/tour-3-dias-2-noches";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Tour3Dias2Noches,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
