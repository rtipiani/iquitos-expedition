/**
 * Schema.org Configuration for Tours and Products
 * This file contains reusable configurations for implementing structured data
 */

export interface TourConfig {
	name: string;
	duration: string; // ISO 8601 format: P3D, PT8H
	durationDays: number;
	availability?: string; // https://schema.org/InStock
	location: string;
	locationCoords: { lat: number; lng: number };
	image: string[];
	rating?: number;
	reviewCount?: number;
	description?: string;
}

export interface LodgeConfig {
	name: string;
	checkInTime?: string;
	checkOutTime?: string;
	amenities?: string[];
	image: string[];
	rating?: number;
	reviewCount?: number;
	starRating?: number;
	description?: string;
}

// Popular Tours Configuration
export const toursConfig: Record<string, TourConfig> = {
	// Daily Tours
	cityTour: {
		name: "City Tour Iquitos - Centro Histórico",
		duration: "PT8H",
		durationDays: 1,
		location: "Centro Histórico, Iquitos",
		locationCoords: { lat: -3.7436, lng: -73.2516 },
		image: [
			"https://iquitosexpedition.com/gallery/gal-ie20.avif",
			"https://iquitosexpedition.com/gallery/gal-ie21.avif",
		],
		rating: 4.5,
		reviewCount: 203,
	},
	islandOfMonkeys: {
		name: "Tour Isla de los Monos - Full Day",
		duration: "PT8H",
		durationDays: 1,
		location: "Isla de los Monos, Iquitos",
		locationCoords: { lat: -3.7436, lng: -73.2516 },
		image: [
			"https://iquitosexpedition.com/gallery/gal-ie3.avif",
			"https://iquitosexpedition.com/gallery/gal-ie4.avif",
		],
		rating: 4.7,
		reviewCount: 287,
	},
	butterfly: {
		name: "Tour Mariposario Iquitos - Full Day",
		duration: "PT8H",
		durationDays: 1,
		location: "Mariposario, Iquitos",
		locationCoords: { lat: -3.7436, lng: -73.2516 },
		image: [
			"https://iquitosexpedition.com/tours/mariposario.avif",
			"https://iquitosexpedition.com/gallery/gal-ie6.avif",
		],
		rating: 4.6,
		reviewCount: 159,
	},
	lagoons: {
		name: "Tour Crea y Quiticocha - Lagunas",
		duration: "PT8H",
		durationDays: 1,
		location: "Lagunas Crea y Quiticocha, Iquitos",
		locationCoords: { lat: -3.7436, lng: -73.2516 },
		image: [
			"https://iquitosexpedition.com/gallery/gal-ie10.avif",
			"https://iquitosexpedition.com/gallery/gal-ie11.avif",
		],
		rating: 4.6,
		reviewCount: 128,
	},
	enchantment: {
		name: "El Encanto Amazónico - Full Day",
		duration: "PT8H",
		durationDays: 1,
		location: "Selva Amazónica, Iquitos",
		locationCoords: { lat: -3.7436, lng: -73.2516 },
		image: [
			"https://iquitosexpedition.com/tours/encantoamazonico.avif",
			"https://iquitosexpedition.com/gallery/gal-ie5.avif",
		],
		rating: 4.7,
		reviewCount: 142,
	},

	// Multi-day Tours
	pacayaSamiria3D: {
		name: "Tour Pacaya Samiria 3 Días 2 Noches",
		duration: "P3D",
		durationDays: 3,
		location: "Reserva Nacional Pacaya Samiria, Iquitos",
		locationCoords: { lat: -3.7436, lng: -73.2516 },
		image: [
			"https://iquitosexpedition.com/paquetes-recomendados/pacaya-samiria-desde-iquitos.avif",
		],
		rating: 4.8,
		reviewCount: 156,
	},
	pacayaSamiria4D: {
		name: "Pacaya Samiria 4 Días 3 Noches",
		duration: "P4D",
		durationDays: 4,
		location: "Reserva Nacional Pacaya Samiria, Iquitos",
		locationCoords: { lat: -3.7436, lng: -73.2516 },
		image: [
			"https://iquitosexpedition.com/paquetes-recomendados/pacaya-samiria-desde-iquitos.avif",
			"https://iquitosexpedition.com/gallery/gal-ie8.avif",
		],
		rating: 4.8,
		reviewCount: 176,
	},
	pacayaSamiria8D: {
		name: "Pacaya Samiria 8 Días 7 Noches",
		duration: "P8D",
		durationDays: 8,
		location: "Reserva Nacional Pacaya Samiria, Iquitos",
		locationCoords: { lat: -3.7436, lng: -73.2516 },
		image: [
			"https://iquitosexpedition.com/paquetes-recomendados/pacaya-samiria-desde-iquitos.avif",
			"https://iquitosexpedition.com/gallery/gal-ie9.avif",
		],
		rating: 4.9,
		reviewCount: 134,
	},
	heliconiaRiver3D: {
		name: "Inolvidable Río Amazonas 3 Días 2 Noches",
		duration: "P3D",
		durationDays: 3,
		location: "Río Amazonas, Heliconia Lodge, Iquitos",
		locationCoords: { lat: -3.7436, lng: -73.2516 },
		image: [
			"https://iquitosexpedition.com/breadcrumb/bg-heliconia.avif",
			"https://iquitosexpedition.com/gallery/gal-ie2.avif",
		],
		rating: 4.7,
		reviewCount: 134,
	},
	maravillas4D: {
		name: "Descubre Maravillas de la Amazonía 4 Días 3 Noches",
		duration: "P4D",
		durationDays: 4,
		location: "Heliconia Lodge, Amazonas",
		locationCoords: { lat: -3.7436, lng: -73.2516 },
		image: [
			"https://iquitosexpedition.com/breadcrumb/bg-heliconia.avif",
			"https://iquitosexpedition.com/paquetes-recomendados/maravillasdelaamazonia.avif",
		],
		rating: 4.7,
		reviewCount: 147,
	},
	irapayRelax3D: {
		name: "Iquitos Relax 3 Días 2 Noches",
		duration: "P3D",
		durationDays: 3,
		location: "Irapay Lodge, Iquitos",
		locationCoords: { lat: -3.7436, lng: -73.2516 },
		image: [
			"https://iquitosexpedition.com/galeria-inicial/irapay-amazon-lodge.avif",
			"https://iquitosexpedition.com/paquetes-recomendados/relax-selva.avif",
		],
		rating: 4.7,
		reviewCount: 112,
	},
	irapayLuxury6D: {
		name: "Iquitos de Lujo 6 Días 5 Noches",
		duration: "P6D",
		durationDays: 6,
		location: "Irapay Lodge, Iquitos, Amazonas",
		locationCoords: { lat: -3.7436, lng: -73.2516 },
		image: [
			"https://iquitosexpedition.com/galeria-inicial/irapay-amazon-lodge.avif",
			"https://iquitosexpedition.com/paquetes-recomendados/iquitosdelujo.avif",
		],
		rating: 4.9,
		reviewCount: 189,
	},
	cumaceba3D: {
		name: "Cumaceba Lodge 3 Días 2 Noches",
		duration: "P3D",
		durationDays: 3,
		location: "Cumaceba Lodge, Iquitos",
		locationCoords: { lat: -3.7436, lng: -73.2516 },
		image: [
			"https://iquitosexpedition.com/galeria-inicial/cumaceba-lodge.avif",
			"https://iquitosexpedition.com/breadcrumb/bg-cumaceba.avif",
		],
		rating: 4.6,
		reviewCount: 98,
	},
};

// Lodges Configuration
export const lodgesConfig: Record<string, LodgeConfig> = {
	heliconia: {
		name: "Heliconia Amazon River Lodge",
		checkInTime: "14:00",
		checkOutTime: "12:00",
		amenities: [
			"Restaurant",
			"Bar",
			"Tours guiados",
			"Caminatas nocturnas",
			"Observación de fauna",
			"Aire acondicionado",
			"Agua caliente",
			"WiFi limitado",
		],
		image: [
			"https://iquitosexpedition.com/galeria-inicial/heliconia-amazon-river-lodge.avif",
			"https://iquitosexpedition.com/breadcrumb/bg-heliconia.avif",
		],
		rating: 4.7,
		reviewCount: 189,
		starRating: 4,
	},
	irapay: {
		name: "Irapay Amazon Lodge",
		checkInTime: "14:00",
		checkOutTime: "12:00",
		amenities: [
			"Piscina",
			"Restaurant con gastronomía local",
			"Bar",
			"Tours incluidos",
			"Excursiones guiadas",
			"Aire acondicionado",
			"Agua caliente",
			"Terraza con vista al río",
			"WiFi",
		],
		image: [
			"https://iquitosexpedition.com/galeria-inicial/irapay-amazon-lodge.avif",
			"https://iquitosexpedition.com/breadcrumb/bg-irapay.avif",
		],
		rating: 4.8,
		reviewCount: 267,
		starRating: 5,
	},
	cumaceba: {
		name: "Cumaceba Lodge",
		checkInTime: "14:00",
		checkOutTime: "12:00",
		amenities: [
			"Restaurant",
			"Tours guiados",
			"Caminatas nocturnas",
			"Excursiones en bote",
			"Naturaleza virgen",
			"Mosquiteros",
			"Agua caliente",
			"Ventiladores",
		],
		image: [
			"https://iquitosexpedition.com/galeria-inicial/cumaceba-lodge.avif",
			"https://iquitosexpedition.com/breadcrumb/bg-cumaceba.avif",
		],
		rating: 4.6,
		reviewCount: 145,
		starRating: 4,
	},
};

/**
 * Usage in Astro components:
 * 
 * import { toursConfig } from '../utils/schemaConfig.ts';
 * 
 * <Layout
 *   schemaType="Tour"
 *   tourDetails={toursConfig.cityTour}
 * >
 */
