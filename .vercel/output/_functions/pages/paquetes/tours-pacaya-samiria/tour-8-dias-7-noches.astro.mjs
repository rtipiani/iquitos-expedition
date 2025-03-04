import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent } from '../../../chunks/astro/server_B02qANs2.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../../../chunks/Layout_BCuCHOvd.mjs';
import { $ as $$BreadcrumbPacaya } from '../../../chunks/BreadcrumbPacaya_DL8lk2aV.mjs';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const $$PacayaSamiria8D = createComponent(($$result, $$props, $$slots) => {
  const tour = {
    image: "/../tours/pacayasamiriadesdeytarapoto.avif",
    title: "Pacaya Samiria (8D/7N) - Desde Tarapoto.",
    itinerary: [
      {
        day: "D\xEDa 1",
        title: "Tarapoto \u2013 Yurimaguas.",
        parrafo1: "Nuestro personal calificado le estar\xE1 esperando en el aeropuerto, para hacer el traslado de 2:30 horas a la ciudad de Yurimaguas. Tendremos cena y pernocte en un hotel de la ciudad."
      },
      {
        day: "D\xEDa 2",
        title: "Yurimaguas \u2013 Lagunas",
        parrafo1: "Este segundo d\xEDa iniciamos nuestra aventura a las 7 am navegando el r\xEDo Huallaga por un tiempo aproximado de 6 horas hasta la Comunidad Nativa de Lagunas. Al arribo, nos trasladamos a un albergue de la comunidad. Por la tarde despu\xE9s del almuerzo nos entrevistamos con nuestros gu\xEDas de la comunidad. Experimentaremos una Cena selv\xE1tica y pernoctaremos en Lagunas."
      },
      {
        day: "D\xEDa 3",
        title: "Lagunas \u2013 Posa Gloria",
        parrafo1: "Este d\xEDa muy temprano iniciamos nuestra aventura en la Reserva Pacaya Samiria. Usaremos una moto-taxi como medio de transporte por 40 minutos. Luego navegaremos en embarcaciones r\xFAsticas por el resto de la expedici\xF3n. Durante nuestro recorrido, podremos disfrutar de la exuberante Selva Amaz\xF3nica de Per\xFA, tambi\xE9n se podr\xE1 observar y fotografiar delfines, monos, guacamayos y hasta anacondas, entre otros animales paradis\xEDacos de la selva."
      },
      {
        day: "D\xEDa 4",
        title: "Posa Gloria \u2013 Camotado",
        parrafo1: "Este d\xEDa iniciamos nuestra exploraci\xF3n con peque\xF1as caminatas y usaremos los r\xEDos como medio de transporte usando embarcaciones ancestrales (chalupas y canoas cavadas en troncos); nuestros gu\xEDas har\xE1n reconocimiento de plantas medicinales que han sido usadas por cientos de a\xF1os en las comunidades nativas del lugar. Ser\xE1 un magn\xEDfico d\xEDa para entender la importancia de esta \xE1rea protegida de Per\xFA."
      },
      {
        day: "D\xEDa 5",
        title: "Camotado \u2013 Panteon",
        parrafo1: "Este quinto d\xEDa muy temprano, iniciamos nuestro recorrido con actividades como avistamiento de aves, pesca deportiva, observaci\xF3n de tortugas, delfines y guacamayos. Haremos peque\xF1as caminatas y paseos en canoas para explorar los peque\xF1os r\xEDos (quebradas) de la reserva."
      },
      {
        day: "D\xEDa 6",
        title: "Pante\xF3n \u2013 Camotado",
        parrafo1: "Este d\xEDa iniciamos nuestro retorno a Camotado. En el trayecto haremos paradas para observar aves, y disfrutar de la naturaleza. Al arribar a Camotado, disfrutaremos una tarde libre."
      },
      {
        day: "D\xEDa 7",
        title: "Camotado \u2013 Lagunas",
        parrafo1: "Este s\xE9ptimo d\xEDa dejaremos la reserva Pacaya Samiria y nos trasladaremos a la Comunidad Nativa de Lagunas, donde compartiremos una cena de despedida con nuestros gu\xEDas. Finalmente tendremos un merecido descanso pernoctando en un albergue de la comunidad."
      },
      {
        day: "D\xEDa 8",
        title: "Lagunas \u2013 Yurimaguas \u2013 Tarapoto",
        parrafo1: "A las 4 AM, dejamos Lagunas para trasladarnos a Yurimaguas por barco. Al arribar a la ciudad nos esperar\xE1 una movilidad para trasladarnos a la ciudad de Tarapoto."
      }
    ]
  };
  const relatedTours = [
    {
      image: "/../tours/pacayasamiria4.avif",
      title: "Tours Reserva Nacional Pacaya Samiria (6D/5N) - Desde Yurimaguas",
      duration: "6 d\xEDas | 5 noches",
      link: "../tours-pacaya-samiria/tour-6-dias-5-noches"
    },
    {
      image: "/../tours/toursdiarioscreayquicticocha.avif",
      title: "CREA y Quiticocha",
      duration: "Tours Diarios",
      link: "../tours-diarios/crea-y-quiticocha"
    },
    {
      image: "/../tours/toursdiariosmariposario.avif",
      title: "Mariposario",
      duration: "Tours Diarios",
      link: "../tours-diarios/mariposario"
    }
  ];
  const accordionItems = [
    {
      title: "Nuestro Servicio Incluye",
      content: [
        "Transporte:",
        "Transporte terrestre desde y hasta zonas de embarque.",
        "Navegaciones.",
        "5 noches de alojamiento.",
        "Alimentaci\xF3n:",
        "Desayuno.",
        "Almuerzo.",
        "Cena.",
        "Equipo de campamento.",
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
        "Alimentaci\xF3n extra.",
        "Seguro de viaje.",
        "Propinas (opcional)."
      ]
    },
    {
      title: "Sugerimos llevar con usted:",
      content: [
        "Mochila de 40 a 60 litros para llevar las cosas que utilizar\xE1s durante el tour.",
        "Mochila de 25 litros para las caminatas cortas que realizar\xE1s durante el d\xEDa.",
        "Camisetas o camisas manga larga.",
        "Pantal\xF3n y chaqueta impermeables.",
        "Poncho de lluvia.",
        "Zapatos de trekking.",
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
</a> </div> <img${addAttribute(tour.image, "src")}${addAttribute(tour.title, "alt")} class="w-full h-60 sm:h-80 object-cover rounded-xl shadow-md"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between"> <h1 class="text-xl sm:text-3xl font-bold text-gray-900 leading-tight"> ${tour.title} </h1> <a href="https://wa.link/10ctyy" class="mt-4 sm:mt-0 w-full sm:w-auto text-center bg-green-950 hover:bg-orange-600 transition-all py-2 px-4 text-white font-medium rounded-md" target="_blank">
Consultar ahora
<i class="fa-brands fa-whatsapp"></i> </a> </div> <div class="space-y-4"> <h3 class="text-xl sm:text-2xl font-bold text-green-950 underline">
Parque Nacional Pacaya Samiria, Loreto, Perú
</h3> <p class="text-gray-700 leading-relaxed">
El “Parque Nacional de Pacaya Samiria” es conocido por ser una de las zonas del país de mayor belleza natural. El objetivo de este Tour en Pacaya-Samiria es que descubras la espectacular diversidad natural de flora y fauna, la magnífica vida silvestre y la historia de la región. Será una experiencia inolvidable en un viaje de doce horas navegando por el Río Amazonas, que harán recordar las aventuras de los primeros navegantes europeos por la selva amazónica, o las páginas del Amor en los Tiempos del Cólera de García Márquez. Este viaje nos llevará a la comunidad de Lagunas, ubicado justo al lado del Parque Nacional de más de 2000 km2. Durante el viaje y al llegar a la reserva, avistaremos monos fraile, gran número de aves y animales, también plantas de belleza peculiar. Nuestro viaje también es cultura, escucharás leyendas de viejos cazadores junto a fogatas, verás, disfrutarás y comprenderás nuestras danzas milenarias y conocerás la historia de nuestros pueblos amazónicos. Si buscas conocer la selva de verdad, ¡este tour es para ti!
</p> </div> <div class="space-y-4"> ${tour.itinerary.map((item) => renderTemplate`<div class="bg-gray-50 p-2 rounded-lg shadow-sm"> <h2 class="text-lg sm:text-xl font-bold text-green-950 underline mb-3"> ${item.day}. ${item.title} </h2> <div class="space-y-4"> ${[
    item.parrafo1
  ].filter((parrafo) => parrafo).map((parrafo) => renderTemplate`<p class="text-gray-700 leading-relaxed">${parrafo}</p>`)} </div> </div>`)} </div> <div class="space-y-2 py-10"> <p class="text-green-950 leading-relaxed font-semibold text-left uppercase">
¡BUEN VIAJE…DISFRÚTELO!
</p> <p class="text-gray-700 leading-relaxed text-left">
El orden de algunas actividades puede variar debido a condiciones climáticas o situaciones operacionales.
</p> </div> <div class="space-y-4"> ${accordionItems.map((item) => renderTemplate`<details class="bg-blue-50 rounded-lg shadow-sm p-4"> <summary class="text-lg sm:text-xl font-semibold cursor-pointer text-green-950"> ${item.title} </summary> <ul class="mt-2 space-y-1 text-gray-700"> ${item.content.map((text) => renderTemplate`<li class="ml-4 list-disc">${text}</li>`)} </ul> </details>`)} </div> <div class="flex flex-col"> <a href="https://wa.link/10ctyy" class="mt-2 w-full text-center bg-green-950 hover:bg-orange-600 transition-all py-2 px-4 text-white font-medium rounded-md" target="_blank">
Consultar ahora
<i class="fa-brands fa-whatsapp fa-xl"></i> </a> </div> </div> <aside class="lg:col-span-1 order-last lg:order-none sticky top-10 space-y-6 self-start"> <h3 class="text-xl sm:text-2xl text-center font-bold text-gray-900">
También te <br> puede interesar
</h3> <div class="max-h-[670px] overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-green-100"> ${relatedTours.map((tour2) => renderTemplate`<a${addAttribute(tour2.link, "href")} class="block border rounded-xl overflow-hidden shadow-md transition-transform transform hover:shadow-lg bg-white"> <img${addAttribute(tour2.image, "src")}${addAttribute(tour2.title, "alt")} class="w-full h-32 sm:h-40 object-cover"> <div class="bg-green-950 text-white text-sm flex justify-center gap-2 py-2"> <span class="flex items-center"> <i class="fa-solid fa-calendar-check mr-2"></i> ${tour2.duration} </span> </div> <div class="p-4 text-center"> <h4 class="text-lg font-semibold text-gray-900">${tour2.title}</h4> <span class="mt-3 inline-block bg-green-950 hover:bg-green-800 transition-all py-2 px-4 text-white font-medium rounded-md">
Ver itinerario
</span> </div> </a>`)} </div> </aside> </section>`;
}, "C:/astro/iquitos-expedition/src/components/PacayaSamiria/PacayaSamiria8D.astro", void 0);

const $$Tour8Dias7Noches = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "BreadcrumbPacaya", $$BreadcrumbPacaya, {})} ${renderComponent($$result2, "PacayaSamiria8D", $$PacayaSamiria8D, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/astro/iquitos-expedition/src/pages/paquetes/tours-pacaya-samiria/tour-8-dias-7-noches.astro", void 0);

const $$file = "C:/astro/iquitos-expedition/src/pages/paquetes/tours-pacaya-samiria/tour-8-dias-7-noches.astro";
const $$url = "/paquetes/tours-pacaya-samiria/tour-8-dias-7-noches";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Tour8Dias7Noches,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
