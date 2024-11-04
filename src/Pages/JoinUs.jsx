import React, { useState } from 'react';
import ContactUsImg from '../assets/contactUs.png';
import { db } from '../firebase.js'; 
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const JoinUs = () => {
 const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        company: '',
        phone: '',
        email: '',
        feedback: '',
    });
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleCheckboxChange = () => {
        setAgreeTerms((prev) => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!agreeTerms) {
            setErrorMessage("You must agree to the terms and conditions.");
            return;
        }

        try {
            const docRef = await addDoc(collection(db, 'users'), formData);
            console.log("Document written with ID: ", docRef.id);
            // Optionally, reset the form after successful submission
            setFormData({
                first_name: '',
                last_name: '',
                company: '',
                phone: '',
                email: '',
                feedback: '',
            });
            setAgreeTerms(false);
            setErrorMessage('');
            navigate('/')
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <section className='contact md:flex'>
            <div className="divImg md:w-2/4">
                <img src={ContactUsImg} alt="Contact Us" className='w-full md:h-screen' />
            </div>
            <div className="md:w-2/4 h-full relative">
                <form className="w-full md:h-screen bg-white py-10 px-10 relative flex justify-center items-center gap-5" onSubmit={handleSubmit}>
                    <div className="formElement w-full max-w-3xl">
                        {/* Your input fields here */}
                        <div className="grid gap-6 mb-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">First name</label>
                                <input type="text" id="first_name" value={formData.first_name} onChange={handleChange} required className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 p-4" />
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Last name</label>
                                <input type="text" id="last_name" value={formData.last_name} onChange={handleChange} required className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 p-4" />
                            </div>
                            <div>
                                <label htmlFor="company" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Why do you want to join us?</label>
                                <input type="text" id="company" value={formData.company} onChange={handleChange} required className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 p-4" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Phone number</label>
                                <input type="tel" id="phone" value={formData.phone} onChange={handleChange} required className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 p-4" />
                            </div>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Email address</label>
                                <input type="email" id="email" value={formData.email} onChange={handleChange} required className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 p-4" />
                            </div>
                            <div className="mb-6">
                                <textarea id="feedback" value={formData.feedback} onChange={handleChange} className="h-40 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder = 'Send Us A Message'></textarea>
                            </div>
                        </div>
                        <section className="flex justify-start flex-col-reverse pb-5">
                            <label htmlFor="remember" className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">
                                I agree with the{" "}
                                <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.
                            </label>
                            <div className="h-5">
                                <input id="remember" type="checkbox" checked={agreeTerms} onChange={handleCheckboxChange} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                            </div>
                        </section>
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                        <button type="submit" className="text-white pri1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-md w-full sm:w-auto px-6 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default JoinUs;
