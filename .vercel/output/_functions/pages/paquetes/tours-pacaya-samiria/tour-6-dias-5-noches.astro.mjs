import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent } from '../../../chunks/astro/server_CEj8L07F.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../../../chunks/Layout_BXMIkbsN.mjs';
import { $ as $$BreadcrumbPacaya } from '../../../chunks/BreadcrumbPacaya_CUmI9O0A.mjs';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const $$PacayaSamiria6D = createComponent(($$result, $$props, $$slots) => {
  const tour = {
    image: "/../tours/pacayasamiriadesdeyurimaguas6d5n.avif",
    title: "Tours Reserva Nacional Pacaya Samiria (6D/5N).",
    itinerary: [
      {
        day: "D\xEDa 1",
        title: "Recojo Yurimaguas Lagunas \u2013 Posa Gloria.",
        parrafo1: "4:00 AM Personal de nuestra agencia pasara por tu hotel para trasladarle al puerto de la ciudad de Yurimaguas. En seguida iniciamos nuestro viaje de 4 horas en transporte fluvial hasta la comunidad de Lagunas, donde nos reunimos con nuestros gu\xEDas nativos. Despu\xE9s del desayuno iniciamos con nuestro traslado de 30 minutos en moto taxi hasta puerto Tibilo.",
        parrafo2: "10:00 AM Iniciamos nuestra expedici\xF3n, este d\xEDa usaremos embarcaciones artesanales para trasladarnos por 5 horas por el rio Tibilo hasta nuestra caba\xF1a que est\xE1 ubicada en el sector llamado Posa Gloria. Durante nuestras visitas haremos observaci\xF3n de aves end\xE9micas, avistamiento de cocodrilos, pesca de pira\xF1as entre otras actividades."
      },
      {
        day: "D\xEDa 2",
        title: "Posa Gloria \u2013 Panteon",
        parrafo1: "8:00 AM Despu\xE9s del desayuno, iniciamos el d\xEDa en canoa para movilizarse durante la excursi\xF3n, este d\xEDa haremos avistamiento de cocodrilos, monos,aves ex\xF3ticas de la amazonia, pesca de pira\xF1as entre otras actividades, durante la tarde tendremos un trekking de 2 horas, donde podremos conocer plantas medicinales y arboles gigantes.",
        parrafo2: "7:00 PM Iniciamos nuestra visita nocturna para avistar cocodrilos, hacer pesca de Pira\xF1as y disfrutar de leyendas de la amazonia y la paz que nos brinda la naturaleza."
      },
      {
        day: "D\xEDa 3",
        title: "Panteon \u2013 Camotal",
        parrafo1: "8:00 AM Iniciamos nuestro viaje 4 horas hasta el punto llamado Camotal, durante nuestro tour podremos apreciar delfines, lobos de rio, monos y aves acu\xE1ticas. Almuerzo en Camotal, por la tarde usted tendr\xE1 libre para que pueda nadar y disfrutar de la paz que nos brinda la naturaleza."
      },
      {
        day: "D\xEDa 4",
        title: "Pante\xF3n",
        parrafo1: "8:00 AM Iniciamos nuestra excursi\xF3n con 4 horas de Trekking en la Reserva Nacional Pacaya-Samiria, donde podr\xE1s ver gran diversidad de plantas medicinales, plantas comestibles, lianas con agua bebible y haremos actividades recreativas.",
        parrafo2: "1:00 PM Almuerzo en Comotal,en seguida tendremos paseo en canoa,pesca deportiva, por la noche haremos fogata y nuestros gu\xEDas nos contaran leyendas tradicionales de la amazonia."
      },
      {
        day: "D\xEDa 5",
        title: "Panteon \u2013 Posa Gloria",
        parrafo1: "8:00 AM Iniciamos nuestro viaje de retorno 7 horas hasta la caba\xF1a de Posa Gloria, durante nuestro retorno haremos paradas para tomas fotogr\xE1ficas, almuerzo y otras actividades. Arribo a Posa Gloria 5 pm, cena y pernocte."
      },
      {
        day: "D\xEDa 6",
        title: "Posa Gloria \u2013 Lagunas \u2013 Yurimaguas",
        parrafo1: "5:00 AM Iniciamos nuestro viaje de retorno por 6 horas hasta puerto Tibilo donde nos espera nuestra movilidad para trasladarnos a la comunidad de Lagunas. Almuerzo y traslado al puerto para nuestro viaje de retorno a la ciudad de Yurimaguas."
      }
    ]
  };
  const relatedTours = [
    {
      image: "/../tours/pacayasamiria5.avif",
      title: "Tours Pacaya Samiria (8D/7N)",
      duration: "8 d\xEDas | 7 noches",
      link: "../tours-pacaya-samiria/tour-8-dias-7-noches"
    },
    {
      image: "/../tours/iquitosdeaventura.avif",
      title: "Iquitos de Aventura (5D/4N)",
      duration: "5 d\xEDas | 4 noches",
      link: "../tours-irapay-amazon/iquitos-de-aventura-5-dias-4-noches"
    },
    {
      image: "/../tours/culturayaventurasenlaselva.avif",
      title: "Cultura y Aventura en la Selva (5D/4N)",
      duration: "5 d\xEDas | 4 noches",
      link: "../tours-heliconia-lodge/cultura-y-aventuras-en-la-selva-5-dias-4-noches"
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
</a> </div> <img${addAttribute(tour.image, "src")}${addAttribute(tour.title, "alt")} class="w-full h-60 sm:h-80 object-cover rounded-xl shadow-md"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between"> <h1 class="text-xl sm:text-3xl font-bold text-gray-900 leading-tight"> ${tour.title} </h1> <a href="https://wa.link/8sntza" class="mt-4 sm:mt-0 w-full sm:w-auto text-center bg-green-950 hover:bg-orange-600 transition-all py-2 px-4 text-white font-medium rounded-md" target="_blank">
Consultar ahora
<i class="fa-brands fa-whatsapp"></i> </a> </div> <div class="space-y-4"> <h2 class="text-xl sm:text-2xl font-bold text-green-950 underline">
Reserva Nacional Pacaya Samiria, Loreto, Perú
</h2> <p class="text-gray-700 leading-relaxed">
La Reserva Nacional Pacaya Samiria es conocida por ser una de las zonas del país de mayor belleza natural. 
                El objetivo de este Tour a Pacaya-Samiria es que descubras la espectacular diversidad natural de flora y fauna, 
                la magnífica vida silvestre y la historia de la región. Si buscas conocer la selva de verdad, ¡este tour es para ti!
</p> </div> <div class="space-y-4"> ${tour.itinerary.map((item) => renderTemplate`<div class="bg-gray-50 p-2 rounded-lg shadow-sm"> <h2 class="text-lg sm:text-xl font-bold text-green-950 underline mb-3"> ${item.day}. ${item.title} </h2> <div class="space-y-4"> ${[
    item.parrafo1,
    item.parrafo2
  ].filter((parrafo) => parrafo).map((parrafo) => renderTemplate`<p class="text-gray-700 leading-relaxed">${parrafo}</p>`)} </div> </div>`)} </div> <div class="space-y-2 py-10"> <p class="text-green-950 leading-relaxed font-semibold text-left uppercase">
¡BUEN VIAJE…DISFRÚTELO!
</p> <p class="text-gray-700 leading-relaxed text-left">
El orden de algunas actividades puede variar debido a condiciones climáticas o situaciones operacionales.
</p> </div> <div class="space-y-4"> ${accordionItems.map((item) => renderTemplate`<details class="bg-blue-50 rounded-lg shadow-sm p-4"> <summary class="text-lg sm:text-xl font-semibold cursor-pointer text-green-950"> ${item.title} </summary> <ul class="mt-2 space-y-1 text-gray-700"> ${item.content.map((text) => renderTemplate`<li class="ml-4 list-disc">${text}</li>`)} </ul> </details>`)} </div> <div class="flex flex-col"> <a href="https://wa.link/8sntza" class="mt-2 w-full text-center bg-green-950 hover:bg-orange-600 transition-all py-2 px-4 text-white font-medium rounded-md" target="_blank">
Consultar ahora
<i class="fa-brands fa-whatsapp fa-xl"></i> </a> </div> </div> <aside class="lg:col-span-1 order-last lg:order-none sticky top-10 space-y-6 self-start"> <h3 class="text-xl sm:text-2xl text-center font-bold text-gray-900">
También te <br> puede interesar
</h3> <div class="max-h-[670px] overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-green-100"> ${relatedTours.map((tour2) => renderTemplate`<a${addAttribute(tour2.link, "href")} class="block border rounded-xl overflow-hidden shadow-md transition-transform transform hover:shadow-lg bg-white"> <img${addAttribute(tour2.image, "src")}${addAttribute(tour2.title, "alt")} class="w-full h-32 sm:h-40 object-cover"> <div class="bg-green-950 text-white text-sm flex justify-center gap-2 py-2"> <span class="flex items-center"> <i class="fa-solid fa-calendar-check mr-2"></i> ${tour2.duration} </span> </div> <div class="p-4 text-center"> <h4 class="text-lg font-semibold text-gray-900">${tour2.title}</h4> <span class="mt-3 inline-block bg-green-950 hover:bg-green-800 transition-all py-2 px-4 text-white font-medium rounded-md">
Ver itinerario
</span> </div> </a>`)} </div> </aside> </section>`;
}, "C:/astro/iquitos-expedition/src/components/PacayaSamiria/PacayaSamiria6D.astro", void 0);

const $$Tour6Dias5Noches = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "BreadcrumbPacaya", $$BreadcrumbPacaya, {})} ${renderComponent($$result2, "PacayaSamiria6D", $$PacayaSamiria6D, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/astro/iquitos-expedition/src/pages/paquetes/tours-pacaya-samiria/tour-6-dias-5-noches.astro", void 0);

const $$file = "C:/astro/iquitos-expedition/src/pages/paquetes/tours-pacaya-samiria/tour-6-dias-5-noches.astro";
const $$url = "/paquetes/tours-pacaya-samiria/tour-6-dias-5-noches";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Tour6Dias5Noches,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
