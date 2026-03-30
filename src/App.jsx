
import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import StatsSection from './Components/StatsSection'
import Carts from './Components/Carts'
import { Suspense } from 'react'


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
      <Carts dataPromise={dataPromise}/>
      </Suspense>

      <ToastContainer />

    </>
  )
}

export default App
