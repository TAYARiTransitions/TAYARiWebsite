import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


const About = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const [ref1, inView1] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView1) controls1.start('visible');
    if (inView2) controls2.start('visible');
    if (inView3) controls3.start('visible');
  }, [controls1, inView1, controls2, inView2, controls3, inView3]);

  return (
    <div className='pri1 py-16 px-5 abtdivimghome'>
      {/* Header Animation */}
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={controls1}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
        className="border-l-4 obl py-2 pl-2 mb-5"
      >
        <h2 className="text-3xl font-semibold text-white">About Us</h2>
      </motion.div>

      <div className="flex justify-between flex-col-reverse lg:flex-row items-start gap-5">
        {/* Image Grid Animation */}
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={controls2}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
          }}
          className='abtImages grid grid-cols-2 gap-4 max-w-3xl lg:max-w-2xl'
        >
          {['Image 1', 'Image 2', 'Image 3', 'Image 4'].map((_, idx) => (
            <div key={idx} className='relative overflow-hidden'>
              <img 
                src={`https://img.freepik.com/free-photo/${idx === 0 ? 'abstract-psychedelic-papercut-background_23-2149303066.jpg?t=st=1729772429~exp=1729776029~hmac=6fe97c39732b0685e147d9328ad02341dbbb6db47a3d0ee11b9dead8612606d5&w=740' 
                  : idx === 1 ? 'gradient-abstract-background_23-2149947340.jpg?t=st=1729772456~exp=1729776056~hmac=faeec3c1343b6f1fc0ff2a7e37e8c435e32598968ec6eea6f89430c8d3890216&w=740' 
                  : idx === 2 ? 'vivid-blurred-colorful-wallpaper-background_58702-2901.jpg?t=st=1729772482~exp=1729776082~hmac=673af4f8107e303b811bf65258d25df488649893c35f077a44f378fbf2d5061a&w=740' 
                  : 'aesthetic-background-with-gradient-sunset-projector-lamp_53876-108137.jpg?t=st=1729772504~exp=1729776104~hmac=7cac9014aab0fb8f64968b70f5d658b8ddd0b1abda73bde147116d2cf078c7d6&w=740'}`}
                alt={`Image ${idx + 1}`} 
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </motion.div>

        {/* Text Block Animation */}
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={controls3}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
          }}
          className='abtTxt text-white lg:max-w-2xl'
        >
          <p className="leading-8 font-semibold pb-3">
            At TAYAR! Transitions, we provide more than just a service; we offer transition management—a structured approach to navigating life’s pivotal moments with confidence and clarity.
          </p>
          <p className="leading-8 font-semibold pb-5">
            Join a community that nurtures talent, accelerates leadership, and empowers you to turn challenges into stepping stones for success.
          </p>
          <button>
            <Link to='/AboutUs' className="text-md pri2 px-3 py-3 mb-5 sm:mb-0 ">
              Learn More
            </Link>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
