"use client"

import { Calendar, FolderTree, Images, Menu, Newspaper, Users, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "./ui/button"
import { Avatar, AvatarImage } from "./ui/avatar"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

const navItems = [
    { label: "Tentang", href: "#", icon: Users },
    { label: "Berita", href: "#", icon: Newspaper },
    { label: "Event", href: "/events", icon: Calendar },
    { label: "Direktori", href: "/directory", icon: FolderTree },
    { label: "Galeri", href: "#", icon: Images }
]

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    const isActive = (href: string) => {
        if (href === "#") return false
        return pathname === href || pathname?.startsWith(href + "/")
    }

    return (
        <header className="z-50 sticky top-0 w-full glass border-b border-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="size-10 bg-primary flex items-center justify-center rounded-lg shadow-lg shadow-primary/20">
                            <Users className="h-6 w-6 text-white" />
                        </div>

                        <h2 className="text-white text-xl font-black tracking-tighter uppercase">
                            IKAMANSARA
                        </h2>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => {
                            const active = isActive(item.href)

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="relative group"
                                >
                                    <div className={`
                                        flex items-center gap-2 text-sm font-semibold tracking-wide uppercase transition-colors py-2
                                        ${active
                                            ? "text-primary"
                                            : "text-white/80 group-hover:text-primary"
                                    }`}>
                                        <item.icon className={`h-4 w-4 ${active ? "text-primary" : ""}`} />
                                        {item.label}
                                    </div>
                                    
                                    {active && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}

                                    {!active && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/50 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                    )}
                                </Link>                                     
                            )
                        })}
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
                            {navItems.map((item) => {
                                const active = isActive(item.href)

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`
                                            flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                                            ${active
                                                ? "bg-primary/20 text-primary border border-primary/30"
                                                : "text-white/80 hover:bg-white/5 hover:text-primary"
                                            }
                                        `}
                                    >
                                        <item.icon className={`h-5 w-5 ${active ? "text-primary" : ""}`} />
                                        <span className="text-sm font-semibold tracking-wide uppercase">
                                            {item.label}
                                        </span>

                                        {active && (
                                            <span className="ml-auto text-xs bg-primary text-white px-2 py-1 rounded-full">
                                                Active
                                            </span>
                                        )}
                                    </Link>                             
                                )
                            })}

                            <div className="pt-4 mt-2 border-t border-white/10">
                                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg text-sm font-bold shadow-xl shadow-primary/20">
                                    Gabung Sekarang
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </header>
    )
}