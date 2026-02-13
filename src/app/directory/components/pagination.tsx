import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const getPageNumbers = () => {
        const pages = []
        const maxVisible = 5
        const halfVisible = Math.floor(maxVisible / 2)

        let start = Math.max(1, currentPage - halfVisible)
        let end = Math.min(totalPages, start + maxVisible - 1)

        if (end - start + 1 < maxVisible) {
            start = Math.max(1, end - maxVisible + 1)
        }

        for (let i = start; i <= end; i++) {
            pages.push(i)
        }

        return pages
    }

    return (
        <nav className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
                <Button
                    variant='ghost'
                    size='icon'
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>

                {getPageNumbers().map((page) => (
                    <Button
                        key={page}
                        onClick={() => onPageChange(page)}
                        variant='ghost'
                        size='icon'
                        className={`w-10 h-10 rounded-lg transition-all ${
                            currentPage === page
                                ? "bg-primary text-white font-bold"
                                : " bg-white/5 border border-white/10 text-white hover:bg-primary/20"
                        }`}
                    >
                        {page}
                    </Button>
                ))}

                {totalPages > 5 && currentPage < totalPages - 2 && (
                    <span className="text-slate-500 px-2">
                        ...
                    </span>
                )}

                {totalPages > 5 && currentPage < totalPages - 1 && (
                    <Button
                        onClick={() => onPageChange(totalPages)}
                        variant='ghost'
                        size='icon'
                        className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-primary/20 transition-all"
                    >
                        {totalPages}
                    </Button>
                )}

                <Button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    variant='ghost'
                    size='icon'
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronRight />
                </Button>
            </div>
        </nav>
    )
}