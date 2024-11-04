import ContactUsImg from '../assets/contactUs.png';

const JoinUs = () => {
    return (
        <section className='contact md:flex'>
            <div className="divImg md:w-2/4">
                <img src={ContactUsImg} alt="img" className='w-full md:h-screen' />
            </div>
            <div className="md:w-2/4 h-full relative">
                <form className="w-full md:h-screen bg-white py-10 px-10 relative flex justify-center items-center gap-5">
                    <div className="formElement w-full max-w-3xl"> {/* Set max width */}
                        <div className="grid gap-6 mb-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="first_name"
                                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                >
                                    First name
                                </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full h-10 p-4"
                                    
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="last_name"
                                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                >
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    id="last_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 p-4"
                                    
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="company"
                                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                >
                                    Why do you want to join us?
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 p-4"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                >
                                    Phone number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 p-4"
                                    placeholder=""
                                    pattern="^-?\d+(\.\d+)?([eE][-+]?\d+)?$"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 p-4"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <textarea
                                    name="feedback"
                                    placeholder=""
                                    id="feedback"
                                    className="h-40 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                                ></textarea>
                            </div>
                        </div>
                        <section className="flex justify-start flex-col-reverse pb-5">
                            <label
                                htmlFor="remember"
                                className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300"
                            >
                                I agree with the{" "}
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    terms and conditions
                                </a>
                                .
                            </label>
                            <div className="h-5">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                    required
                                />
                            </div>
                        </section>

                        <button
                            type="submit"
                            className="text-white pri1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-md w-full sm:w-auto px-6 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default JoinUs;
