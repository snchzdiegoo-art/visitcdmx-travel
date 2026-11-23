import theme from '../config/theme.json';
import bokun from '../config/bokun.json';

export type Locale = 'en' | 'es';
export type Currency = 'USD' | 'MXN';

export const MXN_RATE = theme.destination.exchangeRateMxnPerUsd;

export function formatPrice(priceUsd: number, currency: Currency): string {
  if (currency === 'MXN') {
    const mxn = Math.round(priceUsd * MXN_RATE);
    return `$${mxn.toLocaleString('en-US')} MXN`;
  }
  return `$${Math.round(priceUsd).toLocaleString('en-US')} USD`;
}

export function getTourUrl(slug: string, locale: Locale): string {
  return locale === 'es' ? `/es/experiencias/${slug}/` : `/experiences/${slug}/`;
}

export function getHomeUrl(locale: Locale): string {
  return locale === 'es' ? '/es/' : '/';
}

export function getPlanUrl(locale: Locale): string {
  return locale === 'es' ? '/es/planea-tu-viaje/' : '/plan-your-trip/';
}

export function getAlternateUrl(pathname: string, targetLocale: Locale): string {
  const clean = pathname.endsWith('/') ? pathname : `${pathname}/`;
  if (targetLocale === 'es') {
    if (clean === '/') return '/es/';
    if (clean.startsWith('/experiences/')) {
      return clean.replace('/experiences/', '/es/experiencias/');
    }
    if (clean.startsWith('/plan-your-trip/')) {
      return '/es/planea-tu-viaje/';
    }
    if (clean.startsWith('/es/')) return clean;
    return '/es/';
  } else {
    if (clean === '/es/' || clean === '/') return '/';
    if (clean.startsWith('/es/experiencias/')) {
      return clean.replace('/es/experiencias/', '/experiences/');
    }
    if (clean.startsWith('/es/planea-tu-viaje/')) {
      return '/plan-your-trip/';
    }
    return '/';
  }
}

export function getWhatsappUrl(locale: Locale, contextTitle?: string): string {
  const raw =
    import.meta.env.PUBLIC_WHATSAPP_NUMBER ||
    bokun.whatsappDefaultNumber ||
    '5219981234567';
  const text =
    locale === 'es'
      ? contextTitle
        ? `Hola equipo de VisitCDMX.travel (SAT Mexico), tengo una consulta sobre: ${contextTitle}`
        : 'Hola equipo de VisitCDMX.travel (SAT Mexico), me gustaría ayuda para planear mis experiencias en CDMX.'
      : contextTitle
        ? `Hi VisitCDMX.travel (SAT Mexico) team, I have a question about: ${contextTitle}`
        : 'Hi VisitCDMX.travel (SAT Mexico) team, I would love help planning my Mexico City experiences.';
  return `https://wa.me/${raw}?text=${encodeURIComponent(text)}`;
}

export function getBokunChannelUuid(): string {
  return (
    import.meta.env.PUBLIC_BOKUN_CHANNEL_UUID ||
    bokun.bookingChannelUUID ||
    ''
  ).trim();
}

export const uiCopy = {
  en: {
    nav: {
      experiences: 'Experiences',
      neighborhoods: 'Neighborhoods',
      seasonal: 'Festivals',
      transfers: 'Plan Your Trip & Transfers',
    },
    trustBar: `Operated by ${theme.operator.shortName} · ${theme.operator.yearsOperating} Years in Mexico · ${theme.operator.googleRating}★ (${theme.operator.googleReviewCount.toLocaleString('en-US')}+ Google Reviews) · Instant Confirmation`,
    ctaBook: 'Check Live Availability',
    ctaExplore: 'Explore Experiences',
    directRate: 'Direct Web Rate',
    saveVsOta: 'Direct rate vs.',
    from: 'From',
    perPerson: 'per traveler',
    perVehicle: 'per private vehicle',
    smallGroup: 'Small Group',
    privateTour: 'Private',
    maxGuests: 'Max',
    guests: 'guests',
    noSurpriseTitle: 'Exact Price · Included vs. Not Included (No Surprise Fees)',
    included: 'Included in Your Rate',
    notIncluded: 'Not Included',
    instantConfirmation: 'Instant Bókun confirmation + WhatsApp pick-up details 24h before departure',
    mxnPaymentsNote: 'Paying in MXN? Switch currency to unlock MSI, OXXO & SPEI via Stripe Mexico.',
    usdPaymentsNote: 'Instant USD checkout via Stripe · Apple Pay, Google Pay & major cards.',
    whatsappHelp: 'WhatsApp Concierge',
    planTripFab: 'Plan Your Trip',
  },
  es: {
    nav: {
      experiences: 'Experiencias',
      neighborhoods: 'Colonias y Zonas',
      seasonal: 'Festividades',
      transfers: 'Planea tu Viaje y Traslados',
    },
    trustBar: `Operado por ${theme.operator.shortName} · ${theme.operator.yearsOperating} Años en México · ${theme.operator.googleRating}★ (${theme.operator.googleReviewCount.toLocaleString('en-US')}+ Reseñas en Google) · Confirmación Inmediata`,
    ctaBook: 'Ver Disponibilidad en Vivo',
    ctaExplore: 'Explorar Experiencias',
    directRate: 'Tarifa Directa Web',
    saveVsOta: 'Tarifa directa vs.',
    from: 'Desde',
    perPerson: 'por viajero',
    perVehicle: 'por vehículo privado',
    smallGroup: 'Grupo Pequeño',
    privateTour: 'Privado',
    maxGuests: 'Máx.',
    guests: 'viajeros',
    noSurpriseTitle: 'Precio Exacto · Incluido vs. No Incluido (Cero Cargos Sorpresa)',
    included: 'Incluido en tu Tarifa',
    notIncluded: 'No Incluido',
    instantConfirmation: 'Confirmación instantánea vía Bókun + detalles de pick-up por WhatsApp 24 h antes',
    mxnPaymentsNote: 'En MXN con Stripe México: Meses Sin Intereses (MSI), OXXO, SPEI, Apple Pay y tarjetas.',
    usdPaymentsNote: 'Pago en USD con Stripe · Apple Pay, Google Pay y tarjetas internacionales.',
    whatsappHelp: 'Concierge WhatsApp',
    planTripFab: 'Planea tu Viaje',
  },
} as const;
