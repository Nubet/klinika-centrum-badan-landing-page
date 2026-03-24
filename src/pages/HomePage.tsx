import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import BenefitsSection from '../components/sections/BenefitsSection'
import HeroSection from '../components/sections/HeroSection'
import QualificationFormSection from '../components/sections/QualificationFormSection'
import RecruitmentSection from '../components/sections/RecruitmentSection'
import SiteFooter from '../components/sections/SiteFooter'
import SponsorSection from '../components/sections/SponsorSection'
import heroImage from '../assets/doctor-patient.webp'
import sponsorImage from '../assets/lab-equipment.webp'
import type { Trial } from '../types/domain'

function HomePage() {
  const [selectedArea, setSelectedArea] = useState<Trial['area'] | ''>('')
  const { pathname, search } = useLocation()

  useEffect(() => {
    if (pathname !== '/') {
      return
    }

    const section = new URLSearchParams(search).get('section')

    if (!section) {
      return
    }

    requestAnimationFrame(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [pathname, search])

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
