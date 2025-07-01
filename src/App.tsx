import Header from './components/Header'
import Footer from './components/Footer'
import SphereIcons from './components/SphereIcons'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <SphereIcons />
      </main>
      <Footer />
    </div>
  )
}
