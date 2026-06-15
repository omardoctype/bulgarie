import { Outlet } from 'react-router-dom'
import { FloatingWhatsApp } from '../common/FloatingWhatsApp'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  return (
    <div className="min-h-screen bg-white text-brand-ink">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
