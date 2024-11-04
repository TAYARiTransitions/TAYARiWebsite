import { Link } from 'react-router-dom'

const ErrorPg = () => {
    return ( 
        <div className="flex flex-col justify-center content-center items-center min-h-screen text-white text-3xl gap-5">
            <p>404 Not Found</p>
            <Link to = "/" className='text-orange-500'>Go To HomePage</Link>
        </div>
     );
}
 
export default ErrorPg;