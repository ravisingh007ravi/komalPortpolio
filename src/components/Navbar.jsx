import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaFacebook} from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>

      {/* Left Div*/} 
      <div className='flex flex-shrink-0 items-center'>
        <div className='logo text-3xl font-bold hover:scale-125 duration-300 hover:ring-2'>kc</div>
      </div>

      {/* Right Div*/} 
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a className='hover:scale-125 duration-300 icon-gradient bg-gradient-to-br from-[#f09433] via-[#bc1888] to-[#f09433] rounded-md' href="https://www.instagram.com/lakshaychauhan156"><FaInstagram /></a>
        <a className='hover:scale-125 duration-300 icon-gradient text-[#36c47d]' href="https://wa.me/qr/32IAZJSVNZUHH1"><FaWhatsapp /></a>
        <a className='hover:scale-125 duration-300 text-[#0077B5]' href="https://www.linkedin.com/in/komal-chauhan-388a51200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><FaLinkedin /></a>
        <a className='hover:scale-125 duration-300' href="https://github.com/Kmlbreakthesyndrome"><FaGithub /></a>
        <a className='hover:scale-125 duration-300 text-[#1877f2]' href="https://www.facebook.com/profile"><FaFacebook /></a>
      </div>
    </nav>
    
  )
}
