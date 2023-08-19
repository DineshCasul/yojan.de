import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useWindowWidth } from "../utils/windowResize";
export const ContactEmail = ({setIsSuccess = ()=>{}}) => {
  const width = useWindowWidth();
  const form = useRef();
  useEffect(() => {
    setTimeout(() => {
      setIsSuccess(null);
    }, 5000);
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4btt0nc",
        "template_vhyuaib",
        form.current,
        "OaGy1gopMNFFV88Kz"
      )
      .then(
        (result) => {
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
        <div className="flex flex-col w-full pl-[35px] sm:pl-[80px] items-start justify-start py-[12px]">
          <h1 className="sm:text-[30px] text-[20px] text-black font-bold">
            Love to hear from you
          </h1>
          <h1 className="sm:text-[30px] text-[20px] text-black font-bold">
            Get in touch!
          </h1>
        </div>
        <form className="w-[80%] flex flex-col" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col mb-3">
            <label>Name</label>
            <input
              className="bg-skin appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-brown leading-tight focus:outline-none focus:bg-white focus:border-brown"
              type="text"
              name="from_name"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>Email</label>
            <input
              type="email"
              className="bg-skin appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-brown leading-tight focus:outline-none focus:bg-white focus:border-brown"
              name="from_email"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>Message</label>
            <textarea
              placeholder="Write your thoughts here..."
              className="bg-skin appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-brown leading-tight focus:outline-none focus:bg-white focus:border-brown"
              rows="6"
              cols="80"
              name="message"
            />
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <button
              className="p-[10px] w-[30%] sm:text-[18px] text-[14px] font-bold bg-skin border rounded hover:bg-white"
              type="submit"
              value="Send"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
     
    </>
  );
};
