# Alessandro Guglielmo — Portfolio

Sito portfolio di Alessandro Guglielmo, Football Analyst.
Vite + React + TypeScript + Tailwind CSS. Completamente statico, bilingue IT/EN, deployabile su GitHub Pages.

**Online su:** https://aleguglielmo22-hub.github.io/alessandroguglielmo/

---

## 1. Avviare in locale

Serve [Node.js](https://nodejs.org) 20 o superiore.

```bash
npm install     # solo la prima volta
npm run dev     # avvia il sito su http://localhost:5173/alessandroguglielmo/
```

Altri comandi:

| Comando | Cosa fa |
| --- | --- |
| `npm run dev` | Server di sviluppo con ricarica automatica |
| `npm run build` | Genera il sito statico in `dist/` |
| `npm run preview` | Anteprima locale della build di produzione |
| `npm run deploy` | Build + pubblicazione su GitHub Pages |
| `npm run lint` | Controllo del codice |

---

## 2. Dove sta cosa

```
public/
  images/            ← foto e loghi (vedi §3)
  favicon.svg
src/
  data/              ← IL CONTENUTO DEL SITO (§4)
    profile.ts         contatti, social, link al CV
    education.ts       formazione + elenco software/strumenti
    experiences.ts     esperienze lavorative
    services.ts        i 5 servizi (+ prezzi opzionali)
    works.ts           i lavori mostrati in /analisi e in homepage
  i18n/              ← TESTI DELL'INTERFACCIA (§5)
    it.ts              italiano
    en.ts              inglese
  sections/          ← le sezioni della homepage
  components/        ← navbar, footer, card, icone…
  pages/             ← Home.tsx e Analisi.tsx
```

Regola generale: **per cambiare i contenuti non serve mai toccare i file in `sections/`,
`components/` o `pages/`.** Tutto si modifica in `src/data/` e `src/i18n/`.

---

## 3. Le immagini

Stanno in `public/images/`. I loghi sono già tutti caricati:

| File | Dove appare |
| --- | --- |
| ⚠️ `foto-profilo.jpeg` | Hero e sezione "Chi Sono" — **DA CARICARE** |
| `guidonia-montecelio.png` | Esperienza Guidonia Montecelio 1937 |
| `fc-trapani-1905.png` | Esperienza FC Trapani 1905 |
| `scout-underrated.jpg` | Esperienza Scout Underrated |
| `napolinetwork.jpg` | Esperienza NapoliNetwork.com |
| `spaceviola.webp` | Esperienza SpaceViola.com |
| `rever-roma.jpeg` | Esperienza Rever Roma |
| `universita-san-raffaele.svg` | Formazione — Università San Raffaele |
| `boolean.png` | Formazione — Boolean |
| `the-fa.png` | Formazione — The Football Association |
| `match-analysis-academy.jpeg` | Formazione — Match Analysis Academy |
| `panini-dsp.jpeg` | Formazione — Panini Digital Sport Platform |
| `lf-scouting.webp` | Formazione — LF Scouting |
| `emiscouting.png` | Formazione — Emiscouting |

**Manca solo la foto profilo**: mettila in `public/images/foto-profilo.jpeg`
(consigliato: verticale, ritaglio 4:5, almeno 800×1000 px). Finché non c'è, al suo posto
compare un segnaposto "AG" — il sito non si rompe. Stesso discorso per i loghi: se un
file manca vengono mostrate le iniziali dell'ente.

Se cambi l'estensione di un file, aggiorna il campo `logo` in `src/data/education.ts` o
`src/data/experiences.ts`.

### Il CV

Il PDF è già in `public/Alessandro_Guglielmo_CV.pdf` e i pulsanti "Scarica CV" sono attivi.
Per aggiornarlo, sostituisci il file mantenendo lo stesso nome. Per cambiare nome (o per
nascondere i pulsanti mettendo `null`) modifica `cvUrl` in `src/data/profile.ts`.

---

## 4. Modificare i contenuti

Ogni testo che cambia tra italiano e inglese si scrive come `{ it: '…', en: '…' }`.

### Aggiungere un lavoro (`src/data/works.ts`)

Basta aggiungere un oggetto all'array `works`. Comparirà **subito in `/analisi`** e —
se è tra i 4 più recenti per data — anche **nell'anteprima in homepage**.

```ts
{
  id: 'match-studio-3',                       // identificativo univoco
  title:       { it: 'Titolo', en: 'Title' },
  description: { it: 'Descrizione…', en: 'Description…' },
  category: 'match-studio',                   // match-studio | team-studio | player-report | articoli
  type: 'Video',                              // Video | PDF | Report | Slides | Articolo
  date: '18/04/2025',                         // sempre GG/MM/AAAA
  thumbnail: 'lavori/nome-file.jpg',          // file in public/images/, oppure null
  link: 'https://youtu.be/…',                 // null = card non cliccabile
},
```

### Modificare un'esperienza o un titolo di studio

`src/data/experiences.ts` e `src/data/education.ts`. L'ordine dell'array è l'ordine
mostrato a schermo. Nella formazione, `year: 'ongoing'` stampa "In corso" / "Ongoing".

### Software & Strumenti

In fondo a `src/data/education.ts` c'è l'array `tools`: aggiungi o togli una stringa.
Nessun livello, nessuna percentuale — solo nomi.

### Contatti e social

`src/data/profile.ts`, array `contactLinks`.

---

## 5. Modificare i testi dell'interfaccia

Titoli di sezione, pulsanti, bio, statistiche: `src/i18n/it.ts` e `src/i18n/en.ts`.
I due file hanno la stessa identica struttura — modifica sempre entrambi.

**Bio evidenziata in arancione**: nel blocco `about` c'è `highlights`, l'elenco dei
frammenti che vengono colorati dentro la biografia. Il testo deve corrispondere
**esattamente** (apostrofi compresi) a quello presente in `bio`.

---

## 6. Attivare i prezzi dei servizi

Il data model dei servizi è già predisposto. Oggi `price` è `null` per tutti e la card
non mostra nulla. Per attivare un prezzo apri `src/data/services.ts` e valorizza il campo:

```ts
{
  id: 'team-studio',
  number: '01',
  title: { it: 'Team Studio', en: 'Team Studio' },
  description: { … },
  price: { it: 'da 250 €', en: 'from €250' },        // ← prima era null
  cta:   { it: 'Richiedi il servizio', en: 'Request it' },  // ← opzionale
},
```

La card mostra automaticamente il prezzo e, se presente, il pulsante che porta ai
contatti. **Nessuna modifica al codice dei componenti.**

---

## 7. Deploy su GitHub Pages

Il repository di destinazione è `aleguglielmo22-hub/alessandroguglielmo`, quindi in
`vite.config.ts` il campo `base` è impostato a `/alessandroguglielmo/`.
Se un giorno il sito passa su un dominio proprio, basta cambiarlo in `'/'`.

Ci sono due modi per pubblicare — **scegline uno**.

### Modo A — automatico ad ogni push (consigliato)

Il file `.github/workflows/deploy.yml` è già pronto.

1. Su GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Fai push su `main`:

```bash
git add .
git commit -m "Aggiornamento contenuti"
git push
```

Il sito si aggiorna da solo in un paio di minuti.

### Modo B — manuale dal terminale

```bash
npm run deploy
```

Compila il sito e lo pubblica sul branch `gh-pages`.
Su GitHub imposta **Settings → Pages → Source: Deploy from a branch → `gh-pages` / root**.

### Prima pubblicazione

```bash
git init
git add .
git commit -m "Primo commit"
git branch -M main
git remote add origin https://github.com/aleguglielmo22-hub/alessandroguglielmo.git
git push -u origin main
```

> `npm run build` genera anche `dist/404.html` (copia di `index.html`) e `dist/.nojekyll`.
> Servono perché GitHub Pages gestisca correttamente l'indirizzo `/analisi` anche
> ricaricando la pagina. Non cancellarli.

---

## 8. Design system

Colori e font sono tutti definiti in un unico punto: il blocco `@theme` in
`src/index.css`. Cambiando quei valori cambia l'intero sito.

| Variabile | Chiaro | Scuro | Uso |
| --- | --- | --- | --- |
| `--color-canvas` | `#f9f7f4` | `#101010` | Sfondo principale |
| `--color-surface` | `#ffffff` | `#181817` | Sezioni alternate |
| `--color-ink` | `#141414` | `#f4f1ec` | Testo principale |
| `--color-muted` | `#7a7a7a` | `#9a938c` | Testo secondario |
| `--color-line` | `#e6e2dc` | `#2b2926` | Bordi e divisori |
| `--color-night` | `#141414` | `#141414` | Sezione Esperienze (scura sempre) |
| `--color-accent` | `#ff6b00` | `#ff6b00` | Accento |
| `--color-accent-hover` | `#e86000` | `#e86000` | Accento in hover |
| `--font-display` | Big Shoulders Display | idem | Titoli e numeri grandi |
| `--font-body` | Figtree | idem | Testo, pulsanti, etichette |

### Regola tipografica

Big Shoulders Display è un carattere **condensato da titolazione**: sotto i ~18px diventa
troppo stretto e poco leggibile. Vale quindi questa regola in tutto il sito:

- **`font-display`** → titoli (h1/h2/h3), numeri grandi (statistiche, numeri dei servizi),
  logo AG. Sempre a pesi leggeri: `font-medium` (500) sui titoloni, `font-semibold` (600)
  sui titoli di card.
- **`font-body`** → tutto il resto: paragrafi, pulsanti, etichette di sezione, badge,
  chip, date, tab, voci di navigazione.

Se aggiungi un titolo nuovo, ricordati che essendo condensato ha bisogno di un corpo
maggiore (~25%) rispetto a un carattere normale per avere la stessa presenza visiva.

### Tema scuro

Il sito segue **l'impostazione del dispositivo**: chi ha il sistema in modalità scura vede
la versione scura, senza nessun pulsante da premere. Funziona così: nel blocco
`@media (prefers-color-scheme: dark)` di `src/index.css` vengono ridefinite le stesse
variabili, e tutte le classi del sito (che le leggono via `var()`) si adattano da sole.

Per aggiustare il tema scuro basta quindi cambiare i valori in quel blocco — non serve
toccare nessun componente. Attenzione a due token pensati per restare fissi: `--color-night`
(la sezione Esperienze resta scura anche nel tema chiaro) e i due accenti arancioni.

Il logo "AG" della navbar è testuale (`src/components/Navbar.tsx`, costante `LOGO`) ed è
pensato come segnaposto: quando ci sarà un logo vero basta sostituirlo con un `<img>`.
