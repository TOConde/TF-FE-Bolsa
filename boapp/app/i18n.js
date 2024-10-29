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
          sobreNosotrosTitulo: "Sobre nosotros",
          sobreNosotrosP1: "Borsa İstanbul (BIST), también conocida como la Bolsa de Estambul, es el mercado de valores principal de Turquía, ubicada en la vibrante ciudad de Estambul. Fundada en 2013, Borsa İstanbul fue creada mediante la unificación de la Bolsa de Valores de Estambul (ISE), la Bolsa de Oro de Estambul y la Bolsa de Derivados de Turquía.",
          sobreNosotrosP2: "La misión de Borsa İstanbul es proporcionar una plataforma eficiente, transparente y confiable para el comercio de acciones, bonos, derivados y otros instrumentos financieros. Además de servir como el centro de comercio de valores de Turquía, Borsa İstanbul es una institución clave en la economía turca, promoviendo el crecimiento económico y facilitando el acceso al financiamiento para las empresas turcas.",
          sobreNosotrosP3: "Con sus tecnologías avanzadas y su enfoque en la innovación, Borsa İstanbul se esfuerza por ser una de las bolsas de valores más competitivas del mundo. El mercado se rige por estrictos estándares de regulación y supervisión, alineados con las mejores prácticas internacionales, asegurando la transparencia y la protección de los inversores.",
          sobreNosotrosP4: "Además, Borsa İstanbul se ha comprometido a fomentar la sostenibilidad, ofreciendo productos de inversión que apoyan empresas y proyectos ambientalmente responsables. Este compromiso fortalece su rol en el ámbito financiero global, haciendo de la bolsa un actor relevante en el desarrollo económico sostenible.",
          buttons: {
            sobreNosotros: "Sobre nosotros",
            contacto: "Contacto",
          },
        },
      },
      en: {
        translation: {
          sobreNosotrosTitulo: "About us",
          sobreNosotrosP1: "Borsa İstanbul (BIST), also known as the Istanbul Stock Exchange, is Turkey's main stock exchange located in the vibrant city of Istanbul. Established in 2013, Borsa İstanbul was created through the unification of the Istanbul Stock Exchange (ISE), the Istanbul Gold Exchange, and the Turkish Derivatives Exchange.",
          sobreNosotrosP2: "Borsa İstanbul’s mission is to provide an efficient, transparent, and reliable platform for the trading of stocks, bonds, derivatives, and other financial instruments. In addition to serving as Turkey’s primary securities exchange, Borsa İstanbul is a key institution in the Turkish economy, promoting economic growth and facilitating access to financing for Turkish companies.",
          sobreNosotrosP3: "With its advanced technologies and focus on innovation, Borsa İstanbul strives to be one of the most competitive stock exchanges globally. The market is governed by strict regulatory standards aligned with international best practices, ensuring transparency and investor protection.",
          sobreNosotrosP4: "Furthermore, Borsa İstanbul is committed to fostering sustainability by offering investment products that support environmentally responsible companies and projects. This commitment strengthens its role in the global financial arena, making the exchange a relevant actor in sustainable economic development.",
          buttons: {
            sobreNosotros: "About us",
            contacto: "Contact",
          },
        }
      },
      tur: {
        translation: {
          sobreNosotrosTitulo: "Hakkımızda",
          sobreNosotrosP1: "Borsa İstanbul (BIST), Türkiye'nin ana menkul kıymetler borsası olup, İstanbul'un hareketli şehrinde bulunmaktadır. 2013 yılında kurulan Borsa İstanbul, İstanbul Menkul Kıymetler Borsası (İMKB), İstanbul Altın Borsası ve Türkiye Vadeli İşlem Borsası’nın birleşmesiyle oluşturulmuştur.",
          sobreNosotrosP2: "Borsa İstanbul'un misyonu, hisse senetleri, tahviller, türev ürünler ve diğer finansal araçlar için verimli, şeffaf ve güvenilir bir platform sağlamaktır. Türkiye’nin birincil menkul kıymetler borsası olarak hizmet vermenin yanı sıra, Borsa İstanbul, Türk ekonomisinin büyümesini teşvik eden ve Türk şirketleri için finansmana erişimi kolaylaştıran kilit bir kurumdur.",
          sobreNosotrosP3: "İleri teknolojileri ve yeniliğe odaklanması sayesinde Borsa İstanbul, küresel olarak en rekabetçi borsalardan biri olmayı hedeflemektedir. Piyasa, uluslararası en iyi uygulamalarla uyumlu sıkı düzenleyici standartlar çerçevesinde yönetilmekte olup, şeffaflık ve yatırımcı korumasını sağlamaktadır.",
          sobreNosotrosP4: "Ayrıca, Borsa İstanbul, çevreye duyarlı şirketleri ve projeleri destekleyen yatırım ürünleri sunarak sürdürülebilirliği teşvik etmeye kendini adamıştır. Bu taahhüt, borsanın küresel finans arenasındaki rolünü güçlendirerek sürdürülebilir ekonomik kalkınmada önemli bir aktör olmasını sağlamaktadır.",
          buttons: {
            sobreNosotros: "Hakkımızda",
            contacto: "İletişim",
          },
        }
      }
    }
  });