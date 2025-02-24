import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent } from '../../../chunks/astro/server_CEj8L07F.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../../../chunks/Layout_BXMIkbsN.mjs';
import { $ as $$BreadcrumbCumaceba } from '../../../chunks/BreadcrumbCumaceba_2MWYdiVQ.mjs';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const $$CumacebaLodge4D = createComponent(($$result, $$props, $$slots) => {
  const tour = {
    image: "/../tours/cumaceba4d3n.avif",
    title: "Cumaceba Lodge (4D/3N)",
    itinerary: [
      {
        day: "D\xEDa 1",
        title: "Traslado del Aeropuerto u Hotel",
        parrafo1: "Traslado del aeropuerto u hotel. Caminata por el centro de la ciudad, conociendo la iglesia matriz, la casa de hierro, el malec\xF3n Maldonado y las casas hist\xF3ricas de la \xE9poca del caucho. Traslado al puerto fluvial para abordar el bote motor fuera de borda.",
        parrafo2: "Navegaremos el r\xEDo Itaya durante 15 minutos para luego ingresar al r\xEDo m\xE1s largo y caudaloso del mundo, el Amazonas. Se proporcionar\xE1 informaci\xF3n sobre el Amazonas y buscaremos delfines grises y bufeos rosados. Navegaremos por el Amazonas hasta el Curaka Expeditions, donde seremos recibidos con un refresco de frutas de la estaci\xF3n. Se brindar\xE1 informaci\xF3n general y se realizar\xE1 la asignaci\xF3n de bungalows privados.",
        parrafo3: "Almuerzo: plato t\xEDpico Juane. Por la tarde, caminata por la selva, conociendo la flora, fauna y la biodiversidad del \xE1rea.",
        parrafo4: "Caminata nocturna por la selva, escuchando la variedad de sonidos emitidos por insectos, batracios, aves, entre otros, y excursi\xF3n en canoa, seg\xFAn la estaci\xF3n.",
        parrafo5: "Cena: historias selv\xE1ticas narradas por el gu\xEDa. Noche en el albergue."
      },
      {
        day: "D\xEDa 2",
        title: "Avistaje de Aves en su H\xE1bitat, Caminando o en Canoa",
        parrafo1: "Avistaje de aves en su h\xE1bitat, caminando o en canoa. Desayuno. Excursi\xF3n para visitar a un morador ribere\xF1o, donde apreciaremos boas constrictoras no venenosas, osos perezosos y tortugas, entre otros.",
        parrafo2: "Tambi\xE9n conoceremos la manera de extraer el jugo de la ca\xF1a de az\xFAcar de forma artesanal, con degustaci\xF3n del jugo y sus derivados, como el ron de ca\xF1a y la melaza.",
        parrafo3: "Retorno al albergue. Almuerzo: plato t\xEDpico de pescado. Por la tarde, visita al pueblo de la ribera \u201CGALLITO\u201D para conocer parte de sus actividades diarias. Seg\xFAn las condiciones climatol\xF3gicas, observaremos una maravillosa puesta de sol.",
        parrafo4: "Cena. Noche en el albergue."
      },
      {
        day: "D\xEDa 3",
        title: "Pesca a Orillas del R\xEDo Amazonas: Pez Gato y Pira\xF1as, entre Otros",
        parrafo1: "Desayuno. Pesca a orillas del r\xEDo Amazonas: pez gato, pira\xF1as, entre otros. Observaci\xF3n de la Victoria Regia, la planta acu\xE1tica m\xE1s grande del mundo. Retorno al albergue y almuerzo t\xEDpico de Patarashca. Momento de relax en el \xE1rea de hamacas y/o piscina.",
        parrafo2: "Por la tarde, recorreremos el contorno del \xE1rea, conociendo plantas y \xE1rboles cuyos frutos son aprovechados por los ribere\xF1os por sus propiedades medicinales. Apreciamos el hist\xF3rico \xE1rbol del caucho o balata, el cedro y la voluptuosa lupuna.",
        parrafo3: "Cena. Noche en el albergue."
      },
      {
        day: "D\xEDa 4",
        title: "Excursi\xF3n en Canoa a Orillas del Amazonas, Observando Aves e Iguanas",
        parrafo1: "Desayuno. Excursi\xF3n en canoa a orillas del Amazonas, observando aves, iguanas, etc. Momento libre para leer o simplemente descansar en nuestra apacible casa de hamacas. Tiempo especial para tomar fotograf\xEDas.",
        parrafo2: "Hora oportuna para el almuerzo t\xEDpico: cecina con tacacho, y partida con destino a Iquitos. En el trayecto, visitaremos la comunidad nativa Bora Bora, donde conoceremos sus costumbres, dialecto, vestimenta y danzas t\xEDpicas. Se recomienda llevar objetos para intercambiar con las artesan\xEDas hechas a mano.",
        parrafo3: "Arribo a la ciudad de Iquitos. Traslado al aeropuerto u hotel. Fin de los servicios."
      }
    ]
  };
  const relatedTours = [
    {
      image: "/../tours/maravillasdelaamazonia.avif",
      title: "Descubre Las Maravillas de la Amazon\xEDa (4D/3N)",
      duration: "4 d\xEDas | 3 noches",
      link: "../tours-heliconia-lodge/descubre-las-maravillas-de-la-amazonia-4-dias-3-noches"
    },
    {
      image: "/../tours/explorandoamazonas.avif",
      title: "Explorando el Amazonas (4D/3N)",
      duration: "4 d\xEDas | 3 noches",
      link: "../tours-irapay-amazon/explorando-el-amazonas-4-dias-3-noches"
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
      title: "El Programa Incluye",
      content: [
        "02 noches de alojamiento en Heliconia Amazon River Lodge con alimentaci\xF3n completa (02 desayunos, 03 almuerzos, 02 cenas).",
        "Visita a la Isla de Monos.",
        "Caminata por la selva.",
        "Paseo nocturno en bote.",
        "B\xFAsqueda de delfines rosados.",
        "Tour de observaci\xF3n de aves.",
        "Tour de pesca.",
        "Visita a un trapiche artesanal.",
        "Caminata nocturna en la selva.",
        "Observaci\xF3n de las Victoria Regias.",
        "Traslados."
      ]
    },
    {
      title: "El Programa No Incluye",
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
</a> </div> <img${addAttribute(tour.image, "src")}${addAttribute(tour.title, "alt")} class="w-full h-60 sm:h-80 object-cover rounded-xl shadow-md"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between"> <h1 class="text-xl sm:text-3xl font-bold text-gray-900 leading-tight"> ${tour.title} </h1> <a href="https://wa.link/evokxz" class="mt-4 sm:mt-0 w-full sm:w-auto text-center bg-green-950 hover:bg-orange-600 transition-all py-2 px-4 text-white font-medium rounded-md" target="_blank">
Consultar ahora
<i class="fa-brands fa-whatsapp"></i> </a> </div> <div class="space-y-4"> ${tour.itinerary.map((item) => renderTemplate`<div class="bg-gray-50 p-2 rounded-lg shadow-sm"> <h2 class="text-lg sm:text-xl font-bold text-green-950 underline mb-3"> ${item.day}. ${item.title} </h2> <div class="space-y-4"> ${[
    item.parrafo1,
    item.parrafo2,
    item.parrafo3,
    item.parrafo4,
    item.parrafo5
  ].filter((parrafo) => parrafo).map((parrafo) => renderTemplate`<p class="text-gray-700 leading-relaxed">${parrafo}</p>`)} </div> </div>`)} </div> <div class="space-y-4"> ${accordionItems.map((item) => renderTemplate`<details class="bg-blue-50 rounded-lg shadow-sm p-4"> <summary class="text-lg sm:text-xl font-semibold cursor-pointer text-green-950"> ${item.title} </summary> <ul class="mt-2 space-y-1 text-gray-700"> ${item.content.map((text) => renderTemplate`<li class="ml-4 list-disc">${text}</li>`)} </ul> </details>`)} </div> <div class="flex flex-col"> <a href="https://wa.link/evokxz" class="mt-2 w-full text-center bg-green-950 hover:bg-orange-600 transition-all py-2 px-4 text-white font-medium rounded-md" target="_blank">
Consultar ahora
<i class="fa-brands fa-whatsapp fa-xl"></i> </a> </div> </div> <aside class="lg:col-span-1 order-last lg:order-none sticky top-10 space-y-6 self-start"> <h3 class="text-xl sm:text-2xl text-center font-bold text-gray-900">
También te <br> puede interesar
</h3> <div class="max-h-[670px] overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-green-100"> ${relatedTours.map((tour2) => renderTemplate`<a${addAttribute(tour2.link, "href")} class="block border rounded-xl overflow-hidden shadow-md transition-transform transform hover:shadow-lg bg-white"> <img${addAttribute(tour2.image, "src")}${addAttribute(tour2.title, "alt")} class="w-full h-32 sm:h-40 object-cover"> <div class="bg-green-950 text-white text-sm flex justify-center gap-2 py-2"> <span class="flex items-center"> <i class="fa-solid fa-calendar-check mr-2"></i> ${tour2.duration} </span> </div> <div class="p-4 text-center"> <h4 class="text-lg font-semibold text-gray-900">${tour2.title}</h4> <span class="mt-3 inline-block bg-green-950 hover:bg-green-800 transition-all py-2 px-4 text-white font-medium rounded-md">
Ver itinerario
</span> </div> </a>`)} </div> </aside> </section>`;
}, "C:/astro/iquitos-expedition/src/components/CumacebaLodges/CumacebaLodge4D.astro", void 0);

const $$Tour4Dias3Noches = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "BreadcrumbCumaceba", $$BreadcrumbCumaceba, {})} ${renderComponent($$result2, "CumacebaLodge4D", $$CumacebaLodge4D, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/astro/iquitos-expedition/src/pages/paquetes/tours-cumaceba-lodge/tour-4-dias-3-noches.astro", void 0);

const $$file = "C:/astro/iquitos-expedition/src/pages/paquetes/tours-cumaceba-lodge/tour-4-dias-3-noches.astro";
const $$url = "/paquetes/tours-cumaceba-lodge/tour-4-dias-3-noches";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Tour4Dias3Noches,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
