import React, { useState, useEffect } from 'react'
import close from "../assets/close.jpg";
import menu from "../assets/menu.jpg";
import logo from "../assets/logo.svg";

export const navLinks = [
    {
        id: "falcon 9",
        title: "FALCON 9",
    },
    {
        id: "falcon heavy",
        title: "FALCON HEAVY",
    },
    {
        id: "dragon",
        title: "DRAGON",
    },
    {
        id: "starship",
        title: "STARSHIP",
    },
    {
        id: "human spaceflight",
        title: "HUMAN SPACEFLIGHT",
    },
    {
        id: "rideshare",
        title: "RIDESHARE",
    },
    {
        id: "starshield",
        title: "STARSHIELD",
    },
    {
        id: "starlink",
        title: "STARLINK",
    },
    {
        id: "shop",
        title: "SHOP",
    }
];

export const Navbar = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)
    const [toggle, setToggle] = useState(false);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY

        if (currentScrollPos > prevScrollPos) {
            setVisible(false)
        } else {
            setVisible(true)
        }

        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <div className={`bg-slate-700 h-14 sticky ${visible ? 'top-0' : ''} `}>
            <nav className="w-full flex py-6 justify-between items-center navbar">
                {/* Logo */}
                <img src={logo} alt="space-x"/>

                {/* Desktop Navigation */}
                <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Navigation */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain"
                        onClick={() => setToggle(!toggle)}
                    />

                    {/* Sidebar */}
                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 flex-col">
                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px]  ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}