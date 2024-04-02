import Typewriter from "typewriter-effect"
import React from 'react'

export const Type = () => {
  return (
    <Typewriter
      options={{
        strings:[
          "Ankush",
          "Web Developer",
          "Fullstack Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        delay:50,
        
      }
    }
    />
  );
}
