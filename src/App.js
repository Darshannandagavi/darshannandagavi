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
import LetMySpace from "./Components/Projects/LetMySpace";
import MorseSecurity from "./Components/Projects/MorseSecurity";
import QuickFix from "./Components/Projects/QuickFix";
import Jarvis from "./Components/Projects/Jarvis";
import FridayAI from "./Components/Projects/FridayAI";

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
        <Route path="projects">
          <Route index element={<Projects />} />
          <Route path="letmyspace" element={<LetMySpace />} />
          <Route path="morsesecurity" element={<MorseSecurity />} />
          <Route path="quickfix" element={<QuickFix />} />
          <Route path="jarvis" element={<Jarvis />} />
          <Route path="fridayai" element={<FridayAI />} />
        </Route>
        <Route
          path="*"
          element={
            <div
              style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1
                style={{
                  marginTop: "100px",
                  color: "white",
                  textAlign: "center",
                  fontSize: "50px",
                }}
              >
                <h2>404</h2> Page Not Found!
              </h1>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
