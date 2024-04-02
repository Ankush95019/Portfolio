import React, { useEffect, useState } from "react";
import img1 from "../images/3xogceeg.png";
import { motion } from "framer-motion";

const skillVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const skillListVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    y: 10,
    opacity: 1,
  },
};

export default function About() {
  const [skillButton, setSkillButton] = useState(null);

  const listItems = {
    skillsList: [
      "C/C++",
      "SQL",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node",
      "Express",
      "MongoDB",
    ],
    educationList: [
      "B.Tech - Computer Science and Engineering",
      "Chandigarh Group Of Colleges Jhanjeri",
    ],
    certificationsList: ["C++ Programming certificate by Coding Ninjas"],
  };

  useEffect(() => {
    setSkillButton("skillsList");
  }, []);

  const handleList = (buttonName) => {
    setSkillButton(buttonName);
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src={img1}
          alt="about_image"
          width={500}
          max-height={500}
          loading="lazy"
          decoding="async"
          overflow="hidden"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, Express, SQL, MongoDB,
            HTML, CSS, and Git. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
          <button
            onClick={() => {
              handleList("skillsList");
            }}
          >
            {skillButton === "skillsList" ? (
              <>
                <p className="mr-3 font-semibold text-white ">Skills</p>
                <div className="h-1 bg-purple-500 mt-2 mr-3"></div>
              </>
            ) : (
              <>
                <p className="mr-3 font-semibold hover:text-white text-[ADB7BE] ">
                  Skills
                </p>
                <div className="h-1 mt-2 mr-3"></div>
              </>
            )}
          </button>
          <button
            onClick={() => {
              handleList("educationList");
            }}
          >
            {skillButton === "educationList" ? (
              <>
                <p className="mr-3 font-semibold text-white">Education</p>
                <div className="h-1 bg-purple-500 mt-2 mr-3"></div>
              </>
            ) : (
              <>
                <p className="mr-3 font-semibold hover:text-white text-[#ADB7BE]">
                  Education
                </p>
                <div className="h-1 mt-2 mr-3"></div>
              </>
            )}
          </button>
          <button
            onClick={() => {
              handleList("certificationsList");
            }}
          >
            {skillButton === "certificationsList" ? (
              <>
                <p className="mr-3 font-semibold text-white">Certifications</p>
                <div className="h-1 bg-purple-500 mt-2 mr-3"></div>
              </>
            ) : (
              <>
                <p className="mr-3 font-semibold hover:text-white text-[#ADB7BE]">
                  Certifications
                </p>
                <div className="h-1 mt-2 mr-3"></div>
              </>
            )}
          </button>
        </div>
          <div className="mt-8">
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={skillVariants}
              className="list-disc pl-2"
            >
              {skillButton
                ? listItems[skillButton].map((item, index) => {
                    return (
                      <motion.li variants={skillListVariants} key={index}>
                        {item}
                      </motion.li>
                    );
                  })
                : listItems["skillsList"].map((item, index) => {
                    return (
                      <motion.li variants={skillListVariants} key={index}>
                        {item}
                      </motion.li>
                    );
                  })}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
