---
trigger: always_on
description: "Compuerta estratégica obligatoria para visitcdmx.travel: ante cualquier idea o mejora propuesta por Diego, el agente debe detenerse y formular exactamente 10 preguntas estratégicas antes de editar archivos o ejecutar comandos."
---

# Protocolo Obligatorio de Descubrimiento Estratégico (10 Preguntas) — VisitCDMX.travel

## Contexto Invariable del Proyecto

- **Proyecto:** `visitcdmx-travel` (marca independiente operada por SAT Mexico Tours & Travel; prohibido imitar logotipos o gráfica oficial de la Marca Ciudad CDMX).
- **Stack:** Astro 7 + Tailwind CSS + Content Collections locales (JSON/MDX, sin CMS externo en MVP) + `src/config/theme.json` (preparado para clonación futura B2G) + Cloudflare Pages.
- **Idioma y Divisa:** Prioridad `EN / USD` en `/`, con cambio dinámico a `ES` en `MXN` o `USD` en `/es/` sincronizado con `BokunWidgets.setLanguage()` y `BokunWidgets.setCurrency()`.
- **Motor y Pagos:** Bókun (Booking Channel exclusivo `VisitCDMX.travel`, 8 productos únicos de SAT Mexico usando `#1230577` y excluyendo `#701338`) + Stripe México (evaluando Stripe Adaptive Pricing y MSI/OXXO/SPEI en MXN).

## Regla Inviolable (Hard Stop Gate)

Cada vez que Diego proponga una nueva idea, funcionalidad, mejora visual, cambio arquitectónico, integración o ajuste estratégico para `visitcdmx.travel`:

1. **PROHIBIDO EJECUTAR CAMBIOS INMEDIATOS:** No edites archivos (`edit_file`, `write_file`, creación o modificación de archivos), no generes código final ni ejecutes comandos de terminal (`run_command`) en el primer turno de respuesta.
2. **DETENERSE Y FORMULAR 10 PREGUNTAS ESTRATÉGICAS:** Antes de proponer un Implementation Plan o tocar el repositorio, responde **únicamente** con una validación breve de la idea (máximo 3 líneas) seguida de **exactamente 10 preguntas estratégicas numeradas del 1 al 10**, diseñadas para retar supuestos, descubrir casos borde y elevar la calidad del proyecto.
3. **COBERTURA OBLIGATORIA DE LAS 10 PREGUNTAS:** Distribuye las 10 preguntas cubriendo estas cinco dimensiones (2 preguntas por eje cuando aplique):
   - **Conversión y UX (estándar Arival / Tourpreneur):** impacto en móvil, barra sticky, prueba social (`4.8★ / 3,698 reseñas`), claridad de inclusiones (`No Surprise Fees`) y fricción de checkout.
   - **SEO, GEO/AEO y Rendimiento:** impacto en HTML estático en Astro 7, Core Web Vitals, `llms.txt`, Schema JSON-LD y elegibilidad en Google Things to Do.
   - **Integración Bókun / Stripe México:** efecto en el canal `VisitCDMX.travel`, widgets diferidos (`defer`), cambio dinámico `EN/USD ↔ ES/MXN-USD`, Adaptive Pricing/MSI o medición GA4/GTM.
   - **Arquitectura Limpia y Futura Escalabilidad B2G:** si el cambio mantiene parametrizado `theme.json` y Content Collections sin acoplar lógica rígida de CDMX que impida clonar a Veracruz o Morelia después.
   - **Riesgo Operativo, Legal o de Marca:** higiene ante Marca Ciudad CDMX (FMPT/IMPI), prevención de sobreventa en Resource Management, accesibilidad o mantenimiento continuo.
4. **FORMATO DE CADA PREGUNTA:** Cada pregunta debe explicar en una línea qué decisión concreta desbloquea e incluir una recomendación inicial marcada como **(Opción sugerida)** para agilizar la respuesta de Diego.
5. **ESPERAR CONFIRMACIÓN EXPLÍCITA:** Solo después de que Diego responda (total o parcialmente) las preguntas y confirme el rumbo, procede a generar el Implementation Plan y ejecutar los cambios en el código.

## Válvula de Escape (Excepciones explícitas)

Omite las 10 preguntas **únicamente** si el mensaje de Diego cumple alguna de estas condiciones exactas:

- Incluye explícitamente la etiqueta `[EJECUTAR DIRECTO]` al inicio del prompt (por ejemplo, para ejecutar el scaffolding ya aprobado del prototipo inicial).
- Se trata de una corrección trivial y puramente mecánica (un error ortográfico, un fallo de sintaxis de compilación o reiniciar el servidor local) que no altera arquitectura, diseño ni lógica de negocio.
