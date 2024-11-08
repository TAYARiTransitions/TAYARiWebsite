import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Teammembers from '../src/TeamMembers';
import { useEffect } from 'react';


const Team = () => {
  return (
    <div className='py-16 px-5 bg-white'>
      <div className="border-l-4 bbl py-2 pl-2 mb-8">
        <h2 className="text-3xl font-semibold text-black opacity-90">Meet Our Team Members</h2>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {Teammembers.map((Teammember, idx) => (
          <TeamMemberCard key={Teammember.id} Teammember={Teammember} index={idx} />
        ))}
      </div>
    </div>
  );
};

const TeamMemberCard = ({ Teammember, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3, // 30% of the card must be in view
    triggerOnce: true, // Only trigger the animation once
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.2 } }
      }}
      className=' border border-gray-400 border-opacity-50 bg-white hover:shadow-xl rounded-t-md sm:rounded-s-md relative group'
    >

      <div className=' flex flex-col sm:flex-row gap-1 sm:gap-3'>
        <img
          src={Teammember.img}
          alt=""
          className='h-96 sm:h-72 w-full sm:w-1/2 object-cover rounded-t-md sm:rounded-s-md'
        />
        <div className='w-full sm:w-1/2 px-2 py-3'>
          <div className='flex text-sm gap-2 py-2'>
            <p className='text-black'>{Teammember.title}</p>
            <p className='text-md text-black font-bold'>{Teammember.name}</p>
          </div>
          <p className='text-sm text-black leading-6'>{Teammember.info}</p>
        </div>

      </div>
      <div className='absolute inset-0 bg-black bg-opacity-85 opacity-0 group-hover:opacity-100 transition-opacity duration-300' id='overlay'>
          <p className='text-white text-sm  p-3 leading-7'>
            {Teammember.details}
          </p>
      </div>
    </motion.div>
  );
};

export default Team;
