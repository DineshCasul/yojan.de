import { useWindowWidth } from "../utils/windowResize";
import {ContactEmail} from './ContactEmail'
const Contact = ({isSuccess, setIsSuccess = () => {}}) => {
  const windowSize = useWindowWidth();

  const front_sm = "url(assets/contact-bg-sm.png)";
  const front_lg = "url(assets/contact-bg.png)";
  return (
    <section id="#contact" className="w-screen h-screen">
       <div
          className=" h-screen w-full absolute z-[-2]"
          style={{
            backgroundSize: "cover",
            backgroundImage: `${windowSize == "s" ? front_sm : front_lg}`,
          }}
        />

      <div
        className={`flex bg-image absolute ${
          windowSize == "s" ? "flex-col" : "flex-row"
        } h-screen w-full items-center justify-center z-1 overflow-hidden `}
      >
          <ContactEmail isSuccess={isSuccess} setIsSuccess = {setIsSuccess }/>
      </div>
    </section>
  );
};

export default Contact;
