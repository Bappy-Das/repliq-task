import React from 'react';
import errorman from "../../assets/download.png"
import { useNavigate  } from 'react-router-dom';


const NotFound = () => {
    const navigate = useNavigate();

    const goBack = (event) => {
      event.preventDefault();
      navigate(-1);
    };
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className='flex flex-col justify-center items-center'>
                    <img className="mx-auto h-80 w-auto" src={errorman} alt="Your Company"/>
                    <h1 className='text-8xl font-semibold p-5'>404</h1>
                    <h1 className='p-3'>Sorry, We couldn't find what you are looking for!</h1>
                    <a href="" onClick={goBack} className="text-gray-500 font-medium text-lg bg-gray-200 p-1 px-4 rounded-md hover:shadow-md">Go back </a>
                </div>
            </div>
        </div>
    );
};

export default NotFound;