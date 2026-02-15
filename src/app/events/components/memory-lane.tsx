"use client"

import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const memories = [
    {
        id: 1,
        title: "Class of '95 Reunion",
        date: "Summer 2023 Gala Dinner",
        image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80",
        span: "col-span-2 row-span-2"
    },
    {
        id: 2,
        title: "Charity Run",
        date: "Spring 2023",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
        span: ""
    },
    {
        id: 3,
        title: "Campus Visit 2022",
        date: "Fall 2022",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
        span: ""
    },
    {
        id: 4,
        title: "Alumni Awards Night",
        date: "Winter 2023",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        span: ""
    },
    {
        id: 5,
        title: "Networking Mixer",
        date: "Spring 2024",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
        span: ""
    }
]

export function MemoryLane() {
    const [selectedImage, setSelectedImage] = useState<typeof memories[0] | null>(null)

    return (
        <>
            <section className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-white">
                        Memory Lane
                    </h2>
                    <Button
                        variant="link"
                        className="text-primary hover:text-primary/80 font-medium"
                    >
                        View All Gallery
                    </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-[500px]">
                    {memories.map((memory, index) => (
                        <motion.div
                            key={memory.id}
                            className={`${memory.span} rounded-xl overflow-hidden relative group cursor-pointer`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setSelectedImage(memory)}
                        >
                            <Image 
                                src={memory.image}
                                alt={memory.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                                <h4 className="font-bold text-white">
                                    {memory.title}
                                </h4>
                                <p className="text-xs text-white/70">
                                    {memory.date}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    >
                        <motion.div
                            className="relative max-w-4xl w-full h-[80vh] rounded-xl overflow-hidden"
                        >
                            <Image 
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                fill
                                className="object-contain"
                            />

                            <button>
                                <X />
                            </button>

                            <div>
                                <h3>
                                    {selectedImage.title}
                                </h3>
                                <p>
                                    {selectedImage.date}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>

        
    )
}