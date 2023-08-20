import { useWindowWidth } from "../utils/windowResize";

const AboutPeople = () => {
  const windowSize = useWindowWidth();

  //   const front_sm = "url(assets/front-sm.png)";
  //   const front_lg = "url(assets/front-lg.png)";
  return (
    <section
      id="#aboutPeople"
      className="bg-black w-screen h-screen sm:p-[30px] p-[0px]"
    >
      <div className="flex flex-col h-full w-full p-[30px] items-center">
        <h1 className="sm:text-[100px] text-[40px] text-white font-bold font-mainFamily">
          Yojan.de
        </h1>
        {/* <h1 className="sm:text-[20px] text-[10px] text-white font-bold font-mainFamily">
          is
        </h1> */}
        <div className="founder-details sm:mt-[30px] mt-[10px] sm:flex-row flex-col flex items-center justify-center w-full">
          <div className="founder-sooraj flex w-full items-center justify-center flex-col">
            <div className="a flex flex-col items-center justify-center sm:h-full h-auto">
              <div className="w-32 h-32 rounded-full overflow-hidden ">
                <img
                  src="assets/sooraj-bw.jpeg"
                  alt="Sooraj Sharma"
                  className="w-full h-full object-cover object-top  "
                />
              </div>
              <div className="w-full flex flex-col items-center justify-center sm:h-full h-auto">
                <h1 className="font-bold text-white mt-[10px] text-[24px]">
                  Sooraj Sharma
                </h1>
                <div className=" text-skin text-center mt-[10px] text-[12px]">
                  <p className="w-full">
                    Bachelors in Architecture (B.Arch) <br/>DIT University, UTU -
                    2017 <br/>Masters in Disaster Mitigation & Management (M.Tech)<br/>  IIT Roorkee - 2021 
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex items-center w-full justify-center">
              <h1 className="font-bold sm:w-2/3 w-full text-center just text-white mt-[10px] text-[16px] font-mainFamily">
                Sooraj Sharma's journey redefines architectural boundaries. His
                designs encapsulate innovation, transforming concepts into
                remarkable structures. He's a guiding force in design.
              </h1>
            </div>
          </div>
          <div className=" founder-srishti sm:mt-[0px] mt-[30px] flex w-full items-center justify-center flex-col">
            <div className="w-full flex flex-col items-center justify-center  sm:h-full h-auto">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img
                  src="assets/sristi-bw.jpeg"
                  alt="Srishti Vats"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full flex flex-col items-center justify-center sm:h-full h-auto">
                <h1 className="font-bold text-white mt-[10px] text-[24px]">
                  Srishti Vats
                </h1>
                <div className="w text-skin text-center mt-[10px] text-[12px]">
                  <p className="w-full">
                    Bachelors in Architecture (B.Arch) <br/>DIT University, UTU -
                    2017 <br/> International Masters in Interior Architecture and
                    Design (M.Des) <br/> CEPT University, Ahmedabad & HFT Stuttgart, Germany - 2020
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center ">
              <h1 className="font-bold sm:w-2/3 w-full text-center just text-white mt-[10px] text-[16px] font-mainFamily">
                Srishti Vats infuses spaces with her gift for interior design.
                Her understanding of form and function creates captivating,
                soulful environments. She orchestrates experiences.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPeople;
