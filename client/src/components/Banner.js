import { Type } from "./Typewriter";
import myImage from '../images/AK.jpg'
import {motion} from 'framer-motion'


export default function Banner() {

  return (
    <section
     className='lg:py-20' id="home">
      <div 
        className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div 
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}  className='col-span-8 place-self-center text-center sm:text-left justify-self-start' style={{opacity: "1",transform: "none"}}>
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I'm</span><br/>
            <span className="" ><Type/></span>
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>I pursued my B.Tech in Computer Science and Engineering from Chandigarh Group of Colleges. <br/> I'm a highly motivated individual with a passion for learning new skill sets and gaining valuable experience in the process. <br/> I love exploring new technologies and leveraging them to solve real-life problems.</p>
        <div>
          <a className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-200 text-white" href="#contact">Hire Me</a>
          <a className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3" href="https://drive.google.com/file/d/1coYOkNVaaBNPS3ojPel0sn2s2u5R0dcN/view?usp=sharing"><span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span></a>
        </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, scale: 0.2}}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}  className="col-span-4 place-self-center mt-4 lg:mt-0" style={{opacity: "1", transform: 'none'}}>
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <img loading="lazy" width={300} height={300} decoding="async" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full" style={{color: 'transparent'}} src={myImage} alt="portfolio_image"/>
            </div>
          </motion.div>
      </div>
    </section>
  )
}
