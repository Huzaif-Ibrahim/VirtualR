import Features from "./Components/Features"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Pricing from "./Components/Pricing"
import Testimonials from "./Components/Testimonials"
import Workflow from "./Components/Workflow"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-35">
        <Hero/>
        <Features/>
        <Workflow/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  )
}

export default App