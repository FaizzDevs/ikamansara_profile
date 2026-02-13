import { alumniData } from "@/lib/constants/directory"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Briefcase, Calendar, Globe, Instagram, Linkedin, Mail, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface ProfilePageProps {
    params: Promise<{ id: string }>
}

export default async function ProfilePage({ params }: ProfilePageProps) {
    const { id } = await params

    const alumni = alumniData.find((a) => a.id === id)

    if (!alumni) {
        notFound()
    }

    return (
        <main className="flex-grow max-w-7xl mx-auto w-full px-4 md:px-10 py-10">
            <div>
                <Button
                    variant='ghost'
                    asChild
                    className="mb-8 text-slate-400 hover:text-white transition-colors"
                >
                    <Link href="/directory">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Directory
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
                <div className="lg:col-span-1">
                    <Card className="glass-card p-8 rounded-2xl border border-white/5">
                        <div className="flex flex-col items-center text-center">
                            <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-4 border-primary/20 mb-6">
                                <img
                                    src={alumni.avatar}
                                    alt={alumni.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h1 className="text-2xl font-black text-white mb-2">
                                {alumni.name}
                            </h1>
                            <p className="text-primary font-bold mb-4">
                                {alumni.position}
                            </p>

                            <Badge
                                variant='outline'
                                className="bg-primary/20 text-primary px-4 py-1.5 rounded-full border-primary/30 mb-6"
                            >
                                Class of {alumni.gradYear}
                            </Badge>

                            <div className="w-full space-y-4 mb-6">
                                <div className="flex items-center justify-center gap-2 text-slate-400">
                                    <Briefcase className="h-4 w-4" />
                                    <span>
                                        {alumni.company}
                                    </span>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-slate-400">
                                    <MapPin className="h-4 w-4" />
                                    <span>
                                        {alumni.company}
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Button
                                    size='icon'
                                    variant='ghost'
                                    className="rounded-full bg-white/5 hover:bg-primary/20 text-slate-400 hover:text-primary"
                                >
                                    <Mail className="h-4 w-4" />
                                </Button>
                                <Button
                                    size='icon'
                                    variant='ghost'
                                    className="rounded-full bg-white/5 hover:bg-primary/20 text-slate-400 hover:text-primary"
                                >
                                    <Linkedin className="h-4 w-4" />
                                </Button>
                                <Button
                                    size='icon'
                                    variant='ghost'
                                    className="rounded-full bg-white/5 hover:bg-primary/20 text-slate-400 hover:text-primary"
                                >
                                    <Instagram className="h-4 w-4" />
                                </Button>
                                <Button
                                    size='icon'
                                    variant='ghost'
                                    className="rounded-full bg-white/5 hover:bg-primary/20 text-slate-400 hover:text-primary"
                                >
                                    <Globe className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>

                <div
                    className="lg:col-span-2 space-y-6"
                >
                    <Card className="glass-card p-8 rounded-2xl border border-white/5">
                        <h2 className="text-xl font-bold text-white mb-4">
                            About
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            {alumni.bio || `${alumni.name} is a ${alumni.position} at ${alumni.company} 
                            based in ${alumni.location}. As a proud alumnus of MAN 1 Jepara, they actively 
                            contribute to the alumni network by mentoring current students and participating 
                            in various alumni events.`}
                        </p>
                    </Card>

                    <Card className="glass-card p-8 rounded-2xl border border-white/5">
                        <h2 className="text-xl font-bold text-white mb-6">
                            Work Experience
                        </h2>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <Briefcase className="text-primary h-6 w-6" />
                                </div>

                                <div className="gap-1 flex-col flex">
                                    <h3 className="text-white font-bold">
                                        {alumni.position}
                                    </h3>
                                    <p className="text-primary text-sm">
                                        {alumni.company}
                                    </p>
                                    <p className="text-slate-500 text-sm mt-1">
                                        2018 - Preset
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="glass-card p-8 rounded-2xl border border-white/5">
                        <h2 className="text-xl font-bold text-white mb-6">
                            Education
                        </h2>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <Calendar className="text-primary h-6 w-6" />
                            </div>

                            <div>
                                <h3 className="text-white font-bold">
                                    MAN 1 Jepara
                                </h3>
                                <p className="text-slate-400">
                                    Alumni, Class of {alumni.gradYear}
                                </p>
                                <p className="text-slate-500 text-sm mt-1">
                                    IPA/IPS
                                </p>
                            </div>
                        </div>                   
                    </Card>
                </div>
            </div>
        </main>
    )
}