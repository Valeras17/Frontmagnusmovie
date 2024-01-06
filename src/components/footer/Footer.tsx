import React from 'react';
import LogoMM from '../images/logoMM.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <img src={LogoMM} alt="Logo project" className="h-16" />
          </div>
          <div className="mb-2 md:mb-0">
            © {new Date().getFullYear()} 
          </div>
          <div>
            <p>Email: contact@gmail.com</p>
            <p>Telephone: +972 (058) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
