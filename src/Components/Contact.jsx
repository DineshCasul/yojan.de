import { useWindowWidth } from "../utils/windowResize";

const Contact = () => {
  const windowSize = useWindowWidth();

  const front_sm = "url(/grid-images.jpeg)";
  const front_lg = "url(/grid-images.jpeg)";
  return (
    <section id="#contact" className="w-screen h-screen">
      <div
        className="h-screen w-full absolute z-[-2]"
        style={{
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `${windowSize == "s" ? front_sm : front_lg}`,
        }}
      />
      <div
        className={`flex absolute ${
          windowSize == "s" ? "flex-col" : "flex-row"
        } h-screen w-full items-end justify-center z-1 overflow-hidden `}
      >
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          }}
          className="bg-black hiddenn overlayBox w-screen h-screen absolute opacity-90 z-[-1]"
        ></div>

        <div
          className={`flex flex-wrap ${
            windowSize == "s" ? "p-10px" : "p-[64px]"
          }  z-1 overflow-hidden `}
        >
          <p
            className={` z-2 hiddenn ${
              windowSize == "s"
                ? "text-[14px] px-[12px] "
                : "text-[34px] px-[72px] "
            } text-[36px] text-white`}
          >
            Discover the world of architectural innovation with Yojan De, a
            dynamic brand co-founded by the visionary minds of Sooraj Sharma and
            Srishti Vats in the picturesque town of Roorkee. Since our inception
            in 2022, we have been transforming dreams into reality through our
            exceptional services in designing, interior designing, architecture,
            and 3D rendering.
          </p>
          <p
            className={` z-2 hiddenn ${
              windowSize == "s"
                ? "text-[14px] px-[12px] pt-[64px] "
                : "text-[34px] px-[72px] pt-[64px]"
            } text-[36px] text-white`}
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
    </section>
  );
};

export default Contact;
