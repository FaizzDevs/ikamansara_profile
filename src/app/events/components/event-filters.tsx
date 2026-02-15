"use client"

import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import { useState } from "react"

interface EventFiltersProps {
    selectedCategory: string
    onCategoryChange: (category: string) => void
    onSearch: (query: string) => void
}

const categories = ["All Events", "Workshops", "Networking", "Social Gatherings", "Charity", "Professional"]

export function EventFilters({ selectedCategory, onCategoryChange, onSearch }: EventFiltersProps) {
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = (value: string) => {
        setSearchQuery(value)
        onSearch(value)
    }

    return (
        <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold tracking-tight text-white">
                        Upcoming Activities
                    </h2>
                    <p className="text-white/60">
                        Find the perfect event to join your fellow alumni
                    </p>
                </div>

                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                    <Input 
                        placeholder="Search Events..."
                        value={searchQuery}
                        className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary"
                    />
                </div>
            </div>

            <Tabs
                defaultValue={selectedCategory}
                onValueChange={onCategoryChange}
                className="w-full"
            >
                <TabsList className="bg-white/5 border border-white/10 p-1 h-auto flex-wrap">
                    {categories.map((category) => (
                        <TabsTrigger
                            key={category}
                            value={category}
                            className="px-4 py-1.5 data-[state=active]:bg-primary data-[state=active]: text-white text-white/60 hover:text-white text-sm font-medium transition-all"
                        >
                            {category}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>
        </div>
    )
}