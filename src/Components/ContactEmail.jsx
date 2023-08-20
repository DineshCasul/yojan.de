import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactEmail = ({ isSuccess, setIsSuccess = () => {} }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  useEffect(() => {
    setTimeout(() => {
      setIsSuccess(null);
    }, 5000);
  },[isSuccess]);

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_4btt0nc",
        "template_vhyuaib",
        form.current,
        "OaGy1gopMNFFV88Kz"
      )
      .then(
        (result) => {
          setFormData({
            from_name: "",
            from_email: "",
            message: "",
          });
          setIsSuccess(result.status);
        },
        (error) => {
          setIsSuccess(error.status);
        }
      );
  };

  return (
    <>
      <div className="sm:h-5/6 sm:w-full flex justify-center flex-col items-center shadow-brown ">
        <div className="flex flex-col w-auto  items-start justify-start py-[12px]">
        
          <h1 className="sm:text-[100px] font-mainFamily hiddenn text-[40px] text-white font-bold">
            Get in touch!
          </h1>
          <h1 className="sm:text-[20px] font-mainFamily mb-[20px] text-[10px] text-white font-bold">
          Let's Transform Your Vision into Architectural Masterpieces Together!
          </h1>
        </div>
        <div className="sm:w-3/5 w-full flex items-center justify-center">
        <form className="w-[80%] flex flex-col" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col mb-3">
            {/* <label>Name</label> */}
            <input
              className="bg-black appearance-none rounded w-full py-2 px-4 text-skin leading-tight focus:outline-none focus:bg-brown focus:border-brown"
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleFormData}
              placeholder="your name please.."
              autocomplete={"off"}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            {/* <label>Email</label> */}
            <input
              type="email"
              className="bg-black appearance-none rounded w-full py-2 px-4 text-skin leading-tight focus:outline-none focus:bg-brown focus:border-brown"
              name="from_email"
              value={formData.from_email}
              onChange={handleFormData}
              placeholder="your email please.."
              autocomplete={"off"}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            {/* <label>Message</label> */}
            <textarea
              placeholder="your queries here..."
              className="bg-black appearance-none rounded w-full py-2 px-4 text-skin leading-tight focus:outline-none focus:bg-brown"
              rows="6"
              cols="80"
              name="message"
              value={formData.message}
              onChange={handleFormData}
              autocomplete={"off"}
              required
            />
          </div>
          <div className="flex items-center flex-col justify-center mt-[5px]">
            <button
              className="text-white p-[4px] w-[30%] sm:w-[8%] sm:text-[18px] text-[14px] font-normal bg-black rounded hover:bg-brown"
              type="submit"
              value="Send"
            >
              Submit
            </button>
            <span className="pl-[4px] text-white mt-[6px] flex items-center` justify-center">
            or reach us on 
            <a className="pointer hover:text-[green] font-bold ml-[6px]"  rel="noopener noreferrer" href={'https://api.whatsapp.com/send?phone=09897210076'} target={'_blank'}> Whatsapp 
             </a>
             <span className="flex items-center"><img className="ml-[4px]" style={{width:'14px'}} src="assets\whatsapp.png"/></span>
            </span>
          </div>
        </form>
            </div>
      
      </div>
    </>
  );
};
