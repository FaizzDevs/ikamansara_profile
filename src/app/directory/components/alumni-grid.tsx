import { Alumni } from "@/types/directory";
import { AlumniCard } from "./alumni-card";

interface AlumniGridProps {
    alumni: Alumni[]
}

export function AlumniGrid({ alumni }: AlumniGridProps) {
    if (alumni.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <h3 className="text-white text-xl font-bold mb-2">
                    No Alumni found
                </h3>
                <p className="text-slate-400 max-w-md">
                    Try adjusting your search or filter criteria to find what you're looking for
                </p>
            </div>
        )
    }

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((alumnus, index) => (
                <AlumniCard key={alumnus.id} alumni={alumnus} index={index} />
            ))}
        </section>
    )
}