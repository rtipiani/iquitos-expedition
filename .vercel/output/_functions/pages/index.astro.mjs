import { c as createComponent, r as renderTemplate, a as addAttribute, m as maybeRenderHead, d as renderScript, b as renderComponent } from '../chunks/astro/server_CEj8L07F.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../chunks/Layout_BXMIkbsN.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Slider = createComponent(($$result, $$props, $$slots) => {
  const slides = [
    { image: "../../slide1.avif", title: "BIENVENIDOS A LA AMAZON\xCDA", buttonText: "Consultar Ahora", position: "object-right" },
    { image: "../../slide2.avif", title: "ISLA DE LOS MONOS", buttonText: "Consultar Ahora", position: "object-center" },
    { image: "../../slide3.avif", title: "DESCUBRAMOS PACAYA SAMIRIA", buttonText: "Consultar Ahora", position: "object-[30%_50%]" },
    { image: "../../slide4.avif", title: "EXPLOREMOS LAS COMODIDADES NATIVAS", buttonText: "Consultar Ahora", position: "object-[40%_30%]" },
    { image: "../../slide5.avif", title: "HELICONIA AMAZON LODGE", buttonText: "Consultar Ahora", position: "object-[30%_50%]" },
    { image: "../../slide6.avif", title: "IRAPAY AMAZON LODGE", buttonText: "Consultar Ahora", position: "object-bottom" }
  ];
  const generateSrcSet = (image) => `
    ${image.replace(".avif", "-355w.avif")} 355w,
    ${image.replace(".avif", "-852w.avif")} 852w,
    ${image.replace(".avif", "-1278w.avif")} 1278w,
    ${image.replace(".avif", "-1680w.avif")} 1680w,
    ${image.replace(".avif", "-2000w.avif")} 2000w,
    ${image.replace(".avif", "-2268w.avif")} 2269w
`;
  const sizes = `
    (min-width: 2268px) 2268px,
    (min-width: 2000px) 2000px,
    (min-width: 1680px) 1680px,
    (min-width: 1278px) 1278px,
    (min-width: 852px) 852px,
    (min-width: 355px) 355px,
    100vw
`;
  return renderTemplate(_a || (_a = __template(["", '<div class="relative w-full h-screen overflow-hidden"> <div id="slider" class="flex transition-transform duration-700 ease-in-out w-full h-full"> ', ' </div> <button id="prev" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3" aria-label="Ir al slider anterior"> <i class="fa-solid fa-chevron-left fa-2xl"></i> </button> <button id="next" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3" aria-label="Ir al slider siguiente"> <i class="fa-solid fa-chevron-right fa-2xl"></i> </button> </div> <script>\n    window.onload = function () {\n        const slider = document.getElementById("slider");\n        const prev = document.getElementById("prev");\n        const next = document.getElementById("next");\n\n        if (!slider || !prev || !next) return;\n\n        let index = 0;\n        const slides = slider.children.length;\n\n        function updateSlider() {\n            slider.style.transform = `translateX(-${index * 100}%)`;\n        }\n\n        function nextSlide() {\n            index = (index + 1) % slides;\n            updateSlider();\n        }\n\n        function prevSlide() {\n            index = (index - 1 + slides) % slides;\n            updateSlider();\n        }\n\n        next.addEventListener("click", nextSlide);\n        prev.addEventListener("click", prevSlide);\n\n        setInterval(nextSlide, 4000);\n    };\n<\/script>'], ["", '<div class="relative w-full h-screen overflow-hidden"> <div id="slider" class="flex transition-transform duration-700 ease-in-out w-full h-full"> ', ' </div> <button id="prev" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3" aria-label="Ir al slider anterior"> <i class="fa-solid fa-chevron-left fa-2xl"></i> </button> <button id="next" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3" aria-label="Ir al slider siguiente"> <i class="fa-solid fa-chevron-right fa-2xl"></i> </button> </div> <script>\n    window.onload = function () {\n        const slider = document.getElementById("slider");\n        const prev = document.getElementById("prev");\n        const next = document.getElementById("next");\n\n        if (!slider || !prev || !next) return;\n\n        let index = 0;\n        const slides = slider.children.length;\n\n        function updateSlider() {\n            slider.style.transform = \\`translateX(-\\${index * 100}%)\\`;\n        }\n\n        function nextSlide() {\n            index = (index + 1) % slides;\n            updateSlider();\n        }\n\n        function prevSlide() {\n            index = (index - 1 + slides) % slides;\n            updateSlider();\n        }\n\n        next.addEventListener("click", nextSlide);\n        prev.addEventListener("click", prevSlide);\n\n        setInterval(nextSlide, 4000);\n    };\n<\/script>'])), maybeRenderHead(), slides.map((slide, index) => renderTemplate`<div class="w-full h-full flex-shrink-0 relative aspect-[16/9]"${addAttribute(index, "data-slide")}> <picture> <source${addAttribute(generateSrcSet(slide.image), "srcset")}${addAttribute(sizes, "sizes")} type="image/avif"> <img${addAttribute(slide.image, "src")}${addAttribute(slide.title, "alt")} width="1920" height="1080"${addAttribute(`w-full h-full object-cover ${slide.position}`, "class")} loading="lazy"> </picture> <div class="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40"> <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-center px-4 leading-snug sm:leading-tight md:leading-normal max-w-[80%] sm:max-w-[60%] lg:max-w-[50%]"> ${slide.title} </h2> <a href="https://wa.link/no5uic" class="btn-primary flex items-center gap-2" target="_blank"> ${slide.buttonText} <i class="fa-brands fa-whatsapp"></i> </a> </div> </div>`));
}, "C:/astro/iquitos-expedition/src/components/Slider.astro", void 0);

const $$Reservas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="max-w-5xl w-full bg-white py-12 p-8 mx-auto mt-5"> <h2 class="text-2xl font-bold text-gray-900 mb-2 text-center md:text-left">
Haz tu reserva rápida y segura.
</h2> <p class="text-gray-600 mb-6 text-center md:text-left">
Selecciona tu aventura, indica tus fechas, completa tus datos y nuestro equipo de atención al cliente estará siempre disponible para ayudarte. ¡Reserva ahora y vive una aventura inolvidable en Iquitos!
</p> <form class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label for="nombres" class="block text-gray-700 font-semibold mb-1">
Nombres y Apellidos
</label> <input type="text" id="nombres" name="nombres" placeholder="Ingresa tus datos..." class="w-full px-4 py-2 border border-green-900 focus:border-orange-400 focus:outline focus:outline-orange-700 rounded-md bg-gray-50"> </div> <div> <label for="programaSelect" class="block text-gray-700 font-semibold mb-1">
Programa
</label> <select id="programaSelect" name="programaSelect" class="w-full px-4 py-2 border border-green-900 focus:border-orange-400 focus:outline focus:outline-orange-700 rounded-md bg-gray-50"> <option value="">
Selecciona un programa
</option> </select> </div> <div> <label for="actividadSelect" class="block text-gray-700 font-semibold mb-1">
Actividad
</label> <select id="actividadSelect" name="actividadSelect" class="w-full px-4 py-2 border border-green-900 focus:border-orange-400 focus:outline focus:outline-orange-700 rounded-md bg-gray-50" disabled> <option value="">
Selecciona una actividad
</option> </select> </div> <div> <label for="fechaIngreso" class="block text-gray-700 font-semibold mb-1">
Fecha de Inicio
</label> <input type="date" id="fechaIngreso" name="fechaIngreso" class="w-full px-4 py-2 border border-green-900  focus:border-orange-400 focus:outline focus:outline-orange-700 rounded-md bg-gray-50"> </div> <div> <label for="fechaSalida" class="block text-gray-700 font-semibold mb-1">
Fecha de Fin
</label> <input type="date" id="fechaSalida" name="fechaSalida" class="w-full px-4 py-2 border border-green-900  focus:border-orange-400 focus:outline focus:outline-orange-700 rounded-md bg-gray-50"> </div> <div class="md:col-span-2"> <button type="submit" id="consultarBtn" class="w-full bg-green-800 hover:bg-green-900 text-white py-3 rounded-md font-semibold flex items-center justify-center cursor-pointer" aria-label="Consultar paquete">
Consultar Ahora
<i class="fa-brands fa-whatsapp ml-1"></i> </button> </div> </form> </section> ${renderScript($$result, "C:/astro/iquitos-expedition/src/components/Reservas.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/astro/iquitos-expedition/src/components/Reservas.astro", void 0);

const $$PaquetesRecomendados = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-white my-26"> <div class="max-w-7xl mx-auto px-4"> <div class="mb-8"> <h3 class="text-4xl font-bold mb-4 text-gray-900">
Los mejores paquetes turísticos
</h3> <p class="text-black">
Descubre los mejores paquetes turísticos con Iquitos Expedition. Somos tu opción ideal para viajes en pareja, en familia o con amigos. Celebra tu luna de miel, cumpleaños o aniversario en los más exclusivos hoteles y lodges de la selva amazónica. Garantizamos experiencias inolvidables y un servicio de calidad excepcional.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> <div class="bg-gray-50 bg-opacity-65 rounded-md px-6 py-4"> <img src="/../paquetes-recomendados/iquitosdelujo.avif" alt="Iquitos de Lujo en Irapay Amazon Lodge" class="object-cover rounded-lg w-full h-44" width="358" height="176" loading="lazy"> <div class="pt-8 pb-4"> <a href="./../paquetes/tours-irapay-amazon/iquitos-relax-3-dias-2-noches" class="block text-xl text-green-900 font-bold h-14 hover:text-orange-600 transition-colors">
Iquitos de Lujo en Irapay Amazon Lodge
</a> <div class="flex justify-between items-center mt-2 mb-6"> <div class="flex justify-center items-center"> <svg width="20" height="20" viewBox="0 0 24 24" class="text-green-950" data-icon="clock"> <symbol id="ai:local:clock"> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path> </symbol> <use xlink:href="#ai:local:clock"></use> </svg> <span class="text-green-950 ml-2 text-sm">
3D/2N
</span> </div> </div> <p class="text-black">
Explora junto a nosotros las maravillas turísticas de la Amazonía peruana. Iquitos te espera para vivir la mejor aventura de tu vida, navegando el río más caudaloso del mundo, observar delfines, tener contacto con la naturaleza y comunidades nativas con sus costumbres ancestrales.
</p> </div> <div class="border border-orange-300 my-4"></div> <a href="https://wa.link/no5uic" aria-label="Guía turística por Iquitos de Lujo en Irapay Amazon Lodge" target="_blank" class="flex justify-between items-center group"> <p class="text-green-950 font-bold group-hover:text-orange-500 transition-colors">
Consultar paquete
</p> <svg width="28" height="28" viewBox="0 0 320 512" class="text-white bg-green-950 p-1 rounded-full group-hover:bg-orange-500 transition-colors" data-icon="angle-right"> <symbol id="ai:local:angle-right"> <path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path> </symbol> <use xlink:href="#ai:local:angle-right"></use> </svg> </a> </div> <div class="bg-gray-50 bg-opacity-65 rounded-md px-6 py-4"> <img src="/../paquetes-recomendados/explorandoamazonas4d3n.avif" alt="Explorando el Amazonas en Heliconia Amazon Lodge" class="object-cover rounded-lg w-full h-44" loading="lazy"> <div class="pt-8 pb-4"> <a href="./../paquetes/tours-heliconia-lodge/descubre-las-maravillas-de-la-amazonia-4-dias-3-noches" class="block text-xl text-green-900 font-bold h-14 hover:text-orange-600 transition-colors">
Explorando el Amazonas en Heliconia Amazon Lodge
</a> <div class="flex justify-between items-center mt-2 mb-6"> <div class="flex justify-center items-center"> <svg width="20" height="20" viewBox="0 0 24 24" class="text-green-950" data-icon="clock"> <use xlink:href="#ai:local:clock"></use> </svg> <span class="text-green-950 ml-2 text-sm">
4D/3N
</span> </div> </div> <p class="text-black">
Explora junto a nosotros las maravillas turísticas de la Amazonía peruana. Iquitos te espera para vivir la mejor aventura de tu vida, navegando el río más caudaloso del mundo, observar delfines, tener contacto con la naturaleza y comunidades nativas con sus costumbres ancestrales.
</p> </div> <div class="border border-orange-300 my-4"></div> <a href="https://wa.link/no5uic" aria-label="Guía turística por Explorando el Amazonas en Heliconia Amazon Lodge" target="_blank" class="flex justify-between items-center group"> <p class="text-green-950 font-bold group-hover:text-orange-500 transition-colors">
Consultar paquete
</p> <svg width="28" height="28" viewBox="0 0 320 512" class="text-white bg-green-950 p-1 rounded-full group-hover:bg-orange-500 transition-colors" data-icon="angle-right"> <use xlink:href="#ai:local:angle-right"></use> </svg> </a> </div> <div class="bg-gray-50 bg-opacity-65 rounded-md px-6 py-4"> <img src="/../paquetes-recomendados/relax-selva.avif" alt="Relax en la selva Cumaceba" class="object-cover rounded-lg w-full h-44" loading="lazy"> <div class="pt-8 pb-4"> <a href="./../paquetes/tours-cumaceba-lodge/tour-3-dias-2-noches" class="block text-xl text-green-900 font-bold h-14 hover:text-orange-600 transition-colors">
Relax en la selva Cumaceba
</a> <div class="flex justify-between items-center mt-2 mb-6"> <div class="flex justify-center items-center"> <svg width="20" height="20" viewBox="0 0 24 24" class="text-green-950" data-icon="clock"> <use xlink:href="#ai:local:clock"></use> </svg> <span class="text-green-950 ml-2 text-sm">
3D/2N
</span> </div> </div> <p class="text-black">
Explora junto a nosotros las maravillas turísticas de la Amazonía peruana. Iquitos te espera para vivir la mejor aventura de tu vida, navegando el río más caudaloso del mundo, observar delfines, tener contacto con la naturaleza y comunidades nativas con sus costumbres ancestrales.
</p> </div> <div class="border border-orange-300 my-4"></div> <a href="https://wa.link/no5uic" aria-label="Guía turística por Relax en la selva Cumaceba" target="_blank" class="flex justify-between items-center group"> <p class="text-green-950 font-bold group-hover:text-orange-500 transition-colors">
Consultar paquete
</p> <svg width="28" height="28" viewBox="0 0 320 512" class="text-white bg-green-950 p-1 rounded-full group-hover:bg-orange-500 transition-colors" data-icon="angle-right"> <use xlink:href="#ai:local:angle-right"></use> </svg> </a> </div> <div class="bg-gray-50 bg-opacity-65 rounded-md px-6 py-4"> <img src="/../paquetes-recomendados/toursdiarios-isladelosmonos.avif" alt="Tours diarios Isla  de los monos" class="object-cover rounded-lg w-full h-44" loading="lazy"> <div class="pt-8 pb-4"> <a href="./../paquetes/tours-diarios/isla-de-los-monos" class="block text-xl text-green-900 font-bold h-14 hover:text-orange-600 transition-colors">
Tours diarios Isla  de los monos
</a> <div class="flex justify-between items-center mt-2 mb-6"> <div class="flex justify-center items-center"> <svg width="20" height="20" viewBox="0 0 24 24" class="text-green-950" data-icon="clock"> <use xlink:href="#ai:local:clock"></use> </svg> <span class="text-green-950 ml-2 text-sm">
Todos los días
</span> </div> </div> <p class="text-black">
Explora junto a nosotros las maravillas turísticas de la Amazonía peruana. Iquitos te espera para vivir la mejor aventura de tu vida, navegando el río más caudaloso del mundo, observar delfines, tener contacto con la naturaleza y comunidades nativas con sus costumbres ancestrales.
</p> </div> <div class="border border-orange-300 my-4"></div> <a href="https://wa.link/no5uic" aria-label="Guía turística por Tours diarios Isla  de los monos" target="_blank" class="flex justify-between items-center group"> <p class="text-green-950 font-bold group-hover:text-orange-500 transition-colors">
Consultar paquete
</p> <svg width="28" height="28" viewBox="0 0 320 512" class="text-white bg-green-950 p-1 rounded-full group-hover:bg-orange-500 transition-colors" data-icon="angle-right"> <use xlink:href="#ai:local:angle-right"></use> </svg> </a> </div> <div class="bg-gray-50 bg-opacity-65 rounded-md px-6 py-4"> <img src="/../paquetes-recomendados/pacaya-samiria-desde-iquitos.avif" alt="Pacaya Samiria desde Iquitos" class="object-cover rounded-lg w-full h-44" loading="lazy"> <div class="pt-8 pb-4"> <a href="./../paquetes/tours-pacaya-samiria/tour-4-dias-3-noches" class="block text-xl text-green-900 font-bold h-14 hover:text-orange-600 transition-colors">
Pacaya Samiria desde Iquitos
</a> <div class="flex justify-between items-center mt-2 mb-6"> <div class="flex justify-center items-center"> <svg width="20" height="20" viewBox="0 0 24 24" class="text-green-950" data-icon="clock"> <use xlink:href="#ai:local:clock"></use> </svg> <span class="text-green-950 ml-2 text-sm">
4D/3N
</span> </div> </div> <p class="text-black">
Explora junto a nosotros las maravillas turísticas de la Amazonía peruana. Iquitos te espera para vivir la mejor aventura de tu vida, navegando el río más caudaloso del mundo, observar delfines, tener contacto con la naturaleza y comunidades nativas con sus costumbres ancestrales.
</p> </div> <div class="border border-orange-300 my-4"></div> <a href="https://wa.link/no5uic" aria-label="Guía turística por Pacaya Samiria desde Iquitos" target="_blank" class="flex justify-between items-center group"> <p class="text-green-950 font-bold group-hover:text-orange-500 transition-colors">
Consultar paquete
</p> <svg width="28" height="28" viewBox="0 0 320 512" class="text-white bg-green-950 p-1 rounded-full group-hover:bg-orange-500 transition-colors" data-icon="angle-right"> <use xlink:href="#ai:local:angle-right"></use> </svg> </a> </div> <div class="bg-gray-50 bg-opacity-65 rounded-md px-6 py-4"> <img src="/../paquetes-recomendados/pacaya-samiria-desde-tarapoto.avif" alt="Pacaya Samiria desde Tarapoto" class="object-cover rounded-lg w-full h-44" loading="lazy"> <div class="pt-8 pb-4"> <a href="./../paquetes/tours-pacaya-samiria/tour-8-dias-7-noches" class="block text-xl text-green-900 font-bold h-14 hover:text-orange-600 transition-colors">
Pacaya Samiria desde Tarapoto
</a> <div class="flex justify-between items-center mt-2 mb-6"> <div class="flex justify-center items-center"> <svg width="20" height="20" viewBox="0 0 24 24" class="text-green-950" data-icon="clock"> <use xlink:href="#ai:local:clock"></use> </svg> <span class="text-green-950 ml-2 text-sm">
8D/7N
</span> </div> </div> <p class="text-black">
Explora junto a nosotros las maravillas turísticas de la Amazonía peruana. Iquitos te espera para vivir la mejor aventura de tu vida, navegando el río más caudaloso del mundo, observar delfines, tener contacto con la naturaleza y comunidades nativas con sus costumbres ancestrales.
</p> </div> <div class="border border-orange-300 my-4"></div> <a href="https://wa.link/no5uic" aria-label="Guía turística por Pacaya Samiria desde Tarapoto" target="_blank" class="flex justify-between items-center group"> <p class="text-green-950 font-bold group-hover:text-orange-500 transition-colors">
Consultar paquete
</p> <svg width="28" height="28" viewBox="0 0 320 512" class="text-white bg-green-950 p-1 rounded-full group-hover:bg-orange-500 transition-colors" data-icon="angle-right"> <use xlink:href="#ai:local:angle-right"></use> </svg> </a> </div> </div> </div> </section>`;
}, "C:/astro/iquitos-expedition/src/components/PaquetesRecomendados.astro", void 0);

const $$Historia = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-50"> <div class="grid grid-cols-1 lg:grid-cols-2 max-w-7xl px-8 py-24 mx-auto justify-center items-center gap-8"> <img src="/../cta-iquitos.avif" alt="Tours en Iquitos, Perú - Amazonía Peruana" class="rounded-md order-2 lg:order-1" loading="lazy"> <div class="order-1 lg:order-2 space-y-2"> <p class="uppercase text-black font-medium">
Exploremos Iquitos
</p> <h3 class="text-gray-900 font-bold text-2xl lg:text-3xl">
Historia y Transformación
</h3> <p class="text-black text-justify text-sm">
Ubicada en la selva noreste del Perú, Iquitos es la capital de Loreto y Maynas, rodeada por los ríos Amazonas, Nanay e Itaya. Fundada en 1757 por la misión jesuita como San Pablo de los Napeanos, la ciudad fue habitada por los Iquitos tras la partida de los napeanos a finales del siglo XVIII. Entre 1880 y 1914, la fiebre del caucho impulsó su crecimiento, atrayendo a peruanos y europeos en busca de oportunidades. Este auge convirtió a Iquitos en un centro comercial, modernizando la ciudad con nueva arquitectura y servicios públicos que mejoraron la calidad de vida de sus habitantes.
</p> <a target="_blank" href="https://wa.link/muo21e" class="inline-flex items-center justify-center border-2 border-white hover:border-orange-500 font-bold hover:bg-white rounded-md bg-green-950 text-white hover:text-orange-500 text-sm px-6 py-3" aria-label="Contacto de WhatsApp">
Consultar ahora
<i class="fa-brands fa-whatsapp fa-2xl ml-2"></i> </a> </div> </div> </section>`;
}, "C:/astro/iquitos-expedition/src/components/Historia.astro", void 0);

const $$CtaIquitos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="h-[40rem] relative flex justify-center items-center"> <img src="/../CallToAction.avif" alt="Tours en Iquitos, Perú - Amazonía Peruana" loading="lazy" class="object-cover w-full h-full"> <div class="absolute inset-0 bg-black opacity-50"></div> <div class="absolute max-w-3xl text-center px-4 space-y-16"> <h3 class="uppercase font-bold text-white" style="font-size: clamp(2.25rem, 1.8214rem + 2.1429vw, 3.75rem);">
Los mejores tours de la Amazonía
</h3> <a target="_blank" href="https://wa.link/muo21e" class="inline-flex items-center justify-center border-2 border-white hover:border-green-800 font-bold hover:bg-white rounded-md bg-orange-600 text-white hover:text-green-800 px-12 py-4" aria-label="Contacto de WhatsApp">
Consultar ahora
<i class="fa-brands fa-whatsapp fa-2xl ml-2"></i> </a> </div> </section>`;
}, "C:/astro/iquitos-expedition/src/components/CtaIquitos.astro", void 0);

const $$GaleriaInicial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative grid grid-cols-1 lg:grid-cols-2 my-12 h-full lg:h-[80vh]"> <div class="relative"> <img src="/../galeria-inicial/reserva-nacional-pacaya-samiria.avif" alt="RESERVA NACIONAL PACAYA SAMIRIA" loading="lazy" class="w-full h-full object-cover"> <a href="./paquetes/pacaya-samiria" class="absolute inset-0 z-30 flex flex-col justify-end p-4"> <h2 class="uppercase font-bold text-white text-xl lg:text-2xl">
RESERVA NACIONAL PACAYA SAMIRIA
</h2> <p class="text-white">Ven y vive las mejores experiencias de tus Vacaciones en la Amazonia Peruana.</p> </a> </div> <div class="grid grid-cols-1 lg:grid-cols-2"> <div class="relative"> <img src="/../galeria-inicial/heliconia-amazon-river-lodge.avif" alt="HELICONIA AMAZON RIVER LODGE" loading="lazy" class="w-full h-full object-cover"> <a href="./paquetes/heliconia-lodge" class="absolute inset-0 z-30 flex flex-col justify-end p-4"> <h2 class="uppercase font-bold text-white text-xl">HELICONIA AMAZON RIVER LODGE</h2> <p class="text-white">Ven y vive las mejores experiencias de tus Vacaciones en la Amazonia Peruana.</p> </a> </div> <div class="relative"> <img src="/../galeria-inicial/cumaceba-lodge.avif" alt="CUMACEBA LODGE" loading="lazy" class="w-full h-full object-cover"> <a href="./paquetes/cumaceba-lodge" class="absolute inset-0 z-30 flex flex-col justify-end p-4"> <h2 class="uppercase font-bold text-white text-xl">CUMACEBA LODGE</h2> <p class="text-white">Ven y vive las mejores experiencias de tus Vacaciones en la Amazonia Peruana.</p> </a> </div> <div class="relative"> <img src="/../galeria-inicial/irapay-amazon-lodge.avif" alt="IRAPAY AMAZON LODGE" loading="lazy" class="w-full h-full object-cover"> <a href="./paquetes/irapay-amazon" class="absolute inset-0 z-30 flex flex-col justify-end p-4"> <h2 class="uppercase font-bold text-white text-xl">IRAPAY AMAZON LODGE</h2> <p class="text-white">Ven y vive las mejores experiencias de tus Vacaciones en la Amazonia Peruana.</p> </a> </div> <div class="relative"> <img src="/../galeria-inicial/tours-diarios.avif" alt="TOURS DIARIOS" loading="lazy" class="w-full h-full object-cover"> <a href="./paquetes/tours-diarios" class="absolute inset-0 z-30 flex flex-col justify-end p-4"> <h2 class="uppercase font-bold text-white text-xl">TOURS DIARIOS</h2> <p class="text-white">Ven y vive las mejores experiencias de tus Vacaciones en la Amazonia Peruana.</p> </a> </div> </div> <div class="absolute inset-0 bg-black/50 z-10"></div> </section>`;
}, "C:/astro/iquitos-expedition/src/components/GaleriaInicial.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Slider", $$Slider, {})} ${renderComponent($$result2, "Reservas", $$Reservas, {})} ${renderComponent($$result2, "GaleriaInicial", $$GaleriaInicial, {})} ${renderComponent($$result2, "PaquetesRecomendados", $$PaquetesRecomendados, {})} ${renderComponent($$result2, "Historia", $$Historia, {})} ${renderComponent($$result2, "CtaIquitos", $$CtaIquitos, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/astro/iquitos-expedition/src/pages/index.astro", void 0);

const $$file = "C:/astro/iquitos-expedition/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
