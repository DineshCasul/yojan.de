import { useWindowWidth } from "../utils/windowResize";
import {ContactEmail} from './ContactEmail'
const Contact = () => {
  const windowSize = useWindowWidth();

  const front_sm = "url(assets/grid-images.png)";
  const front_lg = "url(assets/grid-images.png)";
  return (
    <section id="#contact" className="w-screen h-screen">
      {/* <div
        className="h-screen w-full absolute z-[-2]"
        style={{
          // backgroundAttachment: "fixed",
          // backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: front_lg,
        }}
      /> */}
      <div
        className={`flex absolute ${
          windowSize == "s" ? "flex-col" : "flex-row"
        } h-screen w-full items-center justify-center z-1 overflow-hidden `}
      >
          <ContactEmail/>
      </div>
    </section>
  );
};

export default Contact;
