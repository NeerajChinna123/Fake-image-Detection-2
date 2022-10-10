import Head from 'next/head'
import Image from 'next/image'
import IMAGES from '../Images/Images'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const Classify = () => {

  
 const images = [{ src: "../Images", alt: "Your description here 1" }];
  const arrowStyles = {
    position: "absolute",
    top: ".7em",
    bottom: "auto",
    padding: ".4em",
    zIndex: 2,
    
  };
  const arrowStyles1 = {
    top: ".7em",
    bottom: "auto",
    padding: ".4em",
    zIndex: 2,
    
  };
  return (
    <div className="flex  bg-gray-100 min-h-screen lg:w-full lg:justify-center">
      <div className="mx-auto w-[3rem] h-[54rem] mt-10 flex justify-center max-w-4xl">
        <Carousel
         className="flex -ml-[40rem]"
         statusFormatter={(currentItem,total) => (
           <div className="absolute font-sans group top-[38rem] right-[18.5rem] w-[5rem] text-[1rem] text-darkBg">{currentItem} / {total}</div>
         )}
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) => (
          <motion.div
          className="absolute group top-[37rem] left-[10rem] cursor-pointer"
          onClick={clickHandler}
          whileTap={{ scale: 0.95 }} 
            
          >
            <ChevronLeftIcon className="w-14 h-14 rounded-full bg-darkBgLight p-4 text-gray-300 transition duration-500 ease-in-out  group-hover:bg-gray-500 group-hover:text-darkBgLight" />
          </motion.div>
        )}
        renderArrowNext={(clickHandler, hasNext, labelNext) => (
          <motion.div
          className="absolute group top-[37rem] left-[13rem] ml-60"
          whileTap={{ scale: 0.95 }}  
           
          >
            <ChevronRightIcon  onClick={clickHandler} className="w-14 h-14 cursor-pointer rounded-full bg-darkBgLight p-4 text-gray-400 transition duration-500 ease-in-out  group-hover:bg-gray-500 group-hover:text-darkBgLight" />
          </motion.div>
       )}
        
        renderIndicator={(onClickHandler, isSelected, index, label) => {
        return (
          <span
           // style={style}
            className={isSelected ? 'bg-gray-500 transition duration-500 ease-in-out  hover:text-darkBgLight text-darkBgLight hover:bg-gray-500 rounded-full p-3 mr-2 mb-2 w-12 h-12 flex-wrap cursor-pointer' : 'bg-darkBgLight mb-2 transition duration-500 ease-in-out  hover:bg-gray-500 rounded-full p-3 mr-2 text-gray-300 w-12 h-12 flex-wrap cursor-pointer'}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          >
            {index+1}
          </span>
        );
      }} showThumbs={false}>  
          {IMAGES.map((image)=>(
            <div>   
                <img className="h-[34rem] object-contain border-r-2" id={image.id} src={image.path}></img>
            </div>
          ))}
        </Carousel>
      </div>
      {/* <div className="border-r-2 bg-gray-500 w-16 h-16">
        <p> FORM SECTION</p>
      </div> */}
    </div>
  )
}

export default Classify
