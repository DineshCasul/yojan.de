import { useEffect, useState } from "react";

const IntroSection = ({scrollPos}) => {
  const floatingWords = [
    "design.",
    "architecture.",
    "visualization.",
  ]
  const colorArray = ["","#703E32", "#997337", '#F0E8D5', 'white'];
  const [backgroundColor, setBackgroundColor] = useState("#F0E8D5");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  

  useEffect(() => {
    if (currentImageIndex < 3 && !scrollPos) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      }, 1500);
   
      return () => clearInterval(timer);
    } else return setCurrentImageIndex(3);
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
                    className={`absolute tracking-widest  ${currentImageIndex == 0 ?  `text-darkSkin` : currentImageIndex == 1 ?  `text-skin` : currentImageIndex == 2 ?  `text-black` : 'text-white'} one text-[24px] sm:text-[140px] z-1 ${
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
                src="assets/yojan-logo.png"
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
