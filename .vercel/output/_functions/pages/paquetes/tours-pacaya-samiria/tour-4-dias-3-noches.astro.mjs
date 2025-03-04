import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent } from '../../../chunks/astro/server_B02qANs2.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../../../chunks/Layout_BCuCHOvd.mjs';
import { $ as $$BreadcrumbPacaya } from '../../../chunks/BreadcrumbPacaya_DL8lk2aV.mjs';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const $$PacayaSamiria4D = createComponent(($$result, $$props, $$slots) => {
  const tour = {
    image: "/../tours/pacayasamiriadesdeiquitos4d3n.avif",
    title: "Pacaya Samiria (4D/3N) - Desde Iquitos.",
    itinerary: [
      {
        day: "D\xEDa 1",
        title: "Iquitos / Nauta/ Comunidad Arequipa (Reserva Nacional Pacaya Samiria)",
        parrafo1: "Recepci\xF3n en el aeropuerto a cargo de nuestro personal o recojo en el hotel. Breve orientaci\xF3n de la ciudad de Iquitos, observando los principales lugares tur\xEDsticos de esta representativa ciudad del Oriente Peruano cuya fundaci\xF3n se remonta al Siglo XIX.",
        parrafo2: "Traslado por v\xEDa terrestre a la Ciudad de Nauta a unos 100 Km. de distancia, pintoresca ciudad ubicada a orillas del r\xEDo Mara\xF1\xF3n donde despu\xE9s de disfrutar de un delicioso almuerzo abordar\xE1n el bote que les trasladar\xE1 hacia la comunidad de Arequipa; en el trayecto, nuestra primera parada ser\xE1 Santo Domingo, peque\xF1a comunidad y primer puesto de control al ingresar a la Reserva Nacional Pacaya Samiria.",
        parrafo3: "Ya en la zona de Arequipa tendremos nuestro primer contacto con la naturaleza y la gente que habita en esta parte de la Reserva. Instalaci\xF3n de nuestro campamento, para despu\xE9s realizar una peque\xF1a excursi\xF3n nocturna por la zona para observar variedad de aves nocturnas y lagartos. Cena y Pernocte."
      },
      {
        day: "D\xEDa 2",
        title: "Excursi\xF3n en la zona de Arequipa (Reserva Nacional Pacaya Samiria)",
        parrafo1: "Al despertar con las primeras luces de la ma\xF1ana, podr\xE1 observar a las aves que salen de sus nidos en busca de sus respectivos alimentos y deleitarse con el trinar de las mismas. Despu\xE9s de disfrutar un fortificante desayuno, iniciamos nuestra primera excursi\xF3n explorando la laguna de Shansho Cocha, que se localiza a una hora y media aproximada de camino, en medio de la exuberante selva, en el trayecto se podr\xE1 observar \xE1rboles gigantes como la lupuna (Ceiba pentandra), capirona, capinuri (Helicostylis scabra), dignos representantes de la flora. Tambi\xE9n aves como el tuc\xE1n (Pteroglossus sp.), guacamayo rojo (Ara macao), guacamayo amarillo (Ara ararauna), garzas blancas grandes (Egreta alba), mart\xEDn pescador (Chloroceryle sp.) y disfrutar de los hermosos paisajes que nos brinde la naturaleza.",
        parrafo2: "Retorno al campamento, que esta vez ser\xE1 a orillas del R\xEDo Yanayacu. Almuerzo.",
        parrafo3: "Despu\xE9s de disfrutar un determinado tiempo de relajo, continuamos con nuestra excursi\xF3n por la tarde visitando la quebrada de Yanayaquillo, con el prop\xF3sito de observar variedades de monos, como frailes (Saimir\xED boliviensis), los osos perezosos (Bradypus variegatus), y disfrutar de los paisajes. Retorno al campamento. Cena y Pernocte."
      },
      {
        day: "D\xEDa 3",
        title: "Excursi\xF3n Quebrada Jap\xF3n - Laguna de Yanta (Reserva Nacional Pacaya Samiria)",
        parrafo1: "Desayuno. Excursi\xF3n por las lagunas cercanas donde es posible observar variedades de aves y las especies ictiol\xF3gicas como las pira\xF1as (Serrasalmus sp.), s\xE1balos (Brycon sp.), sardinas (Triportheus sp.) que nos permitir\xE1 realizar nuestro tour de pesca durante la ma\xF1ana.",
        parrafo2: "Retorno al campamento muy cerca a la Quebrada Jap\xF3n. Almuerzo.",
        parrafo3: "Durante la tarde y con el caer del sol, d\xE1ndole el \xFAltimo adi\xF3s a nuestra permanencia en la reserva, realizaremos paseos en canoas, tomas fotogr\xE1ficas de las aves que retornan a sus nidos al llegar la noche. Cena y pernocte."
      },
      {
        day: "D\xEDa 4",
        title: "Reserva Nacional Pacaya Samiria / Nauta / Iquitos",
        parrafo1: "Desayuno. Retorno a la ciudad de Nauta. Almuerzo. V\xEDa terrestre traslado a la ciudad de Iquitos. A hora oportuna traslado al hotel seleccionado o aeropuerto para abordar su vuelo de retorno."
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
      title: "Descubre las Maravillas de la Amazon\xEDa (4D/3N)",
      duration: "4 d\xEDas | 3 noches",
      link: "../tours-heliconia-lodge/descubre-las-maravillas-de-la-amazonia-4-dias-3-noches"
    },
    {
      image: "/../tours/explorandoamazonas.avif",
      title: "Explorando el Amazonas (3D/2N)",
      duration: "4 d\xEDas | 3 noches",
      link: "../tours-irapay-amazon/explorando-el-amazonas-4-dias-3-noches"
    }
  ];
  const accordionItems = [
    {
      title: "Nuestro Servicio Incluye",
      content: [
        "Traslados aeropuerto / hotel / Pacaya Samiria / hotel / aeropuerto (terrestre y fluvial).",
        "Entrada a la Reserva Nacional Pacaya-Samiria.",
        "04 noches en campamentos itinerantes.",
        "Todas las comidas.",
        "Excursiones como se detallan en el programa.",
        "Gu\xEDa en ingl\xE9s o espa\xF1ol."
      ]
    },
    {
      title: "Nuestro Servicio No Incluye",
      content: [
        "Tickets a\xE9reos.",
        "Impuestos en aeropuerto.",
        "Propinas.",
        "Lavander\xEDa.",
        "Gaseosas y bebidas alcoh\xF3licas."
      ]
    },
    {
      title: "Recomendaciones",
      content: [
        "\xBFQu\xE9 traer a la selva? tenga en cuenta traer lo siguiente:",
        "Pantalones y camisas de algod\xF3n livianas de manga larga.",
        "Bermudas o shorts delgados.",
        "Polos de algod\xF3n o camisas de manga corta.",
        "Bloqueador de sol.",
        "Gorra con visera o sombrero liviano.",
        "C\xE1mara y/o filmadora con bater\xEDa recargable.",
        "Loci\xF3n o crema repelente para mosquitos.",
        "Poncho o chaqueta impermeable liviana.",
        "Zapatillas o botines c\xF3modos para caminar.",
        "Linterna personal.",
        "Ropa de ba\xF1o.",
        "Binoculares son opcionales."
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 my-16"> <div class="lg:col-span-2 space-y-4"> <div class="flex items-center gap-2 mb-4"> <a href="#" onclick="history.back()" class="flex items-center text-green-950 hover:text-orange-600 transition-all font-medium"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path> </svg>
Volver
</a> </div> <img${addAttribute(tour.image, "src")}${addAttribute(tour.title, "alt")} class="w-full h-60 sm:h-80 object-cover rounded-xl shadow-md"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between"> <h1 class="text-xl sm:text-3xl font-bold text-gray-900 leading-tight"> ${tour.title} </h1> <a href="https://wa.link/yin658" class="mt-4 sm:mt-0 w-full sm:w-auto text-center bg-green-950 hover:bg-orange-600 transition-all py-2 px-4 text-white font-medium rounded-md" target="_blank">
Consultar ahora
<i class="fa-brands fa-whatsapp"></i> </a> </div> <div class="space-y-4"> <div class="bg-white p-2"> <p class="text-gray-700 leading-relaxed text-justify mb-3">
Experiencia inolvidable en una de las áreas más ricas en biodiversidad que aún existen en el planeta. No solamente tendrá la oportunidad de acercarse a las especies más representativas de la Amazonía, sino que penetrará en sus dominios. Conocerá también cómo la población ribereña que habita en el perímetro de la reserva lleva a cabo programas de conservación y desarrollo sostenible para mantener inalterable uno de los últimos grandes bosques tropicales inundables.
</p> </div> </div> <div class="space-y-4"> ${tour.itinerary.map((item) => renderTemplate`<div class="bg-gray-50 p-2 rounded-lg shadow-sm"> <h2 class="text-lg sm:text-xl font-bold text-green-950 underline mb-3"> ${item.day}. ${item.title} </h2> <div class="space-y-4"> ${[
    item.parrafo1,
    item.parrafo2,
    item.parrafo3
  ].filter((parrafo) => parrafo).map((parrafo) => renderTemplate`<p class="text-gray-700 leading-relaxed">${parrafo}</p>`)} </div> </div>`)} </div> <div class="space-y-2 py-10"> <p class="text-green-950 leading-relaxed font-semibold text-left uppercase">
¡BUEN VIAJE…DISFRÚTELO!
</p> <p class="text-gray-700 leading-relaxed text-left">
El orden de algunas actividades puede variar debido a condiciones climáticas o situaciones operacionales.
</p> </div> <div class="space-y-4"> ${accordionItems.map((item) => renderTemplate`<details class="bg-blue-50 rounded-lg shadow-sm p-4"> <summary class="text-lg sm:text-xl font-semibold cursor-pointer text-green-950"> ${item.title} </summary> <ul class="mt-2 space-y-1 text-gray-700"> ${item.content.map((text) => renderTemplate`<li class="ml-4 list-disc">${text}</li>`)} </ul> </details>`)} </div> <div class="space-y-4 bg-yellow-50 p-4 rounded-lg shadow-md border-l-4 border-yellow-400"> <h3 class="text-lg font-bold text-yellow-900">Recomendación para elegir horario de vuelos</h3> <p class="text-gray-700 leading-relaxed"> <strong>Primeros vuelos de llegada:</strong> Lima - Iquitos (Tomar vuelos que lleguen antes de las 09:00 am)
</p> <p class="text-gray-700 leading-relaxed"> <strong>Últimos vuelos de salida:</strong> Iquitos - Lima (Tomar vuelos que salgan después de las 18:00 hrs)
</p> <p class="text-gray-700 leading-relaxed">
De llegar o salir en otro horario, el programa no podrá realizarse adecuadamente.
</p> </div> <div class="flex flex-col"> <a href="https://wa.link/yin658" class="mt-2 w-full text-center bg-green-950 hover:bg-orange-600 transition-all py-2 px-4 text-white font-medium rounded-md" target="_blank">
Consultar ahora
<i class="fa-brands fa-whatsapp fa-xl"></i> </a> </div> </div> <aside class="lg:col-span-1 order-last lg:order-none sticky top-10 space-y-6 self-start"> <h3 class="text-xl sm:text-2xl text-center font-bold text-gray-900">
También te <br> puede interesar
</h3> <div class="max-h-[670px] overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-green-100"> ${relatedTours.map((tour2) => renderTemplate`<a${addAttribute(tour2.link, "href")} class="block border rounded-xl overflow-hidden shadow-md transition-transform transform hover:shadow-lg bg-white"> <img${addAttribute(tour2.image, "src")}${addAttribute(tour2.title, "alt")} class="w-full h-32 sm:h-40 object-cover"> <div class="bg-green-950 text-white text-sm flex justify-center gap-2 py-2"> <span class="flex items-center"> <i class="fa-solid fa-calendar-check mr-2"></i> ${tour2.duration} </span> </div> <div class="p-4 text-center"> <h4 class="text-lg font-semibold text-gray-900">${tour2.title}</h4> <span class="mt-3 inline-block bg-green-950 hover:bg-green-800 transition-all py-2 px-4 text-white font-medium rounded-md">
Ver itinerario
</span> </div> </a>`)} </div> </aside> </section>`;
}, "C:/astro/iquitos-expedition/src/components/PacayaSamiria/PacayaSamiria4D.astro", void 0);

const $$Tour4Dias3Noches = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "BreadcrumbPacaya", $$BreadcrumbPacaya, {})} ${renderComponent($$result2, "PacayaSamiria4D", $$PacayaSamiria4D, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/astro/iquitos-expedition/src/pages/paquetes/tours-pacaya-samiria/tour-4-dias-3-noches.astro", void 0);

const $$file = "C:/astro/iquitos-expedition/src/pages/paquetes/tours-pacaya-samiria/tour-4-dias-3-noches.astro";
const $$url = "/paquetes/tours-pacaya-samiria/tour-4-dias-3-noches";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Tour4Dias3Noches,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
