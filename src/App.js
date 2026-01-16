import { Route, Routes } from "react-router";
import "aos/dist/aos.css";
import GuestLayout from "./Components/GuestLayout/GuestLayout";
import HeroSection from "./Components/GuestLayout/HeroSection";
import Education from "./Components/GuestLayout/Education";
import Contact from "./Components/GuestLayout/Contact";
import Projects from "./Components/GuestLayout/Projects";
import AboutSection from "./Components/GuestLayout/AboutSection";
import Experience from "./Components/GuestLayout/Experience";
import Certificates from "./Components/GuestLayout/Certificates";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout/>}>
          <Route index element={<HeroSection/>}></Route>
          <Route path="/" element={<HeroSection/>}></Route>
          <Route path="/education" element={<Education/>}></Route>
          <Route path="/experience" element={<Experience/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/certificates" element={<Certificates/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/about" element={<AboutSection/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
