import { BrowserRouter, Route, Routes } from "react-router"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ScrollToTop from "./components/ScrollToTop"


function App() {

  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
