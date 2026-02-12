"use client"

import { Calendar, FolderTree, Images, Menu, Newspaper, Users, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "./ui/button"
import { Avatar, AvatarImage } from "./ui/avatar"
import { motion } from "framer-motion"

const navItems = [
    { label: "Tentang", href: "#", icon: Users },
    { label: "Berita", href: "#", icon: Newspaper },
    { label: "Event", href: "#", icon: Calendar },
    { label: "Direktori", href: "#", icon: FolderTree },
    { label: "Galeri", href: "#", icon: Images }
]

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="z-50 sticky top-0 w-full glass border-b border-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-3">
                        <div className="size-10 bg-primary flex items-center justify-center rounded-lg shadow-lg shadow-primary/20">
                            <Users className="h-6 w-6 text-white" />
                        </div>

                        <h2 className="text-white text-xl font-black tracking-tighter uppercase">
                            IKAMANSARA
                        </h2>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-white/80 hover:text-primary transition-colors text-sm font-semibold tracking-wide uppercase flex items-center gap-2"
                            >
                                <item.icon className="h-4 w-4" />
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button className="hidden lg:flex bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-xl shadow-primary/20 transition-all active:scale-95">
                            Gabung Sekarang
                        </Button>

                        <Avatar className="h-10 w-10 border-2 border-primary/40">
                            <AvatarImage
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=IKAMANSATU"
                                alt="User Profile Avatar"
                            />
                        </Avatar>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden glass rounded-lg mt-2 p-4 border border-primary/20"                    
                    >
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-white/80 hover:text-primary transition-colors text-sm font-semibold tracking-wide uppercase flex items-center gap-2 py-2"
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.label}
                                </Link>
                            ))}

                            <Button className="bg-primary hover:bg-primary/90 text-white py-2.5 rounded-lg text-sm font-bold shadow-xl shadow-primary/20">
                                Gabung Sekarang
                            </Button>
                        </div>
                    </motion.div>
                )}
            </div>
        </header>
    )
}