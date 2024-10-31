import './Footer.css'
import { useTranslation } from 'next-i18next';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id='contact' className='footer'>
      <div className="footer-content">
        <div className="footer-links">
          <a href="#about-us">{t('footer.sobreNosotros')}</a>
          <a href="#contact">{t('footer.contacto')}</a>
          <a href="#privacy">{t('footer.politicaPrivacidad')}</a>
          <a href="#terms">{t('footer.terminoServicio')}</a>
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare className="social-icon" />
          </a>
        </div>
        <div className="footer-copyright">
          <p>&copy; {t('footer.derechosReservados')}</p>
        </div>
      </div>
    </footer>
  );
}
