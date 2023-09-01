import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Navbar() {
    const [menuAktif, setMenuAktif] = useState(false);
	const router = useRouter()
    const toggleMenu = () => {
      	setMenuAktif(!menuAktif);
    };

    const menuVariants = {
		hidden: {
			x: '100%', // Posisi tersembunyi di luar layar di sebelah kanan
			opacity: 0, // Tidak terlihat
		},
		visible: {
			x: 0, // Posisi muncul di tengah
			opacity: 1, // Tampil dengan opacity penuh
			transition: {
			type: "tween"
			},
		},
    };

    return (
		<nav className='h-full w-full flex justify-end items-center px-5 md:px-20'>
			<div className="flex flex-col items-end gap-2 z-50 cursor-pointer" onClick={toggleMenu}>
				<div className="bg-[#7E00BA] w-10 h-[3px]"></div>
				<div className="bg-[#7E00BA] w-8 h-[3px]"></div>
				<div className="bg-[#7E00BA] w-10 h-[3px]"></div>
			</div>
			<motion.div className='h-screen w-screen bg-black text-gray-400 absolute flex flex-col justify-center items-center gap-10 top-0 left-0 z-40'
			initial='hidden'
			animate={menuAktif ? 'visible' : 'hidden'}
			variants={menuVariants}>
				<div className='text-3xl cursor-pointer' onClick={() => {router.push("/"); setMenuAktif(false)}}>HOME</div>
				<div className='text-3xl cursor-pointer' onClick={() => {router.push("/about"); setMenuAktif(false)}}>ABOUT</div>
				<div className='text-3xl cursor-pointer' onClick={() => {router.push("/project"); setMenuAktif(false)}}>PROJECT</div>
			</motion.div>
		</nav>
    );
}
