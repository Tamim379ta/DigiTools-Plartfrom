import React from 'react';
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className=' bg-[#101727]'>

      <footer className="footer sm:footer-horizontal  text-white p-10">
        <aside>

          <h1 className='text-4xl font-bold'>DigiTools</h1>

          <p>
            Premium digital tools for creators, professionals, <br /> and businesses. Work smarter with our suite of powerful tools.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Templates</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About </a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav >
          <h6 className='footer-title'>Social Links</h6>
          <div className='flex gap-3 text-3xl'>
            <a href=""><FaInstagram /></a>
            <a href=""><FaFacebook /></a>
            <a href=""><FaXTwitter /></a>
          </div>
        </nav>
      </footer>

      <div className='divider   before:bg-gray-600 after:bg-gray-600  text-gray-500'></div>

      <div className='flex flex-col text-center md:flex-row container mx-auto text-gray-300 justify-between py-10'>
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className='flex gap-5 justify-center'>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
          <a href="">Cookies</a>
        </div>
      </div>

    </div>
  );
};

export default Footer;