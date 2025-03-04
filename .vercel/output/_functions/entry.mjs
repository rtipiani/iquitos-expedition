import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_KdDtrBYl.mjs';
import { manifest } from './manifest_C8z5ELMd.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/send-email.astro.mjs');
const _page3 = () => import('./pages/contacts.astro.mjs');
const _page4 = () => import('./pages/gallery.astro.mjs');
const _page5 = () => import('./pages/paquetes/cumaceba-lodge.astro.mjs');
const _page6 = () => import('./pages/paquetes/heliconia-lodge.astro.mjs');
const _page7 = () => import('./pages/paquetes/irapay-amazon.astro.mjs');
const _page8 = () => import('./pages/paquetes/pacaya-samiria.astro.mjs');
const _page9 = () => import('./pages/paquetes/tours-cumaceba-lodge/tour-3-dias-2-noches.astro.mjs');
const _page10 = () => import('./pages/paquetes/tours-cumaceba-lodge/tour-4-dias-3-noches.astro.mjs');
const _page11 = () => import('./pages/paquetes/tours-cumaceba-lodge/tour-5-dias-4-noches.astro.mjs');
const _page12 = () => import('./pages/paquetes/tours-diarios/aventura-extrema.astro.mjs');
const _page13 = () => import('./pages/paquetes/tours-diarios/crea-y-quiticocha.astro.mjs');
const _page14 = () => import('./pages/paquetes/tours-diarios/el-encanto-amazonico.astro.mjs');
const _page15 = () => import('./pages/paquetes/tours-diarios/isla-de-los-monos.astro.mjs');
const _page16 = () => import('./pages/paquetes/tours-diarios/mariposario.astro.mjs');
const _page17 = () => import('./pages/paquetes/tours-diarios.astro.mjs');
const _page18 = () => import('./pages/paquetes/tours-heliconia-lodge/cultura-y-aventuras-en-la-selva-5-dias-4-noches.astro.mjs');
const _page19 = () => import('./pages/paquetes/tours-heliconia-lodge/descubre-las-maravillas-de-la-amazonia-4-dias-3-noches.astro.mjs');
const _page20 = () => import('./pages/paquetes/tours-heliconia-lodge/inolvidable-rio-amazonas-3-dias-2-noches.astro.mjs');
const _page21 = () => import('./pages/paquetes/tours-irapay-amazon/explorando-el-amazonas-4-dias-3-noches.astro.mjs');
const _page22 = () => import('./pages/paquetes/tours-irapay-amazon/iquitos-de-aventura-5-dias-4-noches.astro.mjs');
const _page23 = () => import('./pages/paquetes/tours-irapay-amazon/iquitos-relax-3-dias-2-noches.astro.mjs');
const _page24 = () => import('./pages/paquetes/tours-pacaya-samiria/tour-3-dias-2-noches.astro.mjs');
const _page25 = () => import('./pages/paquetes/tours-pacaya-samiria/tour-4-dias-3-noches.astro.mjs');
const _page26 = () => import('./pages/paquetes/tours-pacaya-samiria/tour-5-dias-4-noches.astro.mjs');
const _page27 = () => import('./pages/paquetes/tours-pacaya-samiria/tour-6-dias-5-noches.astro.mjs');
const _page28 = () => import('./pages/paquetes/tours-pacaya-samiria/tour-8-dias-7-noches.astro.mjs');
const _page29 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/send-email.ts", _page2],
    ["src/pages/contacts.astro", _page3],
    ["src/pages/gallery.astro", _page4],
    ["src/pages/paquetes/cumaceba-lodge.astro", _page5],
    ["src/pages/paquetes/heliconia-lodge.astro", _page6],
    ["src/pages/paquetes/irapay-amazon.astro", _page7],
    ["src/pages/paquetes/pacaya-samiria.astro", _page8],
    ["src/pages/paquetes/tours-cumaceba-lodge/tour-3-dias-2-noches.astro", _page9],
    ["src/pages/paquetes/tours-cumaceba-lodge/tour-4-dias-3-noches.astro", _page10],
    ["src/pages/paquetes/tours-cumaceba-lodge/tour-5-dias-4-noches.astro", _page11],
    ["src/pages/paquetes/tours-diarios/aventura-extrema.astro", _page12],
    ["src/pages/paquetes/tours-diarios/crea-y-quiticocha.astro", _page13],
    ["src/pages/paquetes/tours-diarios/el-encanto-amazonico.astro", _page14],
    ["src/pages/paquetes/tours-diarios/isla-de-los-monos.astro", _page15],
    ["src/pages/paquetes/tours-diarios/mariposario.astro", _page16],
    ["src/pages/paquetes/tours-diarios.astro", _page17],
    ["src/pages/paquetes/tours-heliconia-lodge/cultura-y-aventuras-en-la-selva-5-dias-4-noches.astro", _page18],
    ["src/pages/paquetes/tours-heliconia-lodge/descubre-las-maravillas-de-la-amazonia-4-dias-3-noches.astro", _page19],
    ["src/pages/paquetes/tours-heliconia-lodge/inolvidable-rio-amazonas-3-dias-2-noches.astro", _page20],
    ["src/pages/paquetes/tours-irapay-amazon/explorando-el-amazonas-4-dias-3-noches.astro", _page21],
    ["src/pages/paquetes/tours-irapay-amazon/iquitos-de-aventura-5-dias-4-noches.astro", _page22],
    ["src/pages/paquetes/tours-irapay-amazon/iquitos-relax-3-dias-2-noches.astro", _page23],
    ["src/pages/paquetes/tours-pacaya-samiria/tour-3-dias-2-noches.astro", _page24],
    ["src/pages/paquetes/tours-pacaya-samiria/tour-4-dias-3-noches.astro", _page25],
    ["src/pages/paquetes/tours-pacaya-samiria/tour-5-dias-4-noches.astro", _page26],
    ["src/pages/paquetes/tours-pacaya-samiria/tour-6-dias-5-noches.astro", _page27],
    ["src/pages/paquetes/tours-pacaya-samiria/tour-8-dias-7-noches.astro", _page28],
    ["src/pages/index.astro", _page29]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4564ea63-31ea-49f7-8421-e45b6672786b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
