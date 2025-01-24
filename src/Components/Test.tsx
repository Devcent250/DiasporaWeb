import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
const image_url = "/kigali_1.svg";
const logo = "/"

const Test = () => {
    return (
        <>
            <div className='relative'>
                <img src={image_url} alt="background" className="background-image" />
                {/* Add your other elements here */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className='flex justify-between items-center px-20'>
                        <img src='/logo.png' className='w-24' />
                        <div className='space-x-4 text-white text-lg '>
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Activities</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className='text-white space-x-4'>
                            <button className='px-4 cursor-pointer py-1 hover:bg-white hover:text-black  border border-white rounded-full'>Signin</button>
                            <button className='px-4 cursor-pointer py-1 hover:bg-white hover:text-black  border border-white rounded-full'>SignUp</button>
                        </div>
                    </div>
                    <div className='flex justify-center flex-col space-y-4 items-center text-white absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <h1 className='text-4xl'>HELPING YOU OWN
                            A HOUSE AT HOME</h1>
                        <p className='text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam urna turpis,<br/>
                            posuere quis enim quis, porttitor feugiat diam.<br/>
                            Mauris facilisis dolor elit, eget imperdiet diam dapibus egestas.
                        </p>
                    </div>
                    <div className='absolute bottom-80 left-26 flex flex-col gap-2'>
                        <FacebookRoundedIcon className='text-white' />
                        <FacebookRoundedIcon className='text-white' />
                        <FacebookRoundedIcon className='text-white' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Test;
