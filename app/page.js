import Image from 'next/image'
import MainSection from './components/MainSection'
import Navbar from './components/NavBar'
import SkillsSection from './components/SkillsSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000000]">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <MainSection />
        {/* <SkillsSection /> */}
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
