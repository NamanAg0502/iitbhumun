import { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import ActiveNavbar from "../components/ActiveNavbar";
import Main from "../components/Main";
import Hero from "../components/Hero";
import Footer from "../components/Footer"

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  }, []);
  
  return (
    <div className="bg-[#F5F5F5]">
      {navbar ? <ActiveNavbar /> : <NavBar />}
      <Hero/>
      <Main/>
      <Footer/>
    </div>
  );
}