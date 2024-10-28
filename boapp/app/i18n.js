import i18next from "i18next";
import { initReactI18next } from "react-i18next";
//import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  //.use(LanguageDetector)
  .init({
    fallbackLng: "es",
    resources: {
      es: {
        translation: {
          buttons: {
            sobreNosotros: "Sobre nosotros",
            contacto: "Contacto",
          },
        },
      },
      en: {
        translation: {
          buttons: {
            sobreNosotros: "About us",
            contacto: "Contact",
          },
        }
      },
      tur: {
        translation: {
          buttons: {
            sobreNosotros: "Hakkımızda",
            contacto: "İletişim",
          },
        }
      }
    }
  });