import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../chunks/astro/server_B02qANs2.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../chunks/Layout_BCuCHOvd.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$BreadcrumbNosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative flex items-center justify-center min-h-[50vh] sm:min-h-64 md:h-95 lg:h-96 text-center pt-[var(--nav-height)]"> <img src="/../breadcrumb/bg-nosotros.avif" alt="Iquitos Expedition - Tours Amazonas" class="absolute object-cover w-full h-full" loading="eager"> <div class="absolute inset-0 bg-black opacity-80 mix-blend-multiply"></div> <div class="relative z-20 px-6 md:px-12 text-white max-w-7xl w-full"> <h3 class="text-5xl lg:text-6xl font-extrabold tracking-wide drop-shadow-lg">
Nosotros
</h3> <p class="mt-2 flex items-center justify-center gap-2 text-lg text-gray-300"> <a href="/" class="hover:text-white">Inicio</a> <i class="fa-solid fa-chevron-right text-orange-500"></i> <span class="text-white font-semibold">Nosotros</span> </p> </div> </section>`;
}, "C:/astro/iquitos-expedition/src/components/BreadcrumbNosotros.astro", void 0);

const $$Acercade = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="max-w-7xl mx-auto px-6 py-16"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="flex items-center justify-center h-full w-full gap-8 md:max-w-md text-center"> <h2 class="text-4xl font-bold">
Acerca de Iquitos Expedition
</h2> </div> <div class="space-y-4 text-justify"> <p>
Es una agencia de viajes, conformada por un equipo de colaboradores certificados y capacitados para ofrecerte los mejores paquetes turísticos personalizados que cumplan todas sus expectativas.
</p> <p>
Nuestro principal objetivo es brindarle una experiencia de viaje diferente e inolvidable, con el compromiso de encargarnos de toda la planificación y ejecución de su viaje, así usted solo se preocupe en disfrutar sus vacaciones.
</p> <p>
Llevamos más de 5 años trabajando al servicio de nuestros pasajeros; viajeros que vienen a Iquitos Perú a envolverse de su magia, cultura viva, su geografía y gastronomía. Contamos con los Mejores Paquetes Turísticos en los Mejores Lodge en medio la Selva, y Hoteles en el Centro de la ciudad, Para que su viaje sea único e inolvidable, contamos con los permisos requeridos, que garanticen el éxito de sus próximas vacaciones a la Amazonia Peruana.
</p> </div> </div> </div> <div class="bg-gray-50"> <div class="max-w-7xl mx-auto px-6 py-24"> <div class="grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center"> <div class="flex flex-col items-center justify-center h-full w-full gap-4 md:max-w-md text-center"> <h2 class="text-3xl xl:text-4xl font-bold">
Nuestra Misión
</h2> <p class="text-sm xl:text-base">
Brindar a nuestros pasajeros experiencias de viajes únicas e inolvidables, al alcance de sus manos.
</p> <img src="/../vision.avif" alt="Misión de Iquitos Expedition" loading="lazy"> </div> <div class="flex flex-col items-center justify-center h-full w-full gap-4 md:max-w-md text-center"> <h2 class="text-3xl xl:text-4xl font-bold">
Nuestra Visión
</h2> <p class="text-sm xl:text-base">
Lograr la inclusión de comunidades Nativas en la participación Sostenible de nuestras experiencias turísticas.
</p> <img src="/../mision.avif" alt="Visión de Iquitos Expedition" loading="lazy"> </div> </div> </div> </div> </section>`;
}, "C:/astro/iquitos-expedition/src/components/Acercade.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "BreadcrumbNosotros", $$BreadcrumbNosotros, {})} ${renderComponent($$result2, "Acercade", $$Acercade, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/astro/iquitos-expedition/src/pages/about.astro", void 0);

const $$file = "C:/astro/iquitos-expedition/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
