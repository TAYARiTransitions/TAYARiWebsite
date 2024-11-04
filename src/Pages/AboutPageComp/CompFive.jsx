import React from "react";
import { motion } from "framer-motion";

const CompFive = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }, // Adjust duration as needed
    },
  };

  return (
    <div>
      <div className="py-16 sm:py-20 px-10 sm:px-20 bg-white">
        <motion.div
          className="border-l-4 bbl py-2 pl-2 mb-5"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-black">
            Breaking Down Barriers
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <motion.div
            className="text-black text-md"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.5 }} // Delay for text content
          >
            <p className="leading-8">
              We understand that the barriers to success go beyond individual
              capability. Societal pressures, lack of resources, and
              institutional roadblocks can derail even the most talented
              individuals. That's why we focus on eliminating these obstacles:
            </p>
            <ul className="leading-8 ml-5 text-md">
              <li className="list-disc">
                {" "}
                <span className="font-bold">Societal Expectations and Cultural Norms:</span>{" "}
                We challenge outdated norms that limit choices and stifle
                ambition, allowing individuals to pursue their passions freely.
              </li>
              <li className="list-disc">
                {" "}
                <span className="font-bold">Lack of Support Systems:</span>{" "}
                We provide access to the networks, mentors, and resources young
                people need to manage life’s transitions effectively.
              </li>
              <li className="list-disc">
                {" "}
                <span className="font-bold">Economic Constraints:</span> By
                offering practical support and scalable programs, we help young
                people navigate financial instability and unlock opportunities.
              </li>
              <li className="list-disc">
                {" "}
                <span className="font-bold">Mindset Shifts:</span> We encourage
                personal growth by promoting self-awareness, resilience, and
                adaptability, helping individuals transform challenges into
                opportunities.
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
              src="https://img.freepik.com/premium-photo/3d-vector-isolated-light-bulb-target-with-word-vision-concept-as-vector-design-featurin_980716-676404.jpg?w=740"
              alt=""
              className="rounded-md lg:h-96 w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompFive;
