import Head from "next/head";
import Image from "next/image";
import IMAGES from "../Images/Images";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ArrowRightIcon,ChevronDoubleRightIcon } from "@heroicons/react/solid";
import { LogoutIcon,CheckCircleIcon } from "@heroicons/react/outline";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/solid";
import { motion } from "framer-motion";
import Question from "../components/Question";
import Skeleton from "react-loading-skeleton";

const Classify = () => {
  const [currentIt, setCurrentIt] = useState();
  const [navi, setNavi] = useState(false);
  const [totalIm, setTotalIm] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [selected, setSelected] = useState("");
  const [fakeSel, setFakeSel] = useState(false);
  const [checked, setChecked] = useState([]);


  var hp =(currentIt/totalIm)*100

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

  const scaleVariants5 = {
    whileInView: {
      y: [100, 50, 0],
      opacity: [0, 0, 1],
      transition: { duration: 1 },
    },
  };

  // function navigate() {
  //   setNavi(false)
  //   setTimeout(testFun(), 2000);
  // }

  // function testFun() {
  //   setNavi(true)
  // }

  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  function Loader(){
    setSelected('');
    setChecked([]);
    setFakeSel(false);
    !isLoading && setIsLoading(true);
    setTimeout(function(){
      window.location.href = '#Question';
   }, 2000);
    delay(3000).then(() => (setIsLoading(false)));
  } 
  return (
    <div className="flex flex-col  bg-gray-100 min-h-screen lg:w-full lg:justify-center">
      <div className="mx-auto w-full h-[48rem] mt-20 flex justify-center max-w-4xl">
        <Carousel
          className="flex"
          statusFormatter={(currentItem, total) => {
            setCurrentIt(currentItem);
            setTotalIm(total);
            //</div> <div className="absolute font-sans group top-[36rem] right-[26.5rem] w-[5rem] text-[1rem] text-darkBg">{currentIt} / {totalIm} {setCurrentIt(currentItem)} {setTotalIm(total)}  </div>
          }}
          renderArrowPrev={(clickHandler, hasPrev, labelPrev) => (
            <motion.div
              className="absolute group top-[37rem] left-[10rem] cursor-pointer hidden"
              //onClick={clickHandler}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeftIcon className="w-14 h-14 rounded-full bg-darkBgLight p-4 text-gray-300 transition duration-500 ease-in-out  group-hover:bg-gray-500 group-hover:text-darkBgLight" />
            </motion.div>
          )}
          renderArrowNext={(clickHandler, hasNext, labelNext) => (
            <motion.div
              className="absolute z-10 group top-[39rem] left-[8rem] ml-60"
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                onClick={() => {
                  clickHandler();
                  Loader();
                //  navigate();
                }}
                className="group cursor-pointer "
              >
                <motion.div className="rounded-[0.2rem] bg-gray-800 font-ubuntu text-lg font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out  lg:hover:bg-gray-400 lg:hover:text-darkBgLight">
                  <div className="flex h-16 w-44 space-x-4 justify-center items-center transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <p className=" tracking-[0.2rem] text-[1.5rem]">Next</p>
                    <PaperAirplaneIcon className="h-7 w-7 animate-pulse rotate-90 hover:text-darkBgLight" />
                  </div>
                </motion.div>
              </motion.a>
            </motion.div>
          )}
          //   renderIndicator={(onClickHandler, isSelected, index, label) => {
          //   return (
          //     <span
          //      // style={style}
          //       className={isSelected ? 'bg-gray-500 transition duration-500 ease-in-out  hover:text-darkBgLight text-darkBgLight hover:bg-gray-500 rounded-full p-3 mr-2 mb-2 w-12 h-12 flex-wrap cursor-pointer' : 'bg-darkBgLight mb-2 transition duration-500 ease-in-out  hover:bg-gray-500 rounded-full p-3 mr-2 text-gray-300 w-12 h-12 flex-wrap cursor-pointer'}
          //       onClick={onClickHandler}
          //       onKeyDown={onClickHandler}
          //       value={index}
          //       key={index}
          //       role="button"
          //       tabIndex={0}
          //       aria-label={`${label} ${index + 1}`}
          //     >
          //       {index+1}
          //     </span>
          //   );
          // }}
          showIndicators={false}
          showThumbs={false}
        >
          {IMAGES.map((image) => (
            <div>
              <img
                className="h-[34rem] object-contain border-r-4"
                id={image.id}
                src={image.path}
              ></img>
            </div>
          ))}
        </Carousel>
        <div className="absolute bottom-[-20rem]">
          <div className="relative shadow-md left-[30rem] bottom-[20rem] h-[30rem] w-[3rem] bg-gray-300 rounded-full dark:bg-gray-700">
            <div
              style={{
                height: `${hp}%`
              }}
              className={`w-[3rem] transition-all duration-500 ease-in-out bottom-0 absolute bg-green-400 rounded-full dark:bg-green-500`}
            >
          </div>
          <div className="top-[50%] absolute">
            <p className="text-[0.7rem] font-semibold font-ubuntu  text-center w-[3rem]">{currentIt} / {totalIm}</p>
            </div> 
          </div>
        </div>
      </div>
      {/* <div className="border-r-2 bg-gray-500 w-16 h-16">
        <p> FORM SECTION</p>
      </div> */}
      <div className="mx-auto w-full flex justify-center max-w-4xl">
        <Question load={isLoading} selectedSet={setSelected} fakeSelSet={setFakeSel} checkedSet={setChecked} selectedI={selected} checkedI={checked} fakeSelI={fakeSel} />
      </div>
      <motion.div
          variants={scaleVariants5}
          whileInView={scaleVariants5.whileInView}
          className="flex flex-row lg:space-x-14 lg:space-y-0 space-y-5 justify-center mt-16 mb-16"
        >
          <motion.a
            whileTap={{ scale: 0.9 }}
            href="/"
            //href={`${props.abouts[0].resume}?dl=`}
            className="flex cursor-pointer justify-center rounded-[0.2rem] space-x-5 bg-darkBgLight py-4 font-ubuntu text-lg font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out lg:px-10 lg:hover:bg-red-400 lg:hover:text-darkBgLight"
          >
            <p className="tracking-wider">Leave</p>
            <LogoutIcon className="h-7 w-7 animate-pulse hover:text-darkBgLight" />
          </motion.a>

          <motion.a
            onClick
            whileTap={{ scale: 0.9 }}
            className="mt-8 flex cursor-pointer justify-center rounded-[0.2rem] space-x-5 bg-gray-800 py-4 font-ubuntu text-lg font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out lg:px-8 lg:hover:bg-green-400 lg:hover:text-darkBgLight"
          >
            <p className="tracking-wider">Submit</p>
            <CheckCircleIcon className="h-7 w-7 animate-pulse hover:text-darkBgLight " />
          </motion.a>
        </motion.div>
    </div>
  );
};

export default Classify;
