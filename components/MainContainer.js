import Head from 'next/head'
import Image from 'next/image'
import TypeWriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import { DownloadIcon } from '@heroicons/react/solid'
import { ChatIcon } from '@heroicons/react/solid'
import { ArrowRightIcon } from '@heroicons/react/solid'
import { LogoutIcon} from '@heroicons/react/outline'
const scaleVariants1 = {
    whileInView: {
      transform: 'scale(0)',
      scale: [0, 1, 1.5, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        type: 'spring',
        ease: 'easeInOut',
        delay: 0.2,
      },
    },
  }
  
  const scaleVariants2 = {
    whileInView: {
      transform: 'scale(0)',
      scale: [0, 1, 1.5, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        type: 'spring',
        ease: 'easeInOut',
        delay: 0.4,
      },
    },
  }
  
  const scaleVariants3 = {
    whileInView: {
      transform: 'scale(0)',
      scale: [0, 1, 1.5, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        type: 'spring',
        ease: 'easeInOut',
        delay: 0.6,
      },
    },
  }
  
  const scaleVariants4 = {
    whileInView: {
      transform: 'scale(0)',
      scale: [0, 1, 1.5, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        type: 'spring',
        ease: 'easeInOut',
        delay: 0.8,
      },
    },
  }
  
  const scaleVariants5 = {
    whileInView: {
      y: [100, 50, 0],
      opacity: [0, 0, 1],
      transition: { duration: 1 },
    },
  }


const MainContainer = () => {

  var mainHeading = "Lorem Ipsum is simply dummy text of the and type setting industry."
  return (
    <div className="flex lg:min-h-screen lg:w-full lg:items-center lg:justify-center">
      <div className="mx-auto flex flex-col max-w-7xl">
          <div className="font-ubuntu h-44 mb-10 text-[4rem]">
          <TypeWriter
                  options={{
                    delay: 25,
                  }}
                  onInit={(typewriter) => {
                    typewriter.typeString(mainHeading).start()
                  }}
                />
          </div>
          <motion.div variants={scaleVariants5}
        whileInView={scaleVariants5.whileInView} className="flex flex-row lg:space-x-14 lg:space-y-0 space-y-5 justify-center mt-24">
                 <motion.a
                    whileTap={{ scale: 0.9 }}
                    href="/Classify"
                    //href={`${props.abouts[0].resume}?dl=`}
                    className="flex cursor-pointer justify-center rounded-[0.2rem] space-x-5 bg-darkBgLight py-4 font-ubuntu text-lg font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out lg:px-10 lg:hover:bg-green-400 lg:hover:text-darkBgLight"
                  >
                   <p className="tracking-wider">Proceed</p>
                   <ArrowRightIcon  className="h-7 w-7 animate-pulse hover:text-darkBgLight" />
                    
                  </motion.a>

                  <motion.a
                    href="#contact"
                    whileTap={{ scale: 0.9 }}
                    className="mt-8 flex cursor-pointer justify-center rounded-[0.2rem] space-x-5 bg-gray-800 py-4 font-ubuntu text-lg font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out lg:px-8 lg:hover:bg-red-400 lg:hover:text-darkBgLight"
                  >
                     <p className="tracking-wider">Leave</p>
                    <LogoutIcon className="h-7 w-7 animate-pulse hover:text-darkBgLight" />
                  </motion.a>
          </motion.div>
      </div>
    </div>
  )
}

export default MainContainer
