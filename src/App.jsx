
import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import StatsSection from './Components/StatsSection'
import Cards from './Components/Cards'
import { Suspense } from 'react'
import Faq from './Components/Faq'
import Pricing from './Components/Pricing'
import CTASection from './Components/CTASection'
import Footer from './Components/Footer'


const dataFetch = async() => {
  const res = await fetch("/data.json")
  return res.json()
}

function App() {
 
  const dataPromise = dataFetch();

  return (
    <>

      <Navbar />

      <Hero />

      <StatsSection />

      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
      <Cards dataPromise={dataPromise}/>
      </Suspense>

      <Faq />

      <Pricing />

      <CTASection />

      <Footer />

      <ToastContainer />

    </>
  )
}

export default App
