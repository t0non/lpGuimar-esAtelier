import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AudienceSection from '@/components/AudienceSection'
import BenefitsSection from '@/components/BenefitsSection'
import ProcessSection from '@/components/ProcessSection'
import ApplicationsSection from '@/components/ApplicationsSection'
import PricingCTASection from '@/components/PricingCTASection'
import GallerySection from '@/components/GallerySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import FinalCTASection from '@/components/FinalCTASection'
import Footer from '@/components/Footer'
import StickyWhatsAppButton from '@/components/StickyWhatsAppButton'

export default function Home() {
  return (
    <main className="has-sticky-btn">
      <Header />
      <HeroSection />
      <AudienceSection />
      <BenefitsSection />
      <ProcessSection />
      <ApplicationsSection />
      <PricingCTASection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <StickyWhatsAppButton />
    </main>
  )
}
