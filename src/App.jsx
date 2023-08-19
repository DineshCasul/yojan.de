import { useEffect, useState } from "react";
import "./App.css";
import "./About.css";
import "./Contact.css";
import About from "./Components/About";
import IntroSection from "./Components/IntroSection";
import Contact from "./Components/Contact";
import SubmitPopup from "./Components/submitPopup";

const App = () => {
  const [scrollPos, setScrollPos] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (!scrollPos) {
        window.scrollTo(0, window.innerHeight);
      }
    }, 8000);
    return () => {
      clearTimeout(timer);
    };
  }, [scrollPos]);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrollPos(true);
    });
    return () =>
      document.removeEventListener("scroll", () => {
        setScrollPos(true);
      });
  }, []);

  useEffect(() => {
    const elementToObserver = document.querySelectorAll(".hiddenn, .bg-image");
    elementToObserver?.forEach((ele) => {
      observer.observe(ele);
    });
  }, []);

  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.target.classList?.contains("bg-image") &&
          entry.isIntersecting
        ) {
          console.log("inside overlay");
          entry.target.classList.add("add-overlay");
        }
        if (
          entry.target.classList?.contains("hiddenn") &&
          entry.isIntersecting
        ) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove(["show", "add-overlay"]);
        }
      });
    },
    { threshold: 0.1 }
  );

  return (
    <>
      {isSuccess && <SubmitPopup />}
      <div className="h-full w-full scroller">
        <IntroSection scrollPos={scrollPos} />
        <About />
        <Contact isSuccess={isSuccess} setIsSuccess={setIsSuccess} />
      </div>
    </>
  );
};

export default App;
