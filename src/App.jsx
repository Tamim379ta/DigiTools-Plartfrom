
import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import StatsSection from './Components/StatsSection'
import Carts from './Components/Carts'

function App() {


  return (
    <>

      <Navbar />

      <Hero />

      <StatsSection />

      <Carts />

      <ToastContainer />

    </>
  )
}

export default App
