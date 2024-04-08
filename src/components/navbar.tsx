'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Navbar Code
 * @returns Navbar
 */
export const Navbar = () => {
    const router = useRouter();

    return (
        <>
        <nav className="flex items-center flex-wrap bg-slate-700 p-3 w-screen opacity-90">
            <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto pr-3">
                <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                <a href="/" className="lg:inline-flex lg:w-auto w-full px-2 py-1 rounded text-white font-bold items-center justify-center hover:bg-slate-400 hover:text-white">
                    Home
                </a>
                <a href="/about" className="lg:inline-flex lg:w-auto w-full px-2 py-1 rounded text-white font-bold items-center justify-center hover:bg-slate-400 hover:text-white">
                    About
                </a>
                <a href="/projects" className="lg:inline-flex lg:w-auto w-full px-2 py-1 rounded text-white font-bold items-center justify-center hover:bg-slate-400 hover:text-white">
                    Projects
                </a>
                <a href="/resume" className="lg:inline-flex lg:w-auto w-full px-2 py-1 rounded text-white font-bold items-center justify-center hover:bg-slate-400 hover:text-white">
                    Resume
                </a>
                <a href="/login" className="lg:inline-flex lg:w-auto w-full px-2 py-1 rounded text-white font-bold items-center justify-center hover:bg-slate-400 hover:text-white">
                    Login
                </a>
                </div>
            </div>
        </nav>
        </>
    )
}