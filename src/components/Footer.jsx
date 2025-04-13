import React from 'react';
import { styles } from '../styles';
import {
    github,
    creator,
    instagram,
    linkedin,
    } from '../assets';

const Footer = () => {
    return (
        <footer className={`${styles.paddingX} w-full flex items-center py-5 bottom-0 z-50 bg-primary`}
        style={{ backgroundColor: '#faf7e9' }}>
            <div className="w-full flex justify-between items-center mx-auto">
                <p className=' text-[14px]'>&copy; {new Date().getFullYear()} Merchant.Designs &nbsp;<span className="sm:block hidden">All Rights Reserved</span></p>
                <div className="flex gap-4">
                    <a href="https://github.com/ArkounM" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" className='w-6'/>
                    </a>
                    <a href="https://www.youtube.com/@MerchantDesigns" target="_blank" rel="noopener noreferrer">
                        <img src={creator} alt="Youtube" className='w-6'/>    
                    </a>
                    <a href="https://www.instagram.com/merchant_designs/" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" className='w-6'/>    
                    </a>
                    <a href="https://www.linkedin.com/in/arkoun-merchant-552874180/" target="_blank" rel="noopener noreferrer">
                    <   img src={linkedin} alt="Linkedin" className='w-6'/>    
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;