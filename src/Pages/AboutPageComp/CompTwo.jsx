import React from 'react';
import { motion } from 'framer-motion';

const CompTwo = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }, // Slower animation duration
    },
  };

  return (
    <div>
      <div className="abtdivimg py-20">
        <div className="border-l-4 obl py-2 pl-2 mb-8 ml-7 sm:ml-20">
          <h2 className="text-3xl font-semibold text-white">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center mx-7 sm:mx-20">
          <motion.div
            className="bg-white h-96 sm:h-full p-4 sm:p-6 rounded-md"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex justify-center sm:justify-start pb-2">
              <i className="bx bxs-group text-4xl text-black opacity-90 border rounded-sm py-2 px-2 border-green-500"></i>
            </div>

            <h3 className="text-2xl font-semibold text-black pb-3 text-center sm:text-left">
              Transition Founders
            </h3>
            <p className="text-md text-black leading-8">
              Future-ready and fit-for-purpose venture accelerator: that incubates and provides seed investment and wraparound support to future-ready promising MSMEs to thrive, create jobs and improve livelihoods.
            </p>
          </motion.div>

          <motion.div
            className="bg-white h-96 sm:h-full p-4 sm:p-6 rounded-md"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex justify-center sm:justify-start pb-2">
              <i className="bx bxs-group text-4xl text-black opacity-90 border rounded-sm py-2 px-2 border-green-500"></i>
            </div>
            <h3 className="text-2xl font-semibold text-black pb-3 text-center sm:text-left">
              Transitions Encore
            </h3>
            <p className="text-md text-black leading-8">
              To empower senior executives to continue making a meaningful impact in their retirement, leveraging their expertise, experience, and passion to drive positive change.
            </p>
          </motion.div>

          <motion.div
            className="bg-white sm:col-span-2 p-4 sm:p-6 rounded-md leading-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex justify-center pb-2 sm:justify-start">
              <i className="bx bxs-group text-4xl text-black opacity-90 border rounded-sm py-2 px-2 border-green-500"></i>
            </div>
            <h3 className="text-2xl font-semibold text-black pb-3 text-center sm:text-left">
              Employable Incubator
            </h3>
            <p className="text-md text-black leading-8">
              Fully paid early career placement. Future-ready and fit-for-purpose to empower senior opportunities to aid graduates to venture accelerator: that incubates executives to continue transition from learning to making a meaningful impact with greater wisdom.
            </p>
            <p className="text-md text-black hidden sm:block leading-8">
              Mid2Lead: A leadership accelerator that seeks to prepare and connect future-ready promising MSMEs to thrive, create jobs, and improve livelihoods, leveraging the expertise and experience of mid-career professionals in leadership roles at the workplace.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompTwo;
