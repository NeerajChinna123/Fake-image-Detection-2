import { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { HomeIcon } from "@heroicons/react/solid";
const scaleVariants1 = {
  whileInView: {
    transform: "scale(0)",
    scale: [0, 1, 1.5, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      type: "spring",
      ease: "easeInOut",
      delay: 0.2,
    },
  },
};

const scaleVariants2 = {
  whileInView: {
    transform: "scale(0)",
    scale: [0, 1, 1.5, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      type: "spring",
      ease: "easeInOut",
      delay: 0.4,
    },
  },
};

const scaleVariants3 = {
  whileInView: {
    transform: "scale(0)",
    scale: [0, 1, 1.5, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      type: "spring",
      ease: "easeInOut",
      delay: 0.6,
    },
  },
};

const scaleVariants4 = {
  whileInView: {
    transform: "scale(0)",
    scale: [0, 1, 1.5, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      type: "spring",
      ease: "easeInOut",
      delay: 0.8,
    },
  },
};

const scaleVariants5 = {
  whileInView: {
    y: [100, 50, 0],
    opacity: [0, 0, 1],
    transition: { duration: 1 },
  },
};

const Thanks = () => {
  const [width, setWidth] = useState();

  const [height, setHeight] = useState();

  const [rem, setRem] = useState(true);

  const [num, setNum] = useState(100);

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  delay(100).then(() => setHeight(window?.innerWidth));
  delay(100).then(() => setWidth(window?.innerHeight));

  delay(3000).then(() => setRem(false));
 

  return (
    <>
      {rem && (
        <Confetti
          className="w-full"
          gravity={0.7}
          numberOfPieces={70}
          tweenDuration={2000}
         
        />
      )}
      <motion.div   whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2 }} id="mainHeading" className="flex w-full min-h-screen">
        <div className="mx-auto flex  flex-col justify-center text-center items-center max-w-7xl">
          <div className="font-ubuntu font-semibold text-[4.3rem]">
            Thanks for submitting the survey, your response has been recorded
          </div>

        <motion.a
            whileTap={{ scale: 0.9 }}
            href="/"
            //href={`${props.abouts[0].resume}?dl=`}
            className="flex mt-20 cursor-pointer justify-center rounded-[0.2rem] space-x-5 bg-darkBgLight py-4 font-ubuntu text-lg font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out lg:px-10 lg:hover:bg-gray-400 lg:hover:text-darkBgLight"
          >
               <HomeIcon className="h-7 w-7 animate-pulse hover:text-darkBgLight" />
            <p className="tracking-wider">Go To Home</p>
           
          </motion.a>
        </div>


      </motion.div>
    </>
  );
};

export default Thanks;
