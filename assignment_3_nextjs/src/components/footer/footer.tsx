import Link from 'next/link';
import {Linkedin} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">My Website</h2>
          <p className="text-gray-400 mt-2">
          </p>
        </div>
        <div className="flex space-x-4">
          {/* <Link href="#"><Facebook className="text-blue-500" /></Link> */}
          {/* <Link href="#"><Twitter className="text-sky-300" /></Link> */}
          {/* <Link href="#"><Instagram className="text-pink-500" /></Link> */}
          <Link href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><Linkedin className="text-blue-400" /></Link>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center">
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/pages/about">About</Link></li>
          <li><Link href="/pages/contact">Contact Us</Link></li>
        </ul>
        <p className="text-center text-gray-400 mt-4 md:mt-0">
          © Muhammad Asif.
        </p>
      </div>
    </footer>
  );
}
