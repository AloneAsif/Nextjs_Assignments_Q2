
import React from 'react';
import Link from 'next/link';
const Footer: React.FC = () => {
  return (
    <footer className="mt-5 bg-sky-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Blog Website. Muhammad Asif.</p>
        </div>
        <div>
          <ul className="flex justify-center md:justify-start space-x-6">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="./contact_us" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div className="text-center md:text-right">
          <p>Follow us on:</p>
          <div className="flex justify-center md:justify-end space-x-4">
            <Link href="https://www.linkedin.com/in/asif-khadim-12ba332a4/" aria-label="Linkdin" className="hover:text-blue-500">Linkdin</Link>
            <Link href="#" aria-label="Twitter" className="hover:text-blue-400">Twitter</Link>
            <Link href="#" aria-label="Instagram" className="hover:text-pink-500">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
