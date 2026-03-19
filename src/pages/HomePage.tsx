import { useState } from 'react'
import BenefitsSection from '../components/sections/BenefitsSection'
import HeroSection from '../components/sections/HeroSection'
import QualificationFormSection from '../components/sections/QualificationFormSection'
import RecruitmentSection from '../components/sections/RecruitmentSection'
import SiteFooter from '../components/sections/SiteFooter'
import SponsorSection from '../components/sections/SponsorSection'
import heroImage from '../assets/female-doctor-explaining-diagnosis-her-young-woman-patient.webp'
import sponsorImage from '../assets/factory-workers-white-lab-suits-black-latex-gloves-working-with-some-modern-equipment-very-clean-room.webp'
import type { Trial } from '../types/domain'

function HomePage() {
  const [selectedArea, setSelectedArea] = useState<Trial['area'] | ''>('')

  const handleAreaSelection = (area: Trial['area']) => {
    setSelectedArea(area)
    document.getElementById('kwalifikacja')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(213,220,249,0.3),transparent_40%),radial-gradient(circle_at_bottom,rgba(213,220,249,0.22),transparent_45%),#ffffff]">
      <HeroSection heroImageSrc={heroImage} />
      <main className="relative">
        <BenefitsSection />
        <RecruitmentSection onSelectArea={handleAreaSelection} />
        <SponsorSection imageSrc={sponsorImage} />
        <QualificationFormSection
          key={selectedArea || 'no-selection'}
          selectedArea={selectedArea}
        />
      </main>
      <SiteFooter />
    </div>
  )
}

export default HomePage
