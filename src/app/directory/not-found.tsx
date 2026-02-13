import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex-grow max-w-7xl mx-auto w-full px-4 md:px-10 py-20">
            <div className="flex flex-col items-center justify-center text-center">
                <div className="mb-6">
                    <span className="text-4xl text-primary">
                        Error
                    </span>
                </div>

                <h1 className="text-4xl font-black text-white mb-4">
                    Profile Not Found
                </h1>
                <p className="text-slate-400 max-w-md mb-8">
                    The Alumni profile you're looking for doesn't exist of has been removed
                </p>
                <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3"
                >
                    <Link
                        href="/directory"
                    >
                        <Home className="mr-2 h-4 w-4" />
                        Back To Directory
                    </Link>
                </Button>
            </div>
        </main>
    )
}