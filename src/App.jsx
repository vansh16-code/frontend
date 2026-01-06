
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './pages/About'
import Footer from './components/Footer'

import Form from './components/Form'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Form />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  )
}
