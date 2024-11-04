import React,{useEffect, useState} from 'react'

const BTT = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if(window.scrollY > window.innerHeight){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior : 'smooth'})
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
  return (
    <div>
      <button onClick={scrollToTop} style={{display : isVisible ? 'block' : 'none', position : 'fixed', bottom : '100px', right :  '10px',}} className='text-2xl bg-red-600 rounded-full py-3 px-4 text-white text-center z-40'>
      <i class='bx bxs-up-arrow'></i>
      </button>
    </div>
  )
}

export default BTT
