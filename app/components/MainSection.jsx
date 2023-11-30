"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const MainSection = () => {
  return (
  <section>
    <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} className="col-span-8 place-self-center text-center sm:text-left justify-self-start">

            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Hi! I'm {""}
                </span>
                <br></br>
                <TypeAnimation
                sequence={[
                    "Ripunjay",
                    1000,
                    "Backend Developer",
                    1000,
                    "Devops Engineer",
                    1000,
                    "Loves Automation",
                    1000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-8 ">
            Tech aficionado weaving innovation through code, leading teams, and amplifying tech magic across communities.
            </p>
            <div>
              <a href="https://www.linkedin.com/in/ripunjay-singh-b22467246/" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-400 to-pink-600 hover:bg-slate-800 text-black">
                  Hire Me
                </button>
              </a>
              <a href="https://drive.google.com/file/d/1vaW4geDxlc1FbkH4RhlcVcFNxKtz3hAf/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-purple-400 text-white border border-purple-400 mt-3">
                  Download CV
                </button>
              </a>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          {/* <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"> */}
          <div className="rounded-full bg-[#000000] w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] relative">

            <Image
              src="/images/gitcard.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
    </div>
    </section>
  )
}

export default MainSection