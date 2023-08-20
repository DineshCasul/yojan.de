import { useWindowWidth } from "../utils/windowResize";

const About = () => {
  const windowSize = useWindowWidth();

  const front_sm = "url(assets/front-sm.png)";
  const front_lg = "url(assets/front-lg.png)";
  return (
    <section id="#about" className="w-screen h-screen">
      <div className="flex bg-image h-full w-full items-center">
        <div
          className=" h-screen w-full absolute z-[-2]"
          style={{
            backgroundSize: "cover",
            backgroundImage: `${windowSize == "s" ? front_sm : front_lg}`,
          }}
        />

      <div
        className={`flex absolute h-[80%] ${
          windowSize == "s" ? "flex-col" : "flex-row"
        } items-end justify-center z-1 overflow-hidden `}
      >
        <div
          className={`flex flex-wrap items-end  ${
            windowSize == "s" ? "p-10px" : "p-[64px]"
          }  z-1 `}
        >
          <h1  className={` font-bold hiddenn ${
              windowSize == "s"
                ? "text-12px px-[12px] "
                : "text-[24px] px-[72px] "
            } text-white `}>
          Yojan De: Where Vision Meets Reality
          </h1>
          <p
            className={`mt-[20px] hiddenn ${
              windowSize == "s"
                ? "text-12px px-[12px] "
                : "text-[24px] px-[72px] "
            } text-white `}
          >
           Yojan De is a testament to the fusion of architectural ingenuity and artistic finesse. At its helm are two exceptional minds, Sooraj Sharma and Srishti Vats, who are driven by an unwavering passion for design and an unrelenting pursuit of excellence.
          </p>
        </div>
      </div>
      </div>

    </section>
  );
};

export default About;
