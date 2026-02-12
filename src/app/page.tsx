import { AboutSection } from "@/components/about-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";
import { NewsSection } from "@/components/news-section";
import { StatsSection } from "@/components/stats-section";
import { TestimonialSection } from "@/components/testimonial-section";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <HeroSection />
            <StatsSection />
            <AboutSection />
            <NewsSection />
            <TestimonialSection />
            <CTASection />
            <Footer />
        </main>
    )
}
