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
          <p
            className={` hiddenn ${
              windowSize == "s"
                ? "text-12px px-[12px] "
                : "text-[24px] px-[72px] "
            } text-white `}
          >
            Discover the world of architectural innovation with Yojan De, a
            dynamic brand co-founded by the visionary minds of Sooraj Sharma and
            Srishti Vats in the picturesque town of Roorkee. Since our inception
            in 2022, we have been transforming dreams into reality through our
            exceptional services in designing, interior designing, architecture,
            and 3D rendering.
          </p>
        </div>
      </div>
      </div>

    </section>
  );
};

export default About;
