import React, { useState } from "react";
import { Heading } from "../components/UI Components/Headings";
import { IoMdMail } from "react-icons/io";
const ContactUs = () => {
  return (
    <div className="mt-10 relative z-40 bg-[rgba(0,0,0,0.6)]" id="contact">
      <div className="text-center text-4xl font-semibold">
        <Heading className="text-4xl">Contact me</Heading>
      </div>
      {/*  */}
      <div className="text-center w-[full] ">
        <div className="w-[40%] m-auto">
          <h1 className="text-left text-2xl mb-2 text-indigo-500">
            Feel free to reach out
          </h1>
          <div className="flex items-center justify-left gap-x-2 mb-6">
            <IoMdMail className="text-2xl text-red-500" />
            <div className="flex justify-left flex-col">
              <a href="" className="text-2xl text-left underline text-blue-400">
                karakheti.kk@gmail.com
              </a>
              <p>I mostly prefer email for communication</p>
            </div>
          </div>
        </div>
      </div>
      {/* contact form */}
      <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] m-auto">
        <form
          action="https://formspree.io/f/myyvanrb"
          method="POST"
          className="space-y-5"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="py-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name" // Add the name attribute
              className="pt-2 pb-2 pl-2 bg-[#282b30]"
            />
          </div>
          {/*  */}
          <div className="flex flex-col">
            <label htmlFor="email" className="py-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email" // Add the name attribute
              className="pt-2 pb-2 pl-2 bg-[#282b30]"
            />
          </div>
          {/*  */}
          <div className="flex flex-col">
            <label htmlFor="message" className="py-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              cols="30"
              rows="10"
              className="pt-2 pb-2 pl-2 bg-[#282b30]"
            ></textarea>
          </div>
          {/*  */}
          <div className="text-center">
            <button
              type="submit"
              className="border py-2 px-7 rounded-lg hover:bg-primary hover:text-black transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
