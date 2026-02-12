"use client"

import { alumniData } from "@/lib/constants/directory"
import { useState } from "react"
import { motion } from "framer-motion"
import { DirectoryHeader } from "./components/directory-header"
import { DirectorySearch } from "./components/directory-search"

export default function PageDirectory() {
    const [searchQuery, setSearchQuery] = useState("")
    const [filters, setFilters] = useState({
        gradYear: "",
        industry: "",
        city: ""
    })
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 8

    const filteredAlumni = alumniData.filter((alumni) => {
        const matchesSearch = alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            alumni.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
            alumni.company.toLowerCase().includes(searchQuery.toLowerCase())

        const matchesYear = !filters.gradYear || alumni.gradYear === filters.gradYear
        const matchesIndustry = !filters.industry || alumni.industry === filters.industry
        const matchesCity = !filters.city || alumni.city === filters.city

        return matchesSearch && matchesYear && matchesIndustry && matchesCity
    })

    const totalPages = Math.ceil(filteredAlumni.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const paginatedAlumni = filteredAlumni.slice(startIndex, startIndex + itemsPerPage)
 
    return (
        <main className="flex-grow max-w-7xl mx-auto w-full px-4 md:px-10 py-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <DirectoryHeader />
            </motion.div>

            <motion.div
                className="mb-10 space-y-4"
            >
                <DirectorySearch onSearch={setSearchQuery} />
                Ini Directory Filters
            </motion.div>
        </main>
    )
}