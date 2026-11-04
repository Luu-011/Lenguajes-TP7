import './Footer.css';
import logoTerraNova from '../img/logo.footer.jpeg';


const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="footer-container">
      <div className="footer-content">
       
        <div className="footer-brand">
          <img
            src={logoTerraNova}
            alt="Terra Nova - Venta de Terrenos"
            className="footer-logo-img"
          />
          <p>Desarrollo inmobiliario y venta de terrenos.</p>
        </div>


        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#proyecto">Proyecto</a></li>
            <li><a href="#nosotros">Acerca de nosotros</a></li>
          </ul>
        </div>


        <div className="footer-social">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="WhatsApp">WhatsApp</a>
          </div>
        </div>
      </div>


      <div className="footer-bottom">
        <p>&copy; {currentYear} Terra Nova - Venta de Terrenos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
export default Footer;
