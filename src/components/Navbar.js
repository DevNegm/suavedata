import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='py-4 px-5'>
        <div className="d-flex flex-wrap gap-4">
            <Link to="/" className='nav-link text-white fw-bold'>
                Home /
            </Link>
            <a href='/#about' className='nav-link text-white fw-bold'>
            About Us /
            </a>
            <Link to="services" className='nav-link text-white fw-bold'>
            Products and Services /
            </Link>
            <Link to="team" className='nav-link text-white fw-bold'>
            Team /
            </Link>
            <Link to="contactus" className='nav-link text-white fw-bold'>
            Contact Us /
            </Link>
            <Link to="/faqs" className='nav-link text-white fw-bold'>
            FAQs
            </Link>

        </div>

    </nav>
  )
}
