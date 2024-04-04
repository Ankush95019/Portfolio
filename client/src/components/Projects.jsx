import React, { useEffect, useState } from "react";
import myntraImg from "../images/myntra.png";
import portfolioImg from '../images/portfolio-img.png'
import todoImg from '../images/todo.png'
import calImg from '../images/cal.png'
import bmsImg from '../images/bms.png'
import hmsImg from '../images/hms.png'


import {motion} from 'framer-motion'
import { HiCode } from "react-icons/hi";
import { PiEyeBold } from "react-icons/pi";



const projectVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  }
};


const projectListVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    y: 15,
    opacity: 1,
  },
};



const Card = (props) => { // creating component for lists
  return (
    <motion.div
      variants={projectListVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="text-white mt-10"
    >
      <div
        className="h-52 md:h-56 md:min-w-56 rounded-t-xl relative group w-full rounded-lg"
        style={{
          backgroundImage: `url('${props.imgUrl}')`,
          backgroundSize: "cover",
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <a
            className="h-16 w-16 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link bg-transparent"
            href={props.gitHubUrl}
          >
            <HiCode className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white bg-transparent" />
          </a>
          <a
            className="h-16 w-16 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link bg-transparent"
            href="/"
          >
            <PiEyeBold className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white bg-transparent" />
          </a>
        </div>
      </div>
      <div className="">
        <h5 className="text-2xl font-medium p-2">{props.title}</h5>
        <p className="text-[#adb7be] px-2">{props.description}</p>
      </div>
    </motion.div>
  );
};

export default function Projects() {

  const [activeButton, setActiveButton] = useState(null);

  const projectsList = {
    allProjects: [
      {
        id: 1,
        imgUrl: portfolioImg,
        gitHubUrl: "/",
        title: "React Portfolio Website",
        description: "Created Portfolio Website in React js",
      },
      {
        id: 2,
        imgUrl: hmsImg,
        gitHubUrl: "https://github.com/Ankush95019/hospital_management_system",
        title: "Hospital Management System",
        description: "Built this web application using MERN stack",
      },
      {
        id: 3,
        imgUrl: myntraImg,
        gitHubUrl: "https://github.com/Ankush95019/Myntra-Clone",
        title: "E-commerce Application",
        description: "Built using HTML, CSS, JavaScript",
      },
      {
        id: 4,
        imgUrl: todoImg,
        gitHubUrl: "https://github.com/Ankush95019/todo",
        title: "ToDo App",
        description: "Manage Your daily tasks. Built using React js",
      },
      {
        id: 5,
        imgUrl: calImg,
        gitHubUrl: "https://github.com/Ankush95019/calculator-version-1",
        title: "Simple Calculator",
        description: "Performs mathematical operations",
      },
      {
        id: 6,
        imgUrl: bmsImg,
        gitHubUrl: "https://github.com/Ankush95019/Banking_Management_System",
        title: "Banking Management System",
        description: "Based on OOP'S concepts",
      },
    ],
    web: [
      {
        id: 1,
        imgUrl: portfolioImg,
        gitHubUrl: "/",
        title: "React Portfolio Website",
        description: "Created Portfolio Website in React js",
      },
      {
        id: 2,
        imgUrl: myntraImg,
        gitHubUrl: "/",
        title: "Hospital Management System",
        description: "Built this web application using MERN stack",
      },
      {
        id: 3,
        imgUrl: myntraImg,
        gitHubUrl: "https://github.com/Ankush95019/Myntra-Clone",
        title: "E-commerce Application",
        description: "Built using HTML, CSS, JavaScript",
      },
      {
        id: 4,
        imgUrl: todoImg,
        gitHubUrl: "https://github.com/Ankush95019/todo",
        title: "ToDo App",
        description: "Manage Your daily tasks. Built using React js",
      },
      {
        id: 5,
        imgUrl: calImg,
        gitHubUrl: "https://github.com/Ankush95019/calculator-version-1",
        title: "Simple Calculator",
        description: "Performs mathematical operations",
      },
    ],
    menuDriven: [
      {
        id: 1,
        imgUrl: bmsImg,
        gitHubUrl: "https://github.com/Ankush95019/Banking_Management_System",
        title: "Banking Management System",
        description: "Based on OOP'S concepts",
      },
    ],
  };


  useEffect(()=>{
    setActiveButton('allProjects');
  },[])
  



  const handleButton = (buttonName) => {
    setActiveButton(buttonName);
  };


  return (
    <section id="project" className="mt-16">
      <h2 className="text-white font-bold text-4xl text-center">My Projects</h2>
      <div className="flex gap-3 items-center justify-center mt-12">
        {activeButton === "allProjects" ? (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            layoutId="underline"
            className="text-xl border-2 border-purple-500 rounded-full px-6 py-3 text-white"
            onClick={() => {
              handleButton("allProjects");
            }}
          >
            All
          </motion.button>
        ) : (
          <button
            className="text-xl border-2 border-slate-600 rounded-full px-6 py-3 hover:text-white hover:border-white text-[#ADB7BE]"
            onClick={() => {
              handleButton("allProjects");
            }}
          >
            All
          </button>
        )}
        {activeButton === "web" ? (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            layoutId="underline"
            className="text-xl border-2 border-purple-500 rounded-full px-6 py-3 text-white"
            onClick={() => {
              handleButton("web");
            }}
          >
            Web
          </motion.button>
        ) : (
          <button
            className="text-[#ADB7BE] text-xl border-2 border-slate-600 rounded-full py-3 px-6 hover:text-white hover:border-white"
            onClick={() => {
              handleButton("web");
            }}
          >
            Web
          </button>
        )}
        {activeButton === "menuDriven" ? (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            layoutId="underline"
            className="text-xl border-2 border-purple-500 rounded-full px-6 py-3 text-white"
            onClick={() => {
              handleButton("menuDriven");
            }}
          >
            Menu Driven
          </motion.button>
        ) : (
          <button
            className="text-[#ADB7BE] text-xl border-2 border-slate-600 rounded-full py-3 px-6 hover:text-white hover:border-white"
            onClick={() => {
              handleButton("menuDriven");
            }}
          >
            Menu Driven
          </button>
        )}
      </div>

      <motion.ul
        variants={projectVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 gap-8 md:gap-12"
      >
        {activeButton ?
          projectsList[activeButton].map((item) => {
              return (
                <li key={item.id} className="w-full h-full">
                  <Card
                    imgUrl={item.imgUrl}
                    gitHubUrl={item.gitHubUrl}
                    title={item.title}
                    description={item.description}
                  />
                </li>
              );
            })
        : projectsList['allProjects'].map((item) => {
              return (
                <li key={item.id} className="w-full h-full">
                  <Card
                    imgUrl={item.imgUrl}
                    gitHubUrl={item.gitHubUrl}
                    title={item.title}
                    description={item.description}
                  />
                </li>
              );
            })
          }
      </motion.ul>
    </section>
  );
}
