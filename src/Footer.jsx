import { Link } from 'react-router-dom';


const Footer = (prop) => {
  return (
    // <footer className="footer  p-10 flex flex-col justify-center content-center items-center text-center sm:grid sm:grid-cols-2 gap-5 md:grid md:grid-cols-4  sm:place-items-center text-white " id="footer">
    //   {/* <aside className="flex flex-col justify-center content-center items-center">
    //     <img src= {prop.img} alt="" className="w-2/4" />
    //     <p>
    //       TAYARi Transitions Ltd.
    //       <br />
    //       Serving as gap for opportunities to their potentials.
    //     </p>
    //   </aside>
    //   <nav className="flex flex-col justify-center content-center items-center">
    //     <h6 className="footer-title text-xl text-white">Services</h6>
    //     <a className="link link-hover">Life Impactation.</a>
    //     <a className="link link-hover">Collaborations.</a>
    //     <a className="link link-hover">Support.</a>

    //   </nav>
    //   <nav className="flex flex-col justify-center content-center items-center">
    //     <h6 className="footer-title text-xl  text-white">Company</h6>
    //     <Link to='/' className="link link-hover">Home</Link>
    //     <Link to='/AboutUs' className="link link-hover">About Us</Link>
    //     <Link to= '/OurInternship' className="link link-hover">Internships</Link>
    //     <Link to='/OurProgrammes' className="link link-hover">Programs</Link>
    //   </nav>
    //   <nav className="flex flex-col justify-center content-center items-center">
    //     <h6 className="footer-title text-xl  text-white">Legal</h6>
    //     <a className="link link-hover">Terms of use</a>
    //     <a className="link link-hover">Privacy policy</a>
    //     <a className="link link-hover">Cookie policy</a>
    //   </nav> */}
    // </footer>
    <>
      <footer className='pri1 py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center place-content-center gap-5 '>
        <div className='flex flex-col items-center'>
            <img src={prop.img} alt="" className="w-2/6" />
            <div className='flex justify-center gap-3 mt-1'>
              <i class='bx bxl-facebook-circle text-white text-3xl cursor-pointer'></i>
              <i class='bx bxl-twitter text-white text-3xl cursor-pointer'></i>
              <i class='bx bxl-instagram text-white text-3xl cursor-pointer'></i>
              <i class='bx bxl-linkedin-square text-white text-3xl cursor-pointer'></i>
            </div>
          </div>
          <div>
            <h2 className='text-xl text-white font-semibold pb-2  text-center lg:text-left'>Contact Us</h2>
            <p className='text-sm text-white  text-center lg:text-left'>+234 867 984 9389</p>
            <p className='text-sm text-white  text-center lg:text-left'>tayariLive@gmail.com</p>
            <p className='text-sm text-white  text-center lg:text-left'>990, Faintly, Uganda</p>
          </div>
          <div>
            <h2  className='text-xl text-white font-semibold pb-2 text-center lg:text-center'>Quick Link</h2>
            <Link to = '/'><p className='text-sm text-white cursor-pointer text-center lg:text-center'>Home</p></Link>
            <Link to = '/AboutUs'><p className='text-sm text-white cursor-pointer text-center lg:text-center'>About Us</p></Link>
            <Link to = '/OurInternship'><p className='text-sm text-white cursor-pointer text-center  lg:text-center'>Internships</p></Link>
          </div>
          <div>
            <h2  className='text-xl text-white font-semibold pb-2 text-center lg:text-left'>Our Services</h2>
            <p className='text-sm text-white cursor- text-center lg:text-left'>Community and Collaborations</p>
            <p className='text-sm text-white cursor-pointer text-center lg:text-left'>Support for transitions</p>
            <p className='text-sm text-white cursor-pointer text-center lg:text-left'>Impacting Lives</p>
          </div>
          
          
        </div>
        <hr className='mx-10 my-10' />
        <div className='mt-7'>
        <p className='text-center text-white pb-3'>Copyright © {new Date().getFullYear()} All rights reserved</p>
          <div className='flex justify-around underline'>
            <p className='text-white cursor-pointer '>Privacy Policy</p>
            <p className='text-white cursor-pointer'>Use of terms</p>
          </div>
          </div>
      </footer>
    </>
  );
};

export default Footer;
