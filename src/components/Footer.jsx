import React from 'react'
import PrivacyPolicy from '../pages/PrivacyPolicy';
import { Link } from 'react-router';

function Footer() {
    return (
        <>
        <div className='flex justify-center items-center'>
            <div className='h-[1px] w-[95%] bg-white/50'></div>
        </div>
        <footer className="bottom-0 left-0 z-20 w-full p-4 shadow-sm md:flex md:items-center md:justify-between md:p-6 text-white/50">
            <span className="text-xs text-body sm:text-center">© {new Date().getFullYear()} <a href="https://github.com/RoshanSinhabahu" className="hover:underline">Roshan</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-xs font-medium text-body sm:mt-0">
                <li>
                    <Link to='/privacy' className="hover:underline">Privacy Policy</Link>
                </li>
            </ul>
        </footer>
        </>
    )
}

export default Footer;
