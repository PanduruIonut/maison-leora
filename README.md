# Maison Léora

Site de prezentare pentru un atelier parizian de coafor de lux — coafor pentru femei, cu programări online și o mică boutique de produse.

Implementare statică, fără build step: HTML semantic + CSS cu design tokens + JavaScript vanilla. Interfața este integral în limba română.

## Funcționalități

- **Home** — hero, marquee animat, secțiunea „Atelierul" cu contoare animate, servicii, galerie masonry cu lightbox, vitrină de produse, testimoniale rotative, grilă Instagram, contact
- **Magazin** — filtrare pe categorii, căutare live, sortare, vizualizare rapidă a produsului
- **Rezervare** — flux în 3 pași (serviciu → dată & oră → detalii) cu calendar, validare și ecran de confirmare
- **Coș** — sertar lateral cu cantități și subtotal, listă de favorite
- Responsive (desktop / tabletă / mobil), animații la scroll

## Structură

```
index.html        # markup + pagina Home statică
css/styles.css    # design tokens + stiluri pe componente
js/app.js         # stare, date, randare și interacțiuni
images/           # fotografii
```

## Rulare locală

```bash
python3 -m http.server 8000 --directory .
# deschide http://localhost:8000/
```

## Note

Front-end demonstrativ: rezervările și finalizarea comenzii sunt simulate (fără backend). Pașii următori posibili: backend pentru programări, plăți și un CMS pentru conținut.

---

Design inițial: Claude Design handoff. Implementare: Claude Code.
