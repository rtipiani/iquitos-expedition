import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderScript, b as renderComponent } from '../chunks/astro/server_CEj8L07F.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../chunks/Layout_BXMIkbsN.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Contactos = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-white sm:p-4 lg:max-w-7xl mx-auto"> <div class="p-8 rounded-md mb-8"> <div class="text-center space-y-2 mb-8"> <h2 class="text-zinc-900 text-3xl font-medium text-center">
Ponte en contacto con nosotros
</h2> <p class="text-zinc-700">
Su dirección de correo electrónica no será publicada
</p> <p class="text-sm text-orange-600">
Los campos obligatorios están marcados*
</p> </div> <form id="contact-form" class="md:col-span-3" method="POST"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label for="name" class="text-gray-500 mb-2 block">
Nombre y Apellidos
</label> <input class="p-4 border border-gray-400 outline-orange-200 rounded-lg w-full" type="text" id="name" name="name" placeholder="Ingrese sus datos" required> </div> <div> <label for="email" class="text-gray-500 mb-2 block">
Correo electrónico
</label> <input class="p-4 border border-gray-400 outline-orange-200 rounded-lg w-full" type="email" id="email" name="email" placeholder="Ingrese un correo electrónico" required> </div> <div> <label for="telephone" class="text-gray-500 mb-2 block">
Número telefónico
</label> <input class="p-4 border border-gray-400 outline-orange-200 rounded-lg w-full" type="text" id="telephone" name="telephone" placeholder="Ingrese un número telefónico" required> </div> <div> <label for="subject" class="text-gray-500 mb-2 block">
Asunto
</label> <input class="p-4 border border-gray-400 outline-orange-200 rounded-lg w-full" type="text" id="subject" name="subject" placeholder="Ingrese el asunto" required> </div> <div class="md:col-span-2"> <label for="message" class="text-gray-500 mb-2 block">
Mensaje
</label> <textarea class="p-4 border border-gray-400 outline-orange-200 rounded-lg w-full" id="message" name="message" placeholder="Escribe tu mensaje aquí..." required minlength="50" maxlength="1000"></textarea> <p class="text-sm text-gray-500 mt-1">Mínimo 50 caracteres.</p> </div> <div class="mt-4 flex justify-center md:col-span-2 lg:flex lg:justify-center"> <div class="g-recaptcha scale-90 sm:scale-100" data-sitekey="6LduDOEqAAAAAHrR5epew3kjFVYWJw6hsDi8qrNw"></div> </div> </div> <div class="mt-4 text-center"> <button type="submit" class="py-4 px-8 text-center bg-green-950 hover:bg-orange-600 rounded-md text-white text-md cursor-pointer">
Enviar mensaje
<i class="fa-solid fa-location-arrow ml-2"></i> </button> </div> <p id="form-status" class="text-center text-md text-green-700 mt-4 hidden"></p> </form> </div> </section> ${renderScript($$result, "C:/astro/iquitos-expedition/src/components/Contactos.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/astro/iquitos-expedition/src/components/Contactos.astro", void 0);

const $$BreadcrumbContact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative flex items-center justify-center min-h-[50vh] sm:min-h-64 md:h-95 lg:h-96 text-center pt-[var(--nav-height)]"> <img src="/../breadcrumb/bg-contactanos.avif" alt="Iquitos Expedition - Tours Amazonas" class="absolute object-cover w-full h-full" loading="eager"> <div class="absolute inset-0 bg-black opacity-80 mix-blend-multiply"></div> <div class="relative z-20 px-6 md:px-12 text-white max-w-7xl w-full"> <h3 class="text-5xl lg:text-6xl font-extrabold tracking-wide drop-shadow-lg">
Contáctanos
</h3> <p class="mt-2 flex items-center justify-center gap-2 text-lg text-gray-300"> <a href="/" class="hover:text-white">
Inicio
</a> <i class="fa-solid fa-chevron-right text-orange-500"></i> <span class="text-white font-semibold">
Contáctanos
</span> </p> </div> </section>`;
}, "C:/astro/iquitos-expedition/src/components/BreadcrumbContact.astro", void 0);

const $$Contacts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "BreadcrumbContact", $$BreadcrumbContact, {})} ${renderComponent($$result2, "Contactos", $$Contactos, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/astro/iquitos-expedition/src/pages/contacts.astro", void 0);

const $$file = "C:/astro/iquitos-expedition/src/pages/contacts.astro";
const $$url = "/contacts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contacts,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
