import { useEffect, useState } from "react";
import "./App.css";
import "./About.css";
import About from "./Components/About";
import IntroSection from "./Components/IntroSection";
import Contact from "./Components/Contact";

function App() {
  const [circleRender, setCircleRender] = useState(false);
  const renderCircles = () => {
    return (
      <>
        <div key={4} id={"mouse"} className="circleMain " value="5"></div>
        <div key={5} id={"mouse1"} className="circleMain " value="5"></div>
        <div key={5} id={"mouse2"} className="circleMain " value="5"></div>
      </>
    );
  };

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
    let timer2 = setTimeout(() => setCircleRender(true), 5000);

    return () => {
      clearTimeout(timer2);
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
  }, {threshold : 0.9});

  return (
    <>
      <div className="h-full w-full scroller">
        {/* {circleRender && renderCircles()} */}
        <IntroSection />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
