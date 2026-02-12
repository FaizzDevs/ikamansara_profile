"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

interface DirectorySearchProps {
    onSearch: (query: string) => void
}

export function DirectorySearch({ onSearch }: DirectorySearchProps) {
    const [query, setQuery] = useState("")

    const handleSearch = (value: string) => {
        setQuery(value)
        onSearch(value)
    }

    return (
        <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-grow">
                <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-200 group-focus-within:text-primary transition-colors" />
                    <Input 
                        type="text"
                        placeholder="Search Alumni...."
                        value={query}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="w-full h-14 pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary text-white placeholder-slate-500 transition-all"
                    />
                </div>
            </div>
        </div>
    )
}