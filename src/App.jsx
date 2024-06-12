import "../src/styles/main.css";
import "../src/styles/Body.css";
import BodySection from "./components/BodySection"
import HeaderSection from "./components/HeaderSection"
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import WavePattern from "./components/WavePattern";

function App() {

  return (
    <>
      <HeaderSection />
      <BodySection />
      <ContactSection />
      <WavePattern />
      <Footer />
    </>
  )
}

export default App
