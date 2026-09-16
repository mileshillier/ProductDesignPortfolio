import { Route, Routes } from 'react-router-dom'
import { Footer } from '@/components/Footer'
import { NavBar } from '@/components/NavBar'
import { DesignSystemPage } from '@/pages/DesignSystemPage'
import { HomePage } from '@/pages/HomePage'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/design-system" element={<DesignSystemPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
