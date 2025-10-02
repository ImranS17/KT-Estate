import {Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Footer from './Components/Footer'
import Header from './Components/Header'


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}


