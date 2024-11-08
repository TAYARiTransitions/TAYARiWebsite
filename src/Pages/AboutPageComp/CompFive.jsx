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
            Values and Culture
          </h2>
        </motion.div>

        <div className="grid grid-cols-1">
          <motion.div
            className="text-black text-md"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.5 }} // Delay for text content
          >
            <p className="leading-8">
            At TAYARi Transitions, we believe in the transformative potential of Africa’s youth, driven by the power of meaningful connections, continuous learning, and impactful growth. Our values and culture are the heart of our mission and define every experience within our programs. We are committed to fostering an environment where:

            </p>
            <ul className="leading-8 ml-5 text-md">
              <li className="list-disc">
                {" "}
                <span className="font-bold">Empowerment Drives Action:</span>{" "}
                We equip our participants with the tools, knowledge, and guidance they need to navigate life’s transitions and career challenges confidently. We empower each person to realize their potential, understanding that every journey is unique, and every goal achievable.

              </li>
              <li className="list-disc">
                {" "}
                <span className="font-bold">Collaboration and Connection Build Strength:</span>{" "}
                Our community is rooted in collaboration and mutual support. By bringing together participants, mentors, partners, and stakeholders, we create a vibrant network that shares experiences, inspires growth, and opens doors to new opportunities. We believe that connecting talents, ideas, and resources enriches us all.

              </li>
              <li className="list-disc">
                {" "}
                <span className="font-bold">Lifelong Learning Fuels Growth:</span> We embrace a culture of continuous learning and curiosity. From technical skills to personal growth, our programs are designed to build resilience and adaptability, instilling a mindset of lifelong learning that allows our participants to face future challenges with wisdom and agility.
              </li>
              <li className="list-disc">
                {" "}
                <span className="font-bold">Impact and Purpose Guide Our Vision:</span>Every initiative at TAYARi is driven by our commitment to make a meaningful impact in the lives of our participants and in the broader African community. Our programs are crafted with purpose—to not only advance individual careers but also to create a ripple effect that supports the development and prosperity of entire communities.
              </li>
              <li className="list-disc">
                {" "}
                <span className="font-bold">Diversity, Inclusivity, and Respect Shape Our Community:</span> We value each person’s background, perspective, and journey. We cultivate a welcoming and respectful environment where everyone’s voice is heard, and all contributions are valued. By embracing diversity, we encourage richer perspectives and foster a culture that celebrates inclusivity and belonging.
              </li>
              <li className="list-disc">
                {" "}
                <span className="font-bold">Excellence and Integrity Define Our Standards:</span> At TAYARi, we pursue excellence in everything we do, holding ourselves accountable to the highest standards of integrity, honesty, and transparency. We aim to provide programs and resources that truly serve our participants, aligning every action with our core mission and values.
              </li>
              <li className=" font-semibold">
                {" "} 
Ready to take the next step? Whether you’re a young professional, potential partner, or supporter, we invite you to join us in shaping Africa’s future. Connect with us to see how we can grow together.

              </li>
            </ul>
          </motion.div>

         
        </div>
      </div>
    </div>
  );
};

export default CompFive;
