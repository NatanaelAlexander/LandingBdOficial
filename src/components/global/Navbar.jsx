'use client'
import { useState } from 'react';

import Image from "next/image"
import logo from "/public/logo_dark.png"

import { RxCross2 } from "react-icons/rx";
import { SlMenu } from "react-icons/sl";

import Link from 'next/link';

export default function Navbar() {
    const [showNavRight, setShowNavRight] = useState(false)

    const toggle = () => {
        setShowNavRight(!showNavRight)
    }
    return (
        <nav className="absolute w-full z-30">
            <div className="flex flex-row justify-between px-5 pt-5 md:px-10 md:container mx-auto">

                <figure>
                    <Link href={'/'}>
                        <Image
                            className="w-14 relative"
                            alt="Logo de NyAsociados"
                            width={56}
                            height={56}
                            priority
                            src={logo} />
                    </Link>
                </figure>

                <div className="md:hidden flex justify-center items-center">
                    <SlMenu
                        onClick={toggle}
                        className="w-9 h-9 text-white"
                    />
                </div>
                <ul className="hidden md:flex md:flex-row md:items-center text-white drop-shadow-xl gap-5 font-semibold">
                    <li><Link href={'/'} className="hover:border-b cursor-pointer">Inicio</Link></li>
                    <li><div className="hover:border-b cursor-pointer">Nosotros</div></li>
                    <li><div className="hover:border-b cursor-pointer">Servicios</div></li>
                    <li><Link href={`/login/`} className="cursor-pointer bg-indigo-700 px-10 py-1 rounded-md hover:scale-105 transition-all">Login</Link></li>
                </ul>
            </div>
            {showNavRight && (
                <div className="bg-white mt-2 px-5 mx-5 rounded-md">
                    <ul className="items-center flex flex-col justify-center py-5 gap-5 font-semibold">
                        <li><Link onClick={toggle} href={'/'} className="hover:border-b cursor-pointer">Inicio</Link></li>
                        <li><div onClick={toggle} className="hover:border-b cursor-pointer">Nosotros</div></li>
                        <li><div onClick={toggle} className="hover:border-b cursor-pointer">Servicios</div></li>
                        <li><Link onClick={toggle} href={`/login/`} className="cursor-pointer bg-indigo-700 text-white px-10 py-1 rounded-md hover:scale-105">Login</Link></li>
                    </ul>
                </div>
            )}

        </nav>
    )
}