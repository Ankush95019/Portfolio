import React, { useState } from "react";
import gitHubIcon from "../images/github-icon.04fa7de0.svg";
import linkedInIcon from "../images/linkedin-icon.67ae5368.svg";
import gmailIcon from "../images/gmail-logo.png";
// import spn from "../images/Spinner@1.25x-1.0s-200px-200px.svg";
// import axios from "axios";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { contactInformation } from "../services/Apis";

// const BASE_URLI = "https://portfoliobackend-tart.onrender.com";

export default function Contact() {
  const [inputText, setInputText] = useState({
    email: "",
    subject: "",
    msg: "",
  });

  const [confirmationMsg, setConfirmationMsg] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputText((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const config = {
      "Content-Type": "application/json",
    };

    const response = await contactInformation(inputText, config);

    if (response.status === 200) {
      setLoading(false);
      setConfirmationMsg(true);

      setInputText({
        ...inputText,
        email: "",
        subject: "",
        msg: "",
      });
    } else {
      console.log("Error from contact form");
      setConfirmationMsg(false);
    }

    // try {
    //   const response = await axios.post(
    //     `${BASE_URL}/contactform`,
    //     inputText
    //   )
    //   // console.log(response);
    //   const {success,check} = response.data;
    //   if (success) {
    //     setConfirmationMsg(true);
    //   }
    //   if(check){
    //     setConfirmationMsg(false);
    //   }
    // } catch (error) {
    //   if (error.response) {
    //     // Handle server-side errors (e.g., duplicate email)
    //     console.error('Server error:', error.response.data);
    //   } else {
    //     // Handle network-related errors (e.g., server unreachable)
    //     console.error('Network error:', error.message);
    //   }
    //   setConfirmationMsg(false);
    // }

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
      className="grid md:grid-cols-2 my-12 md:my-12 pb-24 gap-4 relative pt-14"
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
          {loading ? (
            <button
              type="button"
              className="bg-purple-500 text-white font-medium py-2.5 px-5 rounded-lg w-full flex items-center justify-center cursor-not-allowed opacity-75"
              disabled
            >
              <svg
                className="h-6 w-6 animate-spin mr-3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-100"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span className="font-semibold">Processing...</span>
            </button>
          ) : (
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          )}
        </form>
        {confirmationMsg === true ? (
          <>
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 30 }}
              transition={{ ease: "easeIn" }}
              className="md:hidden flex bg-green-600 text-white font-medium py-2.5 px-3 rounded-lg w-fit absolute -top-1/2 right-0 z-20"
            >
              <div>
                <p>Your Message Sent Successfully.</p>
                <p>I will contact to you shortly.</p>
              </div>
              <button
                onClick={handleCloseButton}
                className="flex pl-2 items-center"
              >
                <IoCloseSharp className="text-white text-2xl" />
              </button>
            </motion.div>
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 110 }}
              transition={{ ease: "easeIn" }}
              className="hidden md:visible md:flex bg-green-600 text-white font-medium py-2.5 px-3 rounded-lg w-max absolute -top-12 right-16 z-20"
            >
              <div>
                <p>Your Message Sent Successfully.</p>
                <p>I will contact to you shortly.</p>
              </div>
              <button
                onClick={handleCloseButton}
                className="flex pl-2 items-center"
              >
                <IoCloseSharp className="text-white text-2xl" />
              </button>
            </motion.div>
          </>
        ) : confirmationMsg === null ? (
          <div className=""></div>
        ) : (
          <>
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 30 }}
              transition={{ ease: "easeIn" }}
              className="md:hidden flex bg-red-600 text-white font-medium py-2.5 px-3 rounded-lg w-fit absolute -top-1/2 right-0 z-20"
            >
              <div>
                <p>Message not sent due to some server issue.</p>
                <p>You can contact through E-mail.</p>
              </div>
              <button
                onClick={handleCloseButton}
                className="flex pl-2 items-center"
              >
                <IoCloseSharp className="text-white text-2xl" />
              </button>
            </motion.div>
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 110 }}
              transition={{ ease: "easeIn" }}
              className="hidden md:visible md:flex bg-red-600 text-white font-medium py-2.5 px-3 rounded-lg w-max absolute -top-12 right-16 z-20"
            >
              <div>
                <p>AMessage not sent due to some server issue.</p>
                <p>You can contact through E-mail.</p>
              </div>
              <button
                onClick={handleCloseButton}
                className="flex pl-2 items-center"
              >
                <IoCloseSharp className="text-white text-2xl" />
              </button>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
