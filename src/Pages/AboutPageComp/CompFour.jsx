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
        <div className="text-white">
          <p>What sets TAYARi Transitions apart is our holistic, hands-on approach. We’re not just about career advice; we’re about personal transformation. Our programs focus on:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center text-white gap-5 mt-8">
          <motion.div
            className="border border-gray-600 h-[500px] rounded-t-xl hover:bg-white hover:text-black transition-all"
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
            <div className="px-4 py-4">
              <h2 className="text-center text-xl pb-3 font-semibold">
              Targeted Support for Each Transition
              </h2>
              <p className="text-sm leading-6">
              We recognize that each stage—from securing that first job to planning a meaningful retirement—requires a unique set of skills and resources. Our offerings are customized for each journey, ensuring relevance and impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="border border-gray-600 h-[500px] rounded-t-xl hover:bg-white hover:text-black transition-all"
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
            <div className="px-4 py-4">
              <h2 className="text-center text-xl pb-3 font-semibold">
              Community and Connection
              </h2>
              <p className="text-sm leading-6">
              We foster a strong sense of community, bringing together participants, mentors, and industry experts who are invested in each other’s success. Our exclusive networking events, peer forums, and online groups give you direct access to a supportive network.

              </p>
            </div>
          </motion.div>

          <motion.div
            className="border border-gray-600 h-[500px] rounded-t-xl hover:bg-white hover:text-black transition-all"
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
            <div className="px-4 py-4">
              <h2 className="text-center text-xl pb-3 font-semibold">
              Practical Tools and Real-world Insights
              </h2>
              <p className="text-sm leading-6">
              Through our workshops, resources library, and coaching, we provide not only the "what" but the "how"—equipping you with actionable skills that apply directly to your path, whatever it may be.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompFour;
