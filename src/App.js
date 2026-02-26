import { Route, Routes } from "react-router-dom";
import "aos/dist/aos.css";
import GuestLayout from "./Components/GuestLayout/GuestLayout";
import HeroSection from "./Components/GuestLayout/HeroSection";
import Education from "./Components/GuestLayout/Education";
import Contact from "./Components/GuestLayout/Contact";
import Projects from "./Components/GuestLayout/Projects";
import AboutSection from "./Components/GuestLayout/AboutSection";
import Experience from "./Components/GuestLayout/Experience";
import Certificates from "./Components/GuestLayout/Certificates";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
    useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route index element={<HeroSection />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="*" element={<h1>hello how are you</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
