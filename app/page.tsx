import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SpecialtiesSection } from "@/components/specialties-section"
import { SpaceSection } from "@/components/space-section"
import { ProfessionalSection } from "@/components/professional-section"
import { MissionSection } from "@/components/mission-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <Header />
      <main>
        <HeroSection />
        <SpecialtiesSection />
        <SpaceSection />
        <ProfessionalSection />
        <MissionSection />
      </main>
      <Footer />
    </div>
  )
}
