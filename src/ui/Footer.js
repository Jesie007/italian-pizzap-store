import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-orange-800 text-white py-6 mt-4">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
         
          <div className="flex flex-col mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li><a href="mailto:info@example.com" className="hover:underline">info@example.com</a></li>
              <li><a href="tel:+123456789" className="hover:underline">+123 456 789</a></li>
              <li><p>123 Pizza St, Food City, FC 12345</p></li>
            </ul>
          </div>
          
         
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <Link to="https://www.facebook.com/" className="text-white hover:text-gray-400"><FaFacebookF size={20} /></Link>
              <Link to="https://x.com/home?lang=en" className="text-white hover:text-gray-400"><FaTwitter size={20} /></Link>
              <Link to="https://www.instagram.com/" className="text-white hover:text-gray-400"><FaInstagram size={20} /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-orange-500 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Italian Pizza Store. Jessie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

