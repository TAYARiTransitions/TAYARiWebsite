import React from "react";
import { motion } from "framer-motion";

const CompFour = () => {
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
      <div className="pri1 py-16 sm:py-20 px-10 sm:px-20">
        <div className="border-l-4 obl py-2 pl-2 mb-5">
          <h2 className="text-3xl font-semibold text-white">Why Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center text-white gap-5 mt-10">
          <motion.div
            className="border border-gray-600 h-[450px] rounded-t-xl hover:bg-white hover:text-black transition-all"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              src="https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg?t=st=1729778774~exp=1729782374~hmac=40e06dc53bbd6829e46f5700c4612cb07384f9e1d58c6ce7816d83358b1f03bd&w=740"
              alt=""
              className="rounded-t-xl object-cover"
            />
            <div className="px-4 py-2">
              <h2 className="text-center text-xl pb-3 font-semibold">
                Holistic Support
              </h2>
              <p>
                We address all facets of transition, from career changes and
                education to personal milestones. Our approach is comprehensive,
                ensuring that individuals receive the guidance they need at
                every stage.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="border border-gray-600 h-[450px] rounded-t-xl hover:bg-white hover:text-black transition-all"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }} // Slight delay for the second card
          >
            <img
              src="https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg?t=st=1729778774~exp=1729782374~hmac=40e06dc53bbd6829e46f5700c4612cb07384f9e1d58c6ce7816d83358b1f03bd&w=740"
              alt=""
              className="rounded-t-xl object-cover"
            />
            <div className="px-4 py-2">
              <h2 className="text-center text-xl pb-3 font-semibold">
                Community and Networking
              </h2>
              <p>
                We cultivate a strong, supportive community where individuals
                can learn from one another and grow together, building networks
                that last a lifetime.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="border border-gray-600 h-[450px] rounded-t-xl hover:bg-white hover:text-black transition-all"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.2 }} // Slight delay for the third card
          >
            <img
              src="https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg?t=st=1729778774~exp=1729782374~hmac=40e06dc53bbd6829e46f5700c4612cb07384f9e1d58c6ce7816d83358b1f03bd&w=740"
              alt=""
              className="rounded-t-xl object-cover"
            />
            <div className="px-4 py-2">
              <h2 className="text-center text-xl pb-3 font-semibold">
                Transitions Passport
              </h2>
              <p>
                Our hybrid approach, both physical and virtual, eliminates
                geographical barriers, making our offerings accessible to all,
                regardless of location.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompFour;
