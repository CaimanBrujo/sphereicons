import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-2xl font-bold">MAIN</h1>
      </main>
      <Footer />
    </div>
  )
}
