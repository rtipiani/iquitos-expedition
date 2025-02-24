import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent } from '../../../chunks/astro/server_CEj8L07F.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../../../chunks/Layout_BXMIkbsN.mjs';
import { $ as $$BreadcrumbIrapay } from '../../../chunks/BreadcrumbIrapay_D7Uy8Wpf.mjs';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const $$ExplorandoAmazonas = createComponent(($$result, $$props, $$slots) => {
  const tour = {
    image: "/../tours/irapay4d3n.avif",
    title: "Explorando el Amazonas (4D/3N)",
    itinerary: [
      {
        day: "D\xEDa 1",
        title: "Recojo del aeropuerto Irapay Amazon Lodge / Tour los Boras",
        parrafo1: "Personal de Iquitos Expedition, estar\xE1 esperando en el Parqueo del Aeropuerto de Iquitos, para decepcionarlo, y trasladarlo al Puerto de Nanay por el tiempo de 40 minutos, donde nuestro Bote R\xE1pido, lo trasladar\xE1 a nuestro Lodge de Lujo Irapay Amazon Lodge. Por el Rio Nanay y Momon, por el tiempo de 40 minutos por medio la Selva, observando paisajes impresionantes, llegada y acomodaci\xF3n en sus respectivas caba\xF1as. Almuerzo libre por el pasajero.",
        parrafo2: "Nuestro Tour Inicia a las 2:30 Pm. Nuestro Gu\xEDa pasara por ustedes, para llevarlos a visitar la comunidad nativa los Boras, donde podremos danzar y disfrutar de sus costumbres ancestrales, tambi\xE9n podremos comprar artesan\xEDa y cosas del Lugar. Regreso al Lodge. Cena libre por el Pasajero."
      },
      {
        day: "D\xEDa 2",
        title: "Tour Isla de los Monos / Fundo Pedrito los Yaguas",
        parrafo1: "Desayuno en el Lodge.",
        parrafo2: "Inicio a nuestra aventura a las 9:00 Am. Navegando en bote t\xEDpico y observando el primer atractivo natural, la uni\xF3n de los r\xEDos Nanay y Amazonas. Continuamos el viaje por el \u201CRio Amazonas\u201D, hasta llegar a la \u201CISLA DE LOS MONOS\u201D donde observaremos variedades de primates libres en su habitad, hora indicada almuerzo en Restaurante Flotante a base de pescado, ensalada de chonta, frutas de la selva, refresco. Al retorno visitaremos la comunidad de nativos Yagua para conocer su historia y costumbres.",
        parrafo3: "No pod\xEDa faltar la gran experiencia de conocer animales de la selva, visitaremos el centro de rescate Fundo Pedrito, toma fotogr\xE1fica a la impresionante Anaconda. Ya retornando por el r\xEDo podremos apreciar el hermoso Atardecer Amaz\xF3nico sobre el Rio Amazonas (postales de lujo). Retorno al Lodge."
      },
      {
        day: "D\xEDa 3",
        title: "Tour Caminata por la Selva / Tour Nocturno",
        parrafo1: "Desayuno en el Hotel.",
        parrafo2: "9:30 Am. Partiremos para nuestra primera caminata bot\xE1nica por selva donde observaremos plantas medicinales, arboles gigantes, la palmera Irapay, y disfrutaremos de lianas para colgarnos, regreso al Lodge Almuerzo en Maloca con vista al Rio Momom, libre por el pasajero. 6:30 Pm. Empezamos nuestro tour Nocturno, Viajaremos por el Momon, por el tiempo de una hora rio arriba, donde podremos disfrutar de la Naturaleza, podremos hacer una caminata por medio la selva, para observar animales nocturnos, escuchar el silbido de la Anaconda, y el canto de las Aves nocturnas. Despu\xE9s de vivir una gran aventura, volvemos a Lodge."
      },
      {
        day: "D\xEDa 4",
        title: "Tour Amanecer en el Amazonas, Observaci\xF3n de delfines, Tour Serpentario / Traslado al Aeropuerto",
        parrafo1: "Salimos 5 Am. Desde el Lodge, para dirigirnos a una parte del Rio Amazonas, donde podremos Observar el Amanecer Amaz\xF3nico, disfrutaremos del lugar, observaremos delfines, Rosados y gris en su habita natural, Podremos pescar Pira\xF1as. Luego regreso a Irapay. Desayuno. Tiempo libre para disfrutar las \xE1reas del Lodge. 11.00 Am. Nos dirigiremos al serpentario, se podr\xE1 apreciar diversidad de serpientes, Boas, Anacondas y tambi\xE9n Osos Perezosos, Guacamayos, Tucanes y la Tortuga Prehist\xF3rica. Luego nos trasladamos al Frio y al Fuego, para almuerzo de despedida. Visita el centro Hist\xF3rico, fotos en la Plaza de Armas. Traslado al Aeropuerto."
      }
    ]
  };
  const relatedTours = [
    {
      image: "/../tours/cumaceba2.avif",
      title: "Cumaceba Lodge (4D/3N)",
      duration: "4 d\xEDas | 3 noches",
      link: "../tours-cumaceba-lodge/tour-4-dias-3-noches"
    },
    {
      image: "/../tours/maravillasdelaamazonia.avif",
      title: "Descubre Las Maravillas De La Amazon\xEDa (4D/3N)",
      duration: "4 d\xEDas | 3 noches",
      link: "../tours-heliconia-lodge/descubre-las-maravillas-de-la-amazonia-4-dias-3-noches"
    },
    {
      image: "/../tours/pacayasamiria2.avif",
      title: "Tours Reserva Nacional Pacaya Samiria (4D/3N) - Desde Iquitos",
      duration: "4 d\xEDas | 3 noches",
      link: "../tours-pacaya-samiria/tour-4-dias-3-noches"
    }
  ];
  const accordionItems = [
    {
      title: "Nuestro Servicio Incluye",
      content: [
        "Recojo del Aeropuerto Lodge Aeropuerto.",
        "Hotel 3 Noches en Irapay Amazon Lodge.",
        "Desayunos.",
        "Gu\xEDa Profesional.",
        "Transporte Fluvial privado.",
        "Almuerzo T\xEDpico 2 D\xEDa.",
        "Botas de Jebe.",
        "Botiqu\xEDn de Primeros Auxilios.",
        "Atenci\xF3n Personalizada Iquitos Expedition."
      ]
    },
    {
      title: "Nuestro Servicio No Incluye",
      content: [
        "Vuelos.",
        "Cenas.",
        "Bebidas.",
        "Hotel en la ciudad.",
        "Entre otros no mencionados."
      ]
    },
    {
      title: "Qu\xE9 Traer con Usted",
      content: [
        "Ropa Ligera.",
        "Chaqueta de Lluvia.",
        "Repelente.",
        "Bloqueador Solar.",
        "Camisa Mangalarga.",
        "Ropa de ba\xF1o.",
        "Sombrero o Gorra.",
        "C\xE1mara fotogr\xE1fica.",
        "Lentes de Sol.",
        "Ca\xF1a de Pescar. (Opcional)",
        "Buen \xC1nimo."
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 my-16"> <div class="lg:col-span-2 space-y-4"> <div class="flex items-center gap-2 mb-4"> <a href="#" onclick="history.back()" class="flex items-center text-green-950 hover:text-orange-600 transition-all font-medium"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path> </svg>
Volver
</a> </div> <img${addAttribute(tour.image, "src")}${addAttribute(tour.title, "alt")} class="w-full h-60 sm:h-80 object-cover rounded-xl shadow-md"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between"> <h1 class="text-xl sm:text-3xl font-bold text-gray-900 leading-tight"> ${tour.title} </h1> <a href="https://wa.link/um0ysc" class="mt-4 sm:mt-0 w-full sm:w-auto text-center bg-green-950 hover:bg-orange-600 transition-all py-2 px-4 text-white font-medium rounded-md" target="_blank">
Consultar ahora
<i class="fa-brands fa-whatsapp"></i> </a> </div> <div class="space-y-4"> ${tour.itinerary.map((item) => renderTemplate`<div class="bg-gray-50 p-2 rounded-lg shadow-sm"> <h2 class="text-lg sm:text-xl font-bold text-green-950 underline mb-3"> ${item.day}. ${item.title} </h2> <div class="space-y-4"> ${[
    item.parrafo1,
    item.parrafo2,
    item.parrafo3
  ].filter((parrafo) => parrafo).map((parrafo) => renderTemplate`<p class="text-gray-700 leading-relaxed">${parrafo}</p>`)} </div> </div>`)} </div> <div class="space-y-4"> ${accordionItems.map((item) => renderTemplate`<details class="bg-blue-50 rounded-lg shadow-sm p-4"> <summary class="text-lg sm:text-xl font-semibold cursor-pointer text-green-950"> ${item.title} </summary> <ul class="mt-2 space-y-1 text-gray-700"> ${item.content.map((text) => renderTemplate`<li class="ml-4 list-disc">${text}</li>`)} </ul> </details>`)} </div> <div class="flex flex-col"> <a href="https://wa.link/um0ysc" class="mt-2 w-full text-center bg-green-950 hover:bg-orange-600 transition-all py-2 px-4 text-white font-medium rounded-md" target="_blank">
Consultar ahora
<i class="fa-brands fa-whatsapp fa-xl"></i> </a> </div> </div> <aside class="lg:col-span-1 order-last lg:order-none sticky top-10 space-y-6 self-start"> <h3 class="text-xl sm:text-2xl text-center font-bold text-gray-900">
También te <br> puede interesar
</h3> <div class="max-h-[670px] overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-green-100"> ${relatedTours.map((tour2) => renderTemplate`<a${addAttribute(tour2.link, "href")} class="block border rounded-xl overflow-hidden shadow-md transition-transform transform hover:shadow-lg bg-white"> <img${addAttribute(tour2.image, "src")}${addAttribute(tour2.title, "alt")} class="w-full h-32 sm:h-40 object-cover"> <div class="bg-green-950 text-white text-sm flex justify-center gap-2 py-2"> <span class="flex items-center"> <i class="fa-solid fa-calendar-check mr-2"></i> ${tour2.duration} </span> </div> <div class="p-4 text-center"> <h4 class="text-lg font-semibold text-gray-900">${tour2.title}</h4> <span class="mt-3 inline-block bg-green-950 hover:bg-green-800 transition-all py-2 px-4 text-white font-medium rounded-md">
Ver itinerario
</span> </div> </a>`)} </div> </aside> </section>`;
}, "C:/astro/iquitos-expedition/src/components/IrapayAmazon/ExplorandoAmazonas.astro", void 0);

const $$ExplorandoElAmazonas4Dias3Noches = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "BreadcrumbIrapay", $$BreadcrumbIrapay, {})} ${renderComponent($$result2, "ExplorandoAmazonas", $$ExplorandoAmazonas, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/astro/iquitos-expedition/src/pages/paquetes/tours-irapay-amazon/explorando-el-amazonas-4-dias-3-noches.astro", void 0);

const $$file = "C:/astro/iquitos-expedition/src/pages/paquetes/tours-irapay-amazon/explorando-el-amazonas-4-dias-3-noches.astro";
const $$url = "/paquetes/tours-irapay-amazon/explorando-el-amazonas-4-dias-3-noches";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ExplorandoElAmazonas4Dias3Noches,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
