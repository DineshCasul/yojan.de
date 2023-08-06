import { useEffect, useState } from "react";
import "./App.css";
import "./About.css";
import About from "./Components/About";
import IntroSection from "./Components/IntroSection";
import Contact from "./Components/Contact";

const App = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    let timer = setTimeout(() => {
      window.scrollTo(0, window.innerHeight);
    }, 8000);
    return () => {
      clearTimeout(timer);
    };
  }, []);


  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hiddenn");
    hiddenElements?.forEach((ele) => observer.observe(ele));
  }, []);
  

  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },{threshold:0.2});

  return (
    <>
      <div className="h-full w-full scroller">
        <IntroSection />
        <About />
        <Contact/>
      </div>
    </>
  );
}

export default App;
