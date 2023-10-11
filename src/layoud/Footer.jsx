import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <footer id="footer" class="footer text-white text-center">
        <p class="h6">&copy; 2022 - Todos los derechos reservados</p>
        <p >
          <a href="https://www.linkedin.com/in/daniel-ruben-rivas-saltos/" target="_blank" rel="noopener noreferrer" className='text-white mx-1 text-decoration-none'>
            <FontAwesomeIcon icon={faLinkedinIn} className='text-white mx-1 fa-linkedin' />
            Mi Linkedin
          </a>
        </p>
      </footer>
    </>
  )
}

export default Footer;
