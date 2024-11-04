import React from 'react';
import { motion } from 'framer-motion';

const CompSix = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }, // Duration for the fade-in effect
    },
  };

  return (
    <div>
      <div className="py-16 sm:py-20 px-10 sm:px-20 bg-gray-100">
        <motion.div
          className="border-l-4 obl py-2 pl-2 mb-5"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-black">
            WHAT WE OFFER
          </h2>
          <h2 className='hidden sm:block text-xl font-semibold text-black'>
            Transition Management for a Better Future
          </h2>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7'>
          <motion.div
            className='text-black text-md'
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.5 }} // Delay for text content
          >
            <p className='leading-8'>
              At TAYAR! Transitions, we provide more than just a service; we offer transition management—a structured approach to navigating life’s pivotal moments with confidence and clarity. Through our support, young people can:
            </p>
            <ul className='leading-8 ml-5 text-md'>
              <li className='list-disc'>
                <span className='font-bold'>Adapt to Change:</span> Navigate complex life changes with resilience and wisdom.
              </li>
              <li className='list-disc'>
                <span className='font-bold'>Cope with Uncertainty:</span> Learn to thrive in uncertain environments by leveraging skills and knowledge for growth.
              </li>
              <li className='list-disc'>
                <span className='font-bold'>Turn Challenges into Opportunities:</span> Approach difficulties as stepping stones for success, leading to accelerated learning and personal growth.
              </li>
              <li className='list-disc'>
                <span className='font-bold'>Develop Self-Awareness:</span> Gain deeper insight into strengths and weaknesses, unlocking unique potential.
              </li>
              <li className='list-disc'>
                <span className='font-bold'>Create Sustainable Pathways:</span> Build long-term personal and professional success while enhancing overall well-being.
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 1 }} // Delay for the image to appear after text
          >
            <img
              src="https://img.freepik.com/premium-photo/compass-with-vision-highlighted-clear-sense-direction_904318-21795.jpg?w=740"
              alt=""
              className="rounded-md lg:h-96 w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompSix;
