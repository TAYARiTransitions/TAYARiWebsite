import  internshipImg from '../../assets/internship.png'
import InternshipProgram from '../PAGESCOMP/InternshipProgram'

const InternWel = () => {
    return ( 
        <div className="internWel pt-10 pb-10 md:pb-0 bg-white" >
            <div className="internWeldiv flex justify-center content-center items-center md:flex-row flex-row-reverse flex-wrap gap-6">
                <div className="interWel1 px-10">
                  <p className='max-w-xl text-black font-medium text-md leading-10 text-left '>We offer Internships in program development, business development, and more. Come be part of a dynamic team, passionate about creating sustainable change, a culture of innovation, creativity, collaboration, and a network of talented individuals committed to making a difference.</p>  
                </div>
                <div className="interWel1">
                    <img src= {internshipImg} alt="" className='md:max-w-lg rounded-md sm:max-w-md max-w-xs' />
                </div>
            </div>
            <div className="internWeldiv px-3 pt-16 sm:pt-20 sec1 pb-20">
                <h2 className='text-4xl sm:text-5xl  text-black font-semibold pb-10 opacity-90 text-center'>Browse Our Internships</h2>
                <p className=' text-black font-medium text-md leading-10 text-center pb-20'> We offer internships in Program development, Business development, Partnership and Engagements,  Fund Management and Technology.</p>
                <InternshipProgram />
            </div>
            
            
            
        </div>
        
     );
}
 
export default InternWel;