# Schema.org Optimization Guide

## Overview

El sitio Iquitos Expedition ahora tiene optimización completa de schema.org para mejorar visibilidad en búsqueda y rich snippets. Esta documentación explica la estructura y cómo mantenerla.

## Estructura de Schema Implementada

### 1. **TravelAgency Schema (Base)**

Todas las páginas incluyen el schema base de TravelAgency con:

- **Nombre**: Iquitos Expedition
- **Teléfono**: +51968786482
- **Email**: info@iquitosexpedition.com
- **Ubicación**: Iquitos, Loreto, Perú
- **Redes Sociales**: Facebook, Instagram, TikTok

Este schema se aplica automáticamente desde `Layout.astro`.

### 2. **Tour Schema**

Para páginas de tours, se implementa schema `Tour` o `Product` con:

```typescript
tourDetails={{
    name: "Tour Name",
    duration: "P3D",           // ISO 8601 format
    durationDays: 3,
    price: 450,                // or priceMin/priceMax
    currency: "USD",
    availability: "https://schema.org/InStock",
    location: "Ubicación específica",
    locationCoords: { lat: -3.7436, lng: -73.2516 },
    image: ["url1", "url2"],
    rating: 4.7,              // 1-5 rating
    reviewCount: 156
}}
```

**Duración ISO 8601 (Ejemplos)**:
- `PT8H` = 8 horas (full day tours)
- `P3D` = 3 días
- `P4D` = 4 días
- `P1W` = 1 semana

**Páginas con Tour Schema**:
- Tours diarios (City Tour, Isla Monos, Mariposario, etc.)
- Tours multi-día (Pacaya Samiria, Heliconia, Irapay, Cumaceba)

### 3. **Hotel Schema**

Para páginas de lodges, se implementa schema `Hotel` con:

```typescript
lodgeDetails={{
    name: "Lodge Name",
    priceMin: 180,
    priceMax: 450,
    currency: "USD",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    amenities: [
        "Restaurant",
        "Bar",
        "Tours guiados",
        "Aire acondicionado"
    ],
    image: ["url1", "url2"],
    rating: 4.7,
    reviewCount: 189,
    starRating: 4              // 1-5 stars
}}
```

**Lodges Optimizados**:
- Heliconia Amazon River Lodge
- Irapay Amazon Lodge
- Cumaceba Lodge

## Cómo Actualizar Schema

### 1. Usar Archivo de Configuración

Opción preferida - edita `src/utils/schemaConfig.ts`:

```typescript
// Agregar a toursConfig o lodgesConfig
myNewTour: {
    name: "New Tour Name",
    duration: "P3D",
    price: 500,
    // ... resto de propiedades
}
```

Luego en el componente Astro:

```astro
---
import { toursConfig } from '../utils/schemaConfig.ts';
---

<Layout
    schemaType="Tour"
    tourDetails={toursConfig.myNewTour}
>
```

### 2. Agregar Schema Directo en Página

Para tours/lodges individuales, edita directamente en el archivo `.astro`:

```astro
<Layout
    title="Tour Name"
    description="Tour description"
    schemaType="Tour"
    tourDetails={{
        name: "Tour Name",
        duration: "P3D",
        price: 450,
        priceMin: 400,
        priceMax: 500,
        currency: "USD",
        availability: "https://schema.org/InStock",
        location: "Iquitos, Perú",
        locationCoords: { lat: -3.7436, lng: -73.2516 },
        image: [
            "https://iquitosexpedition.com/image1.avif",
            "https://iquitosexpedition.com/image2.avif"
        ],
        rating: 4.7,
        reviewCount: 125
    }}
>
```

## Campos Importantes

### Tour Details

| Campo | Tipo | Requerido | Notas |
|-------|------|-----------|-------|
| `name` | string | Sí | Nombre del tour |
| `duration` | string | Sí | ISO 8601 format (PT8H, P3D, P1W) |
| `durationDays` | number | Sí | Días del tour |
| `price` | number | - | Precio fijo |
| `priceMin` | number | - | Precio mínimo (si rango) |
| `priceMax` | number | - | Precio máximo (si rango) |
| `currency` | string | - | "USD" por defecto |
| `availability` | string | - | URL de disponibilidad |
| `location` | string | Sí | Ubicación del tour |
| `locationCoords` | object | Sí | `{ lat, lng }` coordenadas GPS |
| `image` | string[] | Sí | Array de URLs de imágenes |
| `rating` | number | - | Calificación 1-5 |
| `reviewCount` | number | - | Total de reseñas |

### Lodge Details

| Campo | Tipo | Requerido | Notas |
|-------|------|-----------|-------|
| `name` | string | Sí | Nombre del lodge |
| `priceMin` | number | - | Precio mínimo |
| `priceMax` | number | - | Precio máximo |
| `currency` | string | - | "USD" por defecto |
| `checkInTime` | string | - | Ej: "14:00" |
| `checkOutTime` | string | - | Ej: "12:00" |
| `amenities` | string[] | - | Lista de servicios |
| `image` | string[] | Sí | Array de URLs de imágenes |
| `rating` | number | - | Calificación 1-5 |
| `reviewCount` | number | - | Total de reseñas |
| `starRating` | number | - | Estrellas 1-5 |

## Coordenadas Geográficas

**Iquitos**: `-3.7436, -73.2516`

Para otros lugares, use Google Maps o sitios similares.

## Formatos de Duración ISO 8601

```
P       = Período
T       = Separador de tiempo
Y       = Años
M       = Meses (antes de T) o Minutos (después de T)
W       = Semanas
D       = Días
H       = Horas
S       = Segundos

Ejemplos:
PT8H      = 8 horas
P1D       = 1 día
P3D       = 3 días
P1W       = 1 semana
P3DT4H    = 3 días y 4 horas
PT2H30M   = 2 horas y 30 minutos
```

## Validación

Valida los cambios en:

- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/

Pegá el URL de la página o el código HTML para validar.

## Beneficios de Implementar Schema.org

1. **Rich Snippets**: 
   - Precios visibles en resultados de búsqueda
   - Calificaciones (stars, reviews)
   - Duración y ubicación del tour

2. **Google Features**:
   - Hotel carousel en búsqueda
   - Tour booking panel
   - Product listing

3. **SEO**:
   - Mejor CTR (click-through rate)
   - Mejor posicionamiento
   - Información más relevante en SERPs

## Páginas Actualmente Optimizadas

### Tours Diarios
- [x] City Tour
- [x] Isla de los Monos
- [x] Mariposario
- [x] Crea y Quiticocha
- [x] El Encanto Amazónico
- [ ] Aventura Extrema (Pendiente)

### Tours Pacaya Samiria
- [x] 3 Días 2 Noches
- [x] 4 Días 3 Noches
- [x] 8 Días 7 Noches
- [ ] 5 Días 4 Noches (Pendiente)
- [ ] 6 Días 5 Noches (Pendiente)

### Tours Heliconia
- [x] Inolvidable Río Amazonas (3D)
- [x] Maravillas de la Amazonía (4D)
- [ ] Cultura y Aventuras (5D)
- [ ] Explorando Amazonas (6D)

### Tours Irapay
- [x] Iquitos Relax (3D)
- [ ] Explorando Amazonas (4D)
- [ ] Iquitos de Aventura (5D)
- [x] Iquitos de Lujo (6D)

### Tours Cumaceba
- [x] 3 Días 2 Noches
- [ ] 4 Días 3 Noches
- [ ] 5 Días 4 Noches
- [ ] 6 Días 5 Noches

### Lodges
- [x] Heliconia Amazon River Lodge
- [x] Irapay Amazon Lodge
- [x] Cumaceba Lodge

## Próximos Pasos

1. Completar optimización de tours restantes
2. Agregar BreadcrumbList schema para navegación
3. Implementar Event schema para fechas específicas
4. Agregar VideoObject schema para videos de tours
5. Implementar Reservoir/NaturalReserve schema para Pacaya Samiria

## Contacto

Para preguntas sobre implementación:
- info@iquitosexpedition.com
- +51968786482
