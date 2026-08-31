export const languages = {
  pl: 'Polski',
  en: 'English',
};

export const defaultLang = 'pl';

export const ui = {
  pl: {
    'nav.about': 'O nas',
    'nav.gallery': 'Galeria',
    'nav.news': 'Aktualności',
    'nav.contact': 'Kontakt',
    'hero.title': 'PLASTart - Profesjonalne Spawanie Tworzyw',
    'hero.subtitle': 'Sklejanie, zgrzewanie i budowa konstrukcji z tworzyw sztucznych',
    'about.title': 'O nas',
    'about.desc': 'Specjalizujemy się w profesjonalnych usługach związanych z przetwórstwem tworzyw sztucznych. Oferujemy naprawy (sklejanie i zgrzewanie) oraz budowę specjalistycznych konstrukcji prostopadłościennych. Zastosowany przez nas sposób naprawy przywraca pełną funkcjonalność i nie zmienia pierwotnego przeznaczenia elementu.',
    'about.materials': 'Spawamy m.in.: PP, PELD, ABS, ASA, PEHD, TPO, PVC, PUR i wiele innych.',
    'gallery.title': 'Galeria',
    'gallery.desc': 'Zobacz nasze dotychczasowe realizacje.',
    'gallery.cat1.title': 'Przed i po – Metamorfozy',
    'gallery.cat1.desc': 'Przesuń suwak na zdjęciu, aby porównać stan elementu przed naprawą i efekt po zakończeniu naszych prac.',
    'gallery.cat2.title': 'Efekty naszej pracy',
    'gallery.cat2.desc': 'Gotowe realizacje, zbiorniki i elementy po naprawie.',
    'news.title': 'Aktualności',
    'news.desc': 'Najnowsze informacje z życia naszej firmy.',
    'contact.title': 'Kontakt',
    'contact.address': 'ul. Paderewskiego 202, 46-660 Kalety',
    'contact.phone': '+48 538 135 646',
    'contact.email': 'ronin302@gmail.com',
    'button.more': 'Dowiedz się więcej',
    'button.back': 'Wróć do listy',
    'page.about.full': 'Poznaj naszą historię, zaawansowane technologie spawania tworzyw i sprawdź, jak z dbałością o detale realizujemy zlecenia produkcyjne i naprawcze. Dowiedz się, dlaczego warto nam zaufać.',
    'page.gallery.full': 'Zapraszamy do zapoznania się z pełną galerią naszych realizacji, obejmującą m.in. skomplikowane naprawy zderzaków, wanny galwaniczne oraz specjalistyczne zbiorniki.',
    'page.news.full': 'Śledź nasze najnowsze inwestycje, realizowane projekty i poszerzenia asortymentu obsługiwanych tworzyw.',
    'page.contact.full': 'Skontaktuj się z nami! Znajdziesz tu mapę dojazdu do naszego warsztatu w Kaletach, szczegółowe dane do wyceny oraz formularz kontaktowy.'
  },
  en: {
    'nav.about': 'About Us',
    'nav.gallery': 'Gallery',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'hero.title': 'PLASTart - Professional Plastic Welding',
    'hero.subtitle': 'Gluing, welding and construction of plastic structures',
    'about.title': 'About Us',
    'about.desc': 'We specialize in professional services related to plastics processing. We offer repairs (gluing and welding) and the construction of specialized cuboid structures. Our repair method restores full functionality and does not change the original purpose of the element.',
    'about.materials': 'We weld materials such as: PP, PELD, ABS, ASA, PEHD, TPO, PVC, PUR and many more.',
    'gallery.title': 'Gallery',
    'gallery.desc': 'See our previous projects.',
    'gallery.cat1.title': 'Before & After – Transformations',
    'gallery.cat1.desc': 'Drag the slider on the image to compare the state of the element before repair and the result after our work.',
    'gallery.cat2.title': 'Results of our work',
    'gallery.cat2.desc': 'Finished projects, tanks, and repaired elements.',
    'news.title': 'News',
    'news.desc': 'Latest news from our company.',
    'contact.title': 'Contact',
    'contact.address': 'Paderewskiego 202 St., 46-660 Kalety, Poland',
    'contact.phone': '+48 538 135 646',
    'contact.email': 'ronin302@gmail.com',
    'button.more': 'Read more',
    'button.back': 'Back to list',
    'page.about.full': 'Learn about our history, advanced plastic welding technologies and see how we execute production and repair orders with attention to detail. Find out why you should trust us.',
    'page.gallery.full': 'We invite you to browse through our full gallery of implementations, including complex bumper repairs, galvanic tanks and specialized containers.',
    'page.news.full': 'Follow our latest investments, completed projects and expansions in the range of supported plastics.',
    'page.contact.full': 'Contact us! Here you will find directions to our workshop in Kalety, detailed pricing information and a contact form.'
  }
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}