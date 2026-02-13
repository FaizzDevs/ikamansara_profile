"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter } from "lucide-react"
import { useState } from "react"

interface DirectoryFiltersProps {
    onFilterChange: (filters: any) => void
}

export function DirectoryFilters({ onFilterChange }: DirectoryFiltersProps) {
    const [filters, setFilters] = useState({
        gradYear: "",
        industry: "",
        city: ""
    })

    const handleFilterChange = (key: string, value: string) => {
        const newFilters = { ...filters, [key]: value }
        setFilters(newFilters)
        onFilterChange(newFilters)
    }

    const clearFilters = () => {
        const cleared = { gradYear: "", industry: "", city: "" }
        setFilters(cleared)
        onFilterChange(cleared)
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:flex gap-3">
            <Select onValueChange={(value) => handleFilterChange("gradYear", value)}>
                <SelectTrigger className="min-w-[140px] h-14 bg-white/5 border border-white/10 rounded-xl text-white text-sm transition-all">
                    <SelectValue placeholder="Grad Year" />
                </SelectTrigger>

                <SelectContent className="border-white/10 text-white">
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
                    <SelectItem value="2019">2019</SelectItem>
                    <SelectItem value="2018">2018</SelectItem>
                    <SelectItem value="2017">2017</SelectItem>
                    <SelectItem value="2016">2016</SelectItem>
                    <SelectItem value="2015">2015</SelectItem>
                    <SelectItem value="2014">2014</SelectItem>
                    <SelectItem value="2013">2013</SelectItem>
                    <SelectItem value="2012">2012</SelectItem>
                    <SelectItem value="2011">2011</SelectItem>
                    <SelectItem value="2010">2010</SelectItem>
                    <SelectItem value="2009">2009</SelectItem>
                    <SelectItem value="2008">2008</SelectItem>
                    <SelectItem value="2007">2007</SelectItem>
                    <SelectItem value="2006">2006</SelectItem>
                    <SelectItem value="2005">2005</SelectItem>
                    <SelectItem value="2004">2004</SelectItem>
                    <SelectItem value="2003">2003</SelectItem>
                    <SelectItem value="2002">2002</SelectItem>
                    <SelectItem value="2001">2001</SelectItem>
                    <SelectItem value="2000">2000</SelectItem>
                    <SelectItem value="1999">1999</SelectItem>
                    <SelectItem value="1998">1998</SelectItem>
                </SelectContent>
            </Select>

            <Select onValueChange={(value) => handleFilterChange('industry', value)}>
                <SelectTrigger className="min-w-[140px] h-14 bg-white/5 border border-white/10 rounded-xl text-white text-sm transition-all">
                    <SelectValue placeholder="Industry" />
                    <SelectContent className="border-white/10 text-white">
                        <SelectItem value="Technology">Technology</SelectItem>
                        <SelectItem value="Healthcare">Healthcare</SelectItem>
                        <SelectItem value="Education">Education</SelectItem>
                        <SelectItem value="Engineering">Engineering</SelectItem>
                        <SelectItem value="Finance">Finance</SelectItem>
                        <SelectItem value="Marketing">Marketing</SelectItem>
                    </SelectContent>
                </SelectTrigger>
            </Select>

            <Select onValueChange={(value) => handleFilterChange('city', value)}>
                <SelectTrigger className="min-w-[140px] h-14 bg-white/5 border border-white/10 rounded-xl text-white text-sm transition-all">
                    <SelectValue placeholder="City" />
                    <SelectContent className="border-white/10 text-white">
                        <SelectItem value="Jakarta">Jakarta</SelectItem>
                        <SelectItem value="Jepara">Jepara</SelectItem>
                        <SelectItem value="Semarang">Semarang</SelectItem>
                        <SelectItem value="Surabaya">Surabaya</SelectItem>
                        <SelectItem value="Bandung">Bandung</SelectItem>
                        <SelectItem value="Singapore">Singapore</SelectItem>
                    </SelectContent>
                </SelectTrigger>
            </Select>

            <Button
                onClick={clearFilters}
                variant="ghost"
                className="bg-white/5 hover:bg-white/10 text-white h-14 px-6 rounded-xl font-medium flex items-center justify-center gap-2 transition-all"
            >
                <Filter className="h-4 w-4" />
                Clear
            </Button>

        </div>
    )
}