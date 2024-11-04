import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3, // 30% of the section must be visible
    triggerOnce: true, // Only animate once
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
    setEmail(''); // Clear the input field after submission
  };

  return (
    <div className="newsletter bg-white py-16 px-5 newsletter">
      {/* Newsletter Heading */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
        className="border-l-4 bbl py-2 pl-2 mb-8 z-30"
      >
        <h2 className="text-3xl font-semibold text-white">Subscribe to Our Newsletter</h2>
        <p className="mt-1 text-white">Stay updated with the latest news and updates from our team.</p>
      </motion.div>

      {/* Newsletter Subscription Form */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.2, duration: 0.6 } }
        }}
        className="newsletter-form max-w-md mx-auto text-center"
      >
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
          <motion.input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:w-auto flex-grow p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
          />
          <motion.button
            type="submit"
            className="w-full sm:w-auto pri2 text-white px-5 py-3 rounded-sm shadow-md transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Subscribe
          </motion.button>
        </form>
        <motion.p
          className="text-md text-white font-semibold mt-4"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.4, duration: 0.6 } }
          }}
        >
          We respect your privacy. Unsubscribe at any time.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Newsletter;
