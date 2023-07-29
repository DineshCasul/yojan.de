import { useEffect, useState } from "react";

// #F0E8D5
// #703E32
// #997337;
//  black;
const IntroSection = () => {
  const floatingWords = [
    "design.",
    "architecture.",
    "3d Rendering.",
  ]
  const colorArray = ["#F0E8D5", "#997337", "#703E32", 'black', 'white'];
  const [backgroundColor, setBackgroundColor] = useState("#F0E8D5");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  

  useEffect(() => {
    if (currentImageIndex < 3) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      }, 1500);

      return () => clearInterval(timer);
    } else return;
  }, [currentImageIndex]);

  useEffect(()=>{
      setBackgroundColor(colorArray[currentImageIndex + 1]);
  },[currentImageIndex])

  return (
    <>
      <section
        id="intro"
        className={`flex h-screen w-screen items-center justify-center`}
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        <div className="w-full h-full flex items-center justify-center">
          {currentImageIndex < 3 ? (
            floatingWords.map((word, index) => {
              return (
                <div
                  className={`absolute w-full circle2 flex bg-${
                    colorArray[currentImageIndex + 1]
                  } justify-center items-center`}
                  value="5"
                >
                  <h1
                    key={index + Math.random()}
                    className={`absolute tracking-widest text-white one text-[24px] sm:text-[172px] z-1 ${
                      index === currentImageIndex ? "active  " : "inactive"
                    }`}
                  >
                    {word}
                  </h1>
                </div>
              );
            })
          ) : (
            <div className="relative logoToFadeInAndOut">
              <img
                src="src/assets/yojan-logo.png"
                width={250}
                height={250}
              ></img>
              <div
                className={`textToFadeInAndOut transition-[height]${
                  currentImageIndex < 3 ? "h-[10px] invisible" : "h-[100px]  "
                } `}
                style={{
                  transition: "height 2s",
                }}
              ></div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default IntroSection;
