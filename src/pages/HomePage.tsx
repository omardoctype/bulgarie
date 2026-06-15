import { useTranslation } from 'react-i18next'
import { Seo } from '../components/common/Seo'
import { AdminStatsSection } from '../components/home/AdminStatsSection'
import { ContactSection } from '../components/home/ContactSection'
import { FaqPreview } from '../components/home/FaqPreview'
import { HeroSection } from '../components/home/HeroSection'
import { HomeAboutSection } from '../components/home/HomeAboutSection'
import { HomeMainServices } from '../components/home/HomeMainServices'
import { PrepareProjectSection } from '../components/home/PrepareProjectSection'
import { ProfessionalSectorsSection } from '../components/home/ProfessionalSectorsSection'
import { SimpleProcessSection } from '../components/home/SimpleProcessSection'
import { WhoForSection } from '../components/home/WhoForSection'
import { WhyBulgariaSection } from '../components/home/WhyBulgariaSection'

export function HomePage() {
  const { t } = useTranslation()

  return (
    <>
      <Seo
        title={t('seo.pages.home.title')}
        description={t('seo.pages.home.description')}
        canonicalPath="/"
      />
      <HeroSection />
      <WhoForSection />
      <HomeMainServices />
      <HomeAboutSection />
      <WhyBulgariaSection />
      <PrepareProjectSection />
      <SimpleProcessSection />
      <ProfessionalSectorsSection />
      <AdminStatsSection />
      <FaqPreview />
      <ContactSection />
    </>
  )
}
