import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch: process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main",
  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  // Uncomment to allow cross-origin requests from non-localhost origins
  // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
  // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
  // server: {
  //   allowedOrigins: ['https://your-codespace.github.dev'],
  // },
  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
	// KOLEKCJA: AKTUALNOŚCI PL
      {
        name: 'news_pl',
        label: 'Aktualności PL',
		type: 'document',
        path: 'src/content/news/pl',
		format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Tytuł', 
			isTitle: true, 
			required: true
          },
		  { 
		    type: "datetime", 
			name: "date", 
			label: "Data publikacji", 
			required: true },
		  { 
			type: "string", 
			name: "description", 
			label: "Krótki opis (Zajawka / SEO)", 
			ui: { component: "textarea" }
		  },
		  { 
			type: "string", 
			name: "author", 
			label: "Autor", 
			ui: { defaultValue: "Janusz Sobczyk" }
		  },
          { 
		    type: "image", 
			name: "image", 
			label: "Zdjęcie główne" },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Treść wpisu',
            isBody: true,
          },
            ],
      },
	  
	// KOLEKCJA: AKTUALNOŚCI EN
      {
        name: 'news_en',
        label: 'Aktualności EN',
		type: 'document',
        path: 'src/content/news/en',
		format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Tytuł', 
			isTitle: true, 
			required: true
          },
		  { 
		    type: "datetime", 
			name: "date", 
			label: "Data publikacji", 
			required: true },
		  { 
			type: "string", 
			name: "description", 
			label: "Krótki opis (Zajawka / SEO)", 
			ui: { component: "textarea" }
		  },
		  { 
			type: "string", 
			name: "author", 
			label: "Autor", 
			ui: { defaultValue: "Janusz Sobczyk" }
		  },
          { 
		    type: "image", 
			name: "image", 
			label: "Zdjęcie główne" },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Treść wpisu',
            isBody: true,
          },
            ],
      },	
	  
    // SINGLETONY: TŁUMACZENIA
      {
        name: "translations",
        label: "Teksty na stronie",
        type: "document",
        path: "src/i18n",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false }, // Brak możliwości usunięcia albo dodania języka bez dewelopera
        },
        fields: [
          { type: "string", name: "panel_gorny_o_nas", label: "Panel Górny - O nas" },
          { type: "string", name: "panel_gorny_galeria", label: "Panel Górny - Galeria" },
          { type: "string", name: "panel_gorny_aktualnosci", label: "Panel Górny - Aktualności" },
          { type: "string", name: "panel_gorny_kontakt", label: "Menu - Kontakt" },
          { type: "string", name: "strona_tytul", label: "Tytuł główny strony" },
		  { type: "string", name: "strona_podtytul", label: "Podtytuł główny" },
		  { type: "string", name: "guzik_szczegoly", label: "Guzik - zobacz więcej" },
		  { type: "string", name: "guzik_powrot", label: "Guzik - powrót" },
		  
		  { type: "string", name: "o_nas_skrot", label: "Sekcja 'O nas' - skrót" },
		  { type: "string", name: "o_nas_tytul", label: "'O nas' - tytuł" },
		  { type: "string", name: "o_nas_opis", label: "'O nas' - opis krótki" },
		  { type: "string", name: "o_nas_tworzywa_skrot", label: "'O nas' - opis tworzywa krótki" },
		  { type: "string", name: "o_nas_wstep", label: "'O nas' - opis wstęp" },
		  { type: "string", name: "o_nas_tworzywa_full", label: "'O nas' - opis tworzywa" },
		  { type: "string", name: "o_nas_cena", label: "'O nas' - opis cena" },
		  { type: "string", name: "o_nas_sekcja1_tytul", label: "'O nas' - opis sekcja 1 tytuł" },
		  { type: "string", name: "o_nas_sekcja1_lista1", label: "'O nas' - opis sekcja 1 punkt 1" },
		  { type: "string", name: "o_nas_sekcja1_lista2", label: "'O nas' - opis sekcja 1 punkt 2" },
		  { type: "string", name: "o_nas_sekcja1_lista3", label: "'O nas' - opis sekcja 1 punkt 3" },
		  { type: "string", name: "o_nas_sekcja1_lista4", label: "'O nas' - opis sekcja 1 punkt 4" },
		  { type: "string", name: "o_nas_sekcja2_tytul", label: "'O nas' - opis sekcja 2 tytuł" },
		  { type: "string", name: "o_nas_sekcja2_lista1", label: "'O nas' - opis sekcja 2 punkt 1" },
		  { type: "string", name: "o_nas_sekcja2_lista2", label: "'O nas' - opis sekcja 2 punkt 2" },
		  { type: "string", name: "o_nas_sekcja2_lista3", label: "'O nas' - opis sekcja 2 punkt 3" },
		  { type: "string", name: "o_nas_sekcja3_tytul", label: "'O nas' - opis sekcja 3 tytuł" },
		  { type: "string", name: "o_nas_sekcja3_opis", label: "'O nas' - opis sekcja 3 opis" },
		  { type: "string", name: "o_nas_sekcja4_tytul", label: "'O nas' - opis sekcja 4 tytuł" },
		  { type: "string", name: "o_nas_sekcja4_opis", label: "'O nas' - opis sekcja 4 opis" },
		  
		  { type: "string", name: "galeria_skrot", label: "Sekcja 'Galeria' - skrót" },
		  { type: "string", name: "galeria_tytul", label: "'Galeria' - tytuł" },
		  { type: "string", name: "galeria_opis", label: "'Galeria' - opis" },
		  { type: "string", name: "galeria_sekcja1_tytul", label: "'Galeria' - sekcja 1 tytuł" },
		  { type: "string", name: "galeria_sekcja1_opis", label: "'Galeria' - sekcja 1 opis" },
		  { type: "string", name: "galeria_sekcja2_tytul", label: "'Galeria' - sekcja 2 tytuł" },
		  { type: "string", name: "galeria_sekcja2_opis", label: "'Galeria' - sekcja 2 opis" },
		  { type: "string", name: "galeria_rozszerzona_tytul", label: "'Galeria' - widok rozszerzony - tytuł" },
		  { type: "string", name: "galeria_rozszerzona_przycisk", label: "'Galeria' - widok rozszerzony - przycisk" },
		  
		  { type: "string", name: "aktualnosci_skrot", label: "Sekcja 'Aktualności' - skrót" },
		  { type: "string", name: "aktualnosci_tytul", label: "'Aktualności' - tytuł" },
		  { type: "string", name: "aktualnosci_opis", label: "'Aktualności' - opis" },
		  
		  { type: "string", name: "kontakt_skrot", label: "Sekcja 'Kontakt' - skrót" },
		  { type: "string", name: "kontakt_tytul", label: "'Kontakt' - tytuł" },
		  { type: "string", name: "kontakt_podtytul", label: "'Kontakt' - podtytuł" },
		  { type: "string", name: "kontakt_adres", label: "'Kontakt' - adres" },
		  { type: "string", name: "kontakt_telefon_tytul", label: "'Kontakt' - telefon" },
		  { type: "string", name: "kontakt_telefon_numer", label: "'Kontakt' - telefon - numer" },
		  { type: "string", name: "kontakt_email", label: "'Kontakt' - email" }
        ],
      },
    ],
  },
});
