import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-10">
        <div className="footer-content grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="footer-logo">
            <h2 className="text-3xl font-bold">Rudra</h2>
            <p className="mt-2">Full-Stack Web Developer</p>
          </div>
          <div className="">
            <h3 className="text-xl font-semibold border-b-2 border-gray-600 pb-2">Quick Links</h3>
            <ul className="mt-3 space-y-3">
              <li>
                <a className="text-gray-300 hover:text-white transition duration-200" href="#home">Home</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white transition duration-200" href="#about">About</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white transition duration-200" href="#services">Services</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white transition duration-200" href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white transition duration-200" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3 className="text-xl font-semibold border-b-2 border-gray-600 pb-2">Contact Info</h3>
            <p className="mt-2">Berhampur, Odisha, India</p>
            <p>Email: <a href="mailto:rudramadhab006@gmail.com" className="text-gray-300 text-sm hover:text-white transition duration-200">rudramadhab006@gmail.com</a></p>
            <p>Phone: <span className="text-gray-300">+91 7437865981</span></p>
          </div>
          <div className="footer-social">
            <h3 className="text-xl font-semibold border-b-2 border-gray-600 pb-2">Follow Me</h3>
            <div className="flex space-x-4 mt-2 text-gray-400">
              <a href="#" aria-label="GitHub" className="hover:text-white transition duration-200">
                <FaGithub size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition duration-200">
                <FaLinkedin size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition duration-200">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-10 text-center">
          <p>&copy; 2024 Rudra Madhab Mahanty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
