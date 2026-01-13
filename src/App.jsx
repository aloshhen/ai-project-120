import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Catalog from './components/Catalog'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Navigation />
      <Hero />
      <Features />
      <Catalog />
      <About />
      <Footer />
    </div>
  )
}

export default App