
import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import StatsSection from './Components/StatsSection'

function App() {


  return (
    <>

      <Navbar />

      <Hero />

      <StatsSection />

      <ToastContainer />

    </>
  )
}

export default App
