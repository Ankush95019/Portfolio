import React, { useState } from "react";
import gitHubIcon from "../images/github-icon.04fa7de0.svg";
import linkedInIcon from "../images/linkedin-icon.67ae5368.svg";
import gmailIcon from "../images/gmail-logo.png";
import axios from "axios";
import { IoCloseSharp } from "react-icons/io5";
import {motion} from 'framer-motion'

const BASE_URL = "https://portfoliobackend-tart.onrender.com";

export default function Contact() {
  const [inputText, setInputText] = useState({
    email: "",
    subject: "",
    msg: "",
  });

  const [confirmationMsg,setConfirmationMsg] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputText((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${BASE_URL}/contactform`,
        inputText
      )
      // console.log(response);
      const {success,check} = response.data;
      if (success) {
        setConfirmationMsg(true);
      }
      if(check){
        setConfirmationMsg(false);
      } 
    } catch (error) {
      if (error.response) {
        // Handle server-side errors (e.g., duplicate email)
        console.error('Server error:', error.response.data);
      } else {
        // Handle network-related errors (e.g., server unreachable)
        console.error('Network error:', error.message);
      }
      setConfirmationMsg(false);
    }

    setInputText({
      email: "",
      subject: "",
      msg: "",
    });
    setTimeout(() => {
      setConfirmationMsg(null);
    }, 10000);
  };

  const handleCloseButton = () => {
    setConfirmationMsg(null);
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 pb-36 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-[355px] -left-5 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="bg-transparent">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="flex flex-row gap-2">
          <a href="https://github.com/Ankush95019/">
            <img
              src={gitHubIcon}
              alt="githubIcon"
              loading="lazy"
              width={48}
              decoding="async"
              style={{ color: "transparent" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/ankush4510">
            <img
              src={linkedInIcon}
              alt="linkedinIcon"
              width={48}
              loading="lazy"
              decoding="async"
              style={{ color: "transparent" }}
            />
          </a>
          <a href="mailto:ankush4031@gmail.com">
            <img
              src={gmailIcon}
              alt="gmailicon"
              width={46}
              loading="lazy"
              decoding="async"
              style={{ color: "transparent", borderRadius: "50%" }}
            />
          </a>
        </div>
      </div>
      <div className="z-10 bg-transparent relative">
        <form onSubmit={handleSubmit} className="flex flex-col bg-transparent">
          <div className="mb-6 bg-transparent">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium bg-transparent"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInput}
              value={inputText.email}
              required
              placeholder="something@something.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6 bg-transparent">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium bg-transparent"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              onChange={handleInput}
              value={inputText.subject}
              required
              placeholder="Just saying hi"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
            />
          </div>
          <div className="mb-6 bg-transparent">
            <label
              htmlFor="msg"
              className="text-white block text-sm mb-2 font-medium bg-transparent"
            >
              Message
            </label>
            <textarea
              name="msg"
              id="msg"
              onChange={handleInput}
              value={inputText.msg}
              required
              placeholder="Let's talk about..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
        {confirmationMsg === true ? (
          <motion.div
            animate={{ x: 150 }}
            initial={{ x: 300 }}
            transition={{ ease: "easeIn" }}
            className="flex bg-green-600 text-white font-medium py-2.5 px-3 rounded-lg w-90 absolute top-0 right-0 z-20"
          >
            <div className="bg-transparent">
              <p className="bg-transparent">Your Message Sent Successfully.</p>
              <p className="bg-transparent">I will contact to you shortly.</p>
            </div>
            <button
              onClick={handleCloseButton}
              className="flex bg-transparent pl-2 items-center"
            >
              <IoCloseSharp className="bg-transparent text-white text-2xl" />
            </button>
          </motion.div>
        ) : confirmationMsg === null ? (
          <div
            className=""
          ></div>
        ) : (
          <motion.div
            animate={{ x: 150 }}
            initial={{ x: 300 }}
            transition={{ ease: "easeIn" }}
            className="flex bg-red-600 text-white font-medium py-2.5 px-3 rounded-lg w-90 absolute top-0 right-0 z-20"
          >
            <div className="bg-transparent">
              <p className="bg-transparent">
                Message not sent due to some server issue.
              </p>
              <p className="bg-transparent">You can contact through E-mail.</p>
            </div>
            <button
              onClick={handleCloseButton}
              className="flex bg-transparent pl-2 items-center"
            >
              <IoCloseSharp className="bg-transparent text-white text-2xl" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
