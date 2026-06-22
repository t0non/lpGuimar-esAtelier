import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProcessSection from '@/components/ProcessSection'
import AudienceSection from '@/components/AudienceSection'
import ApplicationsSection from '@/components/ApplicationsSection'
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
      <ProcessSection />
      <ApplicationsSection />
      <AudienceSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <StickyWhatsAppButton />
    </main>
  )
}
