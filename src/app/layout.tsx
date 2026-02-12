import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Ikatan Alumni MAN 1 Jepara",
    description: "Wadah kolaborasi alumni MAN 1 Jepara untuk berkarya dan berkontribusi bagi bangsa",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id" className="dark" suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <div className="min-h-screen flex flex-col bg-background-dark">
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Navigation />
                        <main className="flex-grow">
                            {children}
                        </main>
                        <Footer />
                    </ThemeProvider>
                </div>
            </body>
        </html>
    );
}
