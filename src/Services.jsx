import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  const [ref1, inView1] = useInView({
    threshold: 0.3, // Trigger when 30% of the element is visible
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView1) controls1.start('visible');
    if (inView2) controls2.start('visible');
    if (inView3) controls3.start('visible');
    if (inView4) controls4.start('visible');
  }, [controls1, inView1, controls2, inView2, controls3, inView3, controls4, inView4]);

  return (
    <>
      <div className='bg-white py-16 px-5'>
        {/* Header Animation */}
        <motion.div
          className="border-l-4 bbl py-2 pl-2 mb-8"
          ref={ref1}
          initial="hidden"
          animate={controls1}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <h2 className="text-3xl font-semibold text-black opacity-90">What We Offer</h2>
        </motion.div>
        
        <div className='grid grid-cols-1  lg:grid-cols-2 gap-10'>
          {/* Text Block Animation */}
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={controls2}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
          >
            <h3 className='text-black text-2xl opacity-90 pb-3'>TAYARi Transitions</h3>
            <p className='text-black opacity-90 font-semibold leading-7 pb-5'>
            We bridge the gap between potential and opportunity for Africa's youth. Our mission is to dismantle the societal, economic, and institutional barriers that hold you back. <br /> With our support, you’ll navigate life’s key transitions with confidence, resilience, and purpose—whether it's in your career, education, or personal growth.

            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              {/* Individual Items Animation */}
              {/* {['Community and Collaborations', 'Support for transitions', 'Impacting Lives'].map((item, idx) => (
                <motion.div
                  key={idx}
                  className='py-5 px-3 border pri1 text-white rounded-sm hover:cursor-pointer hover:scale-105 flex justify-left gap-2 items-center'
                  ref={ref3}
                  initial="hidden"
                  animate={controls3}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 + idx * 0.2 } }
                  }}
                >
                  <i className='bx bx-check-square text-2xl textSaffron bg-white px-2 py-1 rounded-full'></i>
                  <p>{item}</p>
                </motion.div>
              ))} */}
            </div>
          </motion.div>

          {/* Image Animation */}
          <motion.div
            ref={ref4}
            initial="hidden"
            animate={controls4}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }
            }}
          >
            <img
              src="https://img.freepik.com/premium-photo/compass-with-vision-highlighted-clear-sense-direction_904318-21795.jpg?w=740"
              alt=""
              className="rounded-md block"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
