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

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5'>
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
      className='w-72 border border-gray-400 border-opacity-50 bg-white hover:shadow-xl rounded-t-xl pb-16 text-center'
    >
      <div>
        <img
          src={Teammember.img}
          alt=""
          className='h-52 rounded-t-medium w-full object-cover'
        />
        <p className='text-black py-2'>{Teammember.title}</p>
        <p className='text-xl text-black font-bold'>{Teammember.name}</p>
      </div>
    </motion.div>
  );
};

export default Team;
