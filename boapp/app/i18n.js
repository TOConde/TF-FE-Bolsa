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
            desde: "Desde",
            hasta: "Hasta",
            escala: "Escala",
            hora: "Hora",
            dia: "Día",
            mes: "Mes",
          },
          footer: {
            sobreNosotros: "Sobre nosotros",
            contacto: "Contacto",
            politicaPrivacidad: "Politica de Privacidad",
            terminoServicio: "Términos de Servicio",
            derechosReservados: "Todos los derechos reservados."
          },
          sideBar: {
            buttons: {
              empresas: "Empresas",
              indices: "Índices",
            },
            detalles: "Detalles",
            AMZN: "Amazon.com, Inc. es una corporación estadounidense de comercio electrónico y servicios de computación en la nube a todos los niveles con sede en la ciudad de Seattle, Washington.",
            XOM: "ExxonMobil Corporation es una empresa petrolera y gasista estadounidense, la mayor del país en su sector. Fue fundada como Standard Oil Company en 1870 por John D. Rockefeller.",
            UNH: "UnitedHealthcare es una empresa estadounidense de seguros de salud. Tiene su sede en Minnetonka, Minnesota, en la área metropolitana de Mineápolis–Saint Paul.",
            PEP: "PepsiCo, Inc. es una empresa multinacional estadounidense dedicada a la fabricación, comercialización y distribución de bebidas y aperitivos. Tiene su sede en Purchase, Nueva York, Estados Unidos.",
            TTE: "TotalEnergies SE es un grupo empresarial del sector petroquímico y energético con sede mundial en La Défense (Francia). Su actividad se encuentra presente en más de 130 países, empleando a unas 105 000 personas.",
            MSFT: "Microsoft Corporation es una corporación tecnológica multinacional estadounidense con sede en Redmond, Washington. Los productos de software más conocidos de Microsoft son la línea de sistemas operativos Microsoft Windows.",
            KO: "The Coca-Cola Company es una corporación multinacional estadounidense de bebidas con sede en Atlanta, Georgia. Tiene intereses en la fabricación, venta minorista y comercialización de concentrados y jarabes para bebidas no alcohólicas.",
          },
          indiceSeleccionado: "Indices Seleccionados",
          graficoVela: {
            label: "Mínimo-Máximo, Apertura-Clausura",
          },
          piechart: {
            titulo: "Participación en bolsa",
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
            sobreNosotros: "About Us",
            contacto: "Contact",
            desde: "From",
            hasta: "To",
            escala: "Scale",
            hora: "Hour",
            dia: "Day",
            mes: "Month",
          },
          footer: {
            sobreNosotros: "About Us",
            contacto: "Contact",
            politicaPrivacidad: "Privacy Policy",
            terminoServicio: "Terms of Service",
            derechosReservados: "All rights reserved."
          },
          sideBar: {
            buttons: {
              empresas: "Companies",
              indices: "Index",
            },
            detalles: "Details",
            AMZN: "Amazon.com, Inc. is an American e-commerce and cloud computing corporation headquartered in Seattle, Washington.",
            XOM: "ExxonMobil Corporation is an American oil and gas company, the largest in its sector in the country. It was founded as Standard Oil Company in 1870 by John D. Rockefeller.",
            UNH: "UnitedHealthcare is an American health insurance company. It is headquartered in Minnetonka, Minnesota, in the Minneapolis–Saint Paul metropolitan area.",
            PEP: "PepsiCo, Inc. is an American multinational company dedicated to the manufacturing, marketing, and distribution of beverages and snacks. It is headquartered in Purchase, New York, United States.",
            TTE: "TotalEnergies SE is a petrochemical and energy sector business group headquartered in La Défense, France. Its operations are present in over 130 countries, employing approximately 105,000 people.",
            MSFT: "Microsoft Corporation is an American multinational technology corporation headquartered in Redmond, Washington. Microsoft's most well-known software products are the Microsoft Windows operating systems.",
            KO: "The Coca-Cola Company is an American multinational beverage corporation headquartered in Atlanta, Georgia. It has interests in the manufacturing, retailing, and marketing of non-alcoholic beverage concentrates and syrups."
          },
          indiceSeleccionado: "Selected Indices",
          graficoVela: {
            label: "Minimum-Maximum, Opening-Closing",
          },
          piechart: {
            titulo: "Stock market participation",
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
            desde: "Başlangıç",
            hasta: "Bitiş",
            escala: "Ölçek",
            hora: "Saat",
            dia: "Gün",
            mes: "Ay",
          },
          footer: {
            sobreNosotros: "Hakkımızda",
            contacto: "İletişim",
            politicaPrivacidad: "Gizlilik Politikası",
            terminoServicio: "Hizmet Şartları",
            derechosReservados: "Tüm hakları saklıdır."
          },
          sideBar: {
            buttons: {
              empresas: "Şirket",
              indices: "Dizin",
            },
            detalles: "Detaylar",
            AMZN: "Amazon.com, Inc., Seattle, Washington merkezli, Amerikan e-ticaret ve bulut bilişim şirketidir.",
            XOM: "ExxonMobil Corporation, Amerikan petrol ve gaz şirketidir ve ülkedeki sektörünün en büyüğüdür. 1870 yılında John D. Rockefeller tarafından Standard Oil Company olarak kurulmuştur.",
            UNH: "UnitedHealthcare, bir Amerikan sağlık sigortası şirketidir. Şirketin merkezi, Minneapolis–Saint Paul metropolitan bölgesindeki Minnetonka, Minnesota'dadır.",
            PEP: "PepsiCo, Inc., içecek ve atıştırmalık üretimi, pazarlaması ve dağıtımı ile uğraşan, Amerika merkezli çok uluslu bir şirkettir. Şirketin merkezi, Purchase, New York, Amerika Birleşik Devletleri'ndedir.",
            TTE: "TotalEnergies SE, Fransa'nın La Défense bölgesinde merkezi bulunan bir petrokimya ve enerji sektör grubu şirketidir. Faaliyetleri 130'dan fazla ülkede bulunmaktadır ve yaklaşık 105.000 kişi istihdam etmektedir.",
            MSFT: "Microsoft Corporation, Redmond, Washington merkezli bir Amerikan çok uluslu teknoloji şirketidir. Microsoft'un en bilinen yazılım ürünleri, Microsoft Windows işletim sistemleri serisidir.",
            KO: "The Coca-Cola Company, Atlanta, Georgia merkezli bir Amerikan çok uluslu içecek şirketidir. Şirket, alkolsüz içecek konsantreleri ve şuruplarının üretimi, perakendesi ve pazarlamasıyla ilgilenmektedir."
          },
          indiceSeleccionado: "Seçili Endeksler",
          graficoVela: {
            label: "Minimum-Maksimum, Açılış-Kapanış",
          },
          piechart: {
            titulo: "Borsada katılım",
          },
        }
      }
    }
  });