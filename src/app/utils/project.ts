interface Projects {
  slug: string;
  image: string;
  video: string;
  githublinks: string[];
  Techstack: string[];
  maininfo: string;
  otherInfos?: string;
  otherInfos2?: string;
  lastInfo?: string;
  date: string;
  gif1?: string;
  gif2?: string;
  gif3?: string;
  gif4?: string;
}

const ProjectList: Projects[] = [
  {
    slug: "Resonus",
    image: "/Resonus.png",
    video: "https://www.youtube.com/watch?v=jZObPe_78oA",
    githublinks: [
      "Backend: https://github.com/GozziManuel/Backend----Resonus",
      "Frontend: https://github.com/GozziManuel/Resonus",
    ],
    Techstack: ["CSS", "MySQL", "Express.js", "React.js", "HTML", "JavaScript"],

    //
    maininfo: `Resonus è una piattaforma E-Commerce full-stack moderna e reattiva, progettata da zero con l'obiettivo di offrire un'esperienza d'acquisto snella, senza frizioni e ad alte prestazioni.
    L'architettura è focalizzata sul concetto di Guest Checkout, consentendo agli utenti di completare gli acquisti in pochi passaggi senza l'obbligo di creare un account. 
    Tutto il sistema poggia su una solida struttura backend in Node.js/MySQL che gestisce la logica del carrello, la storicizzazione degli ordini, i filtri dinamici e la messaggistica transazionale.`,

    //
    otherInfos: `
    URL Sync Search & Filtering: Sistema di filtraggio e ricerca avanzata (sia interna al sito che da query esterne) con aggiornamento dinamico dei parametri nell'URL per permettere la condivisione diretta di una pagina filtrata.
    Badge Automatici da Metriche DB: Assegnazione e rendering dinamico dei badge prodotto basati sullo stato reale del DB:
    Bestseller: Calcolato in base allo storico vendite (sales_count).
    In Evidenza: Gestito dal flag is_featured.
    Esaurito: Aggiornato in tempo reale in base alla giacenza dello stock.
    `,

    //
    otherInfos2: `Media & Gallery: Carosello immagini interattivo e responsive integrato nella scheda di ciascun prodotto.
    Toast & Popup Notification: Notifiche a comparsa temporizzate per confermare azioni immediate (aggiunta/rimozione articoli dal carrello).
    Async Loaders & Form Validation: Validazione degli input in tempo reale e spinner di caricamento per gestire lo stato visivo durante l'attesa delle chiamate API asincrone.`,

    //
    lastInfo: `
    E-Mail Transazionali (Nodemailer): Invio automatico ed immediato dell'e-mail di conferma d'acquisto contenente il riepilogo dettagliato dell'ordine tramite template HTML responsive.
    Consulta Cronologia: Sezione dedicata per la visualizzazione e il recupero degli acquisti effettuati.
    `,

    //
    date: "07/26 - 08/26",
    gif1: "/Resonus/ResonusGIF.gif",
    gif2: "/Resonus/ResonusGIF2.gif",
    gif3: "/Resonus/ResonusGIF3.gif",
    gif4: "/Resonus/ResonusGIF4.gif",
  },

  // PocketGuide
  {
    slug: "PocketGuide",
    image: "/PocketGuide.png",
    video: "https://www.youtube.com/watch?v=Sav5y6vNChI",
    githublinks: [
      "Frontend: https://github.com/GozziManuel/progetto-finale-spec-frontend-front/tree/main/frontend",
    ],
    Techstack: ["CSS", "REST APIs", "React.js", "HTML", "JavaScript"],

    //
    maininfo: `
    Single Page Application (SPA) in React sviluppata come progetto di fine modulo durante il corso Boolean. L'applicazione simula uno scenario aziendale reale per la gestione e l'analisi di una risorsa (Smartphone), integrandosi con l'infrastruttura backend e il database forniti dal team didattico.`,

    //
    otherInfos: `
    Comparazione Risorse Side-by-Side: Modulo dinamico per il confronto affiancato delle specifiche di più elementi, selezionabili direttamente sia dalla vista lista che dalla pagina di dettaglio.
    Operazioni CRUD Asincrone: Connessione diretta con l'infrastruttura server tramite chiamate REST (GET, POST, PUT, DELETE) per il recupero e l'aggiornamento dei dati in tempo reale.
    `,

    //
    otherInfos2: `
    Validazione Input & Feedback: Form di inserimento e modifica provvisti di validazione in tempo reale e messaggi di feedback per l'utente.
    Persistenza Dati & Stati Vuoti: Sistema globale di salvataggio dei preferiti con sincronizzazione in localStorage e gestione visiva dedicata per i casi limite ("Nessun risultato trovato" o liste vuote).
    `,

    //
    lastInfo: `
    Ricerca con Debouncing: Barra di ricerca client-side con debouncing integrato per prevenire ricalcoli superflui durante la digitazione.
    Filtri & Multi-Ordinamento: Selettore dinamico per categoria e ordinamento alfabetico multi-parametro (per nome e categoria).
    `,
    date: "06/26 - 06/26",
    gif1: "/PocketGuide/PocketGuideGIF.gif",
    gif2: "/PocketGuide/PocketGuideGIF2.gif",
    gif3: "/PocketGuide/PocketGuideGIF3.gif",
    gif4: "/PocketGuide/PocketGuideGIF4.gif",
  },
];

export { ProjectList };
