import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
const image_url = "/kigali_1.svg";
const logo = "/"

const Test = () => {
    return (
        <>
            <div className='bg-slate-100'>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam urna turpis,<br />
                                posuere quis enim quis, porttitor feugiat diam.<br />
                                Mauris facilisis dolor elit, eget imperdiet diam dapibus egestas.
                            </p>
                            <button className='px-4 py-1 bg-[#DA7110] text-white text-md font-semibold cursor-pointer rounded-full'>Start Now</button>
                        </div>
                        <div className='absolute bottom-80 left-26 flex flex-col gap-2'>
                            <FacebookRoundedIcon className='text-white' />
                            <FacebookRoundedIcon className='text-white' />
                            <FacebookRoundedIcon className='text-white' />
                        </div>
                        <div className='absolute bottom-40 right-0 flex flex-col gap-2'>
                            <div className='relative'>
                                <h1 className='absolute top-1/3 left-1/4 text-white text-4xl font-semibold'>Investing Home</h1>
                                <svg width="396" height="421" viewBox="0 0 496 521" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M329.158 520.181C249.791 521.307 145.925 432.279 103.787 387.473C57.5882 334.825 27.4432 289.889 18.1456 274.002C-25.3186 201.384 23.7925 147.792 54.4259 129.602C54.9018 129.319 55.343 129.003 55.7629 128.643C159.751 39.3241 269.167 9.4432 310.949 5.67126C409.788 -14.5109 459.158 33.7947 472.09 61.434C472.416 62.1305 472.793 62.748 473.254 63.363C490.751 86.6744 502.901 155.342 501.81 220.844C500.3 311.559 476.557 359.912 457.557 411.397C422.137 508.118 358.8 524.293 330.753 520.286C330.216 520.209 329.7 520.174 329.158 520.181Z" fill="#06169F" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center items-center space-x-6 pb-10'>
                    <div className='bg-[#ffebbe] flex flex-col justify-center items-center space-y-1 px-16 py-4 rounded-2xl'>
                        <span className="text-[30px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#06159e]">100+</span>
                        <span className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#2d2d2d] tracking-[0] leading-[normal]">Members</span>
                    </div>
                    <div className='bg-[#ffebbe] flex flex-col justify-center items-center space-y-1 px-16 py-4 rounded-2xl'>
                        <span className="text-[30px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#06159e]">73</span>
                        <span className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#2d2d2d] tracking-[0] leading-[normal]">HOUSES BUILT</span>
                    </div>
                    <div className='bg-[#ffebbe] flex flex-col justify-center items-center space-y-1 px-16 py-4 rounded-2xl'>
                        <span className="text-[30px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#06159e]">5</span>
                        <span className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#2d2d2d] tracking-[0] leading-[normal]">BUSINESSES</span>
                    </div>
                    <div className='bg-[#ffebbe] flex flex-col justify-center items-center space-y-1 px-16 py-4 rounded-2xl'>
                        <span className="text-[30px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#06159e]">13</span>
                        <span className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#2d2d2d] tracking-[0] leading-[normal]">PLOTS TO SELL</span>
                    </div>

                </div>
                <div className='w-full flex flex-col justify-center items-center mt-20 py-8'>
                    <span className="font-moonDance text-4xl">Our</span>
                    <span className="relative inline-block px-8 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#ffebbe]">
                        <span className="relative text-[#2d2d2d] text-[32px] font-semibold">SERVICES</span>
                    </span>
                </div>
                <div className='flex gap-4 px-10 max-w-4xl mx-auto '>
                    <div className='flex flex-col gap-6 justify-center items-center p-4 bg-white rounded-lg shadow'>
                        <div>
                            <img src="/eco.png" alt="" className='w-30' />
                        </div>
                        <p className='text-center'>
                            and typesetting industry. Lorem
                            industry's standard dummy text
                            when an unknown printer took
                            scrambled it to make a type specimen
                        </p>
                        <button className='bg-[#DA7110] px-6 py-1 text-sm text-white font-semibold rounded-full'>Explore</button>
                    </div>
                    <div className='flex flex-col gap-6 justify-center items-center p-4 bg-white rounded-lg shadow'>
                        <div>
                            <img src="/eco.png" alt="" className='w-30' />
                        </div>
                        <p className='text-center'>
                            and typesetting industry. Lorem
                            industry's standard dummy text
                            when an unknown printer took
                            scrambled it to make a type specimen
                        </p>
                        <button className='bg-[#DA7110] px-6 py-1 text-sm text-white font-semibold rounded-full'>Explore</button>
                    </div>
                    <div className='flex flex-col gap-6 justify-center items-center p-4 bg-white rounded-lg shadow'>
                        <div>
                            <img src="/image2.png" alt="" className='w-20' />
                        </div>
                        <p className='text-center'>
                            and typesetting industry. Lorem
                            industry's standard dummy text
                            when an unknown printer took
                            scrambled it to make a type specimen
                        </p>
                        <button className='bg-[#DA7110] px-6 py-1 text-sm text-white font-semibold rounded-full'>Explore</button>
                    </div>

                </div>
                <div className='w-full flex flex-col justify-center items-center mt-20 py-8'>
                    <span className="font-moonDance text-4xl">Members</span>
                    <span className="relative inline-block px-8 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#ffebbe]">
                        <span className="relative text-[#2d2d2d] text-[32px] font-semibold">Testimonial</span>
                    </span>
                </div>
                <div className='flex gap-4 px-10 max-w-6xl mx-auto '>
                    <div className='flex flex-col gap-6 justify-center items-center p-4 border-2 border-[#DA7110] rounded-lg shadow'>
                        <div className='border-2 border-[#DA7110] p-2 rounded-full'>
                            <div className='w-30 h-30 overflow-hidden rounded-full'>
                                <img src="/team1.jpg" alt="" className='w-20' />
                            </div>
                        </div>
                        <p className='text-center'>
                            and typesetting industry. Lorem
                            industry's standard dummy text
                            when an unknown printer took
                            scrambled it to make a type specimen
                        </p>
                        <button className='bg-[#DA7110] px-6 py-1 text-sm text-white font-semibold rounded-full'>Explore</button>
                    </div>
                    <div className='flex flex-col gap-6 justify-center items-center p-4 border-2 border-[#DA7110] rounded-lg shadow'>
                        <div className='border-2 border-[#DA7110] p-2 rounded-full'>
                            <div className='w-30 h-30 overflow-hidden rounded-full'>
                                <img src="/team2.jpg" alt="" className='w-20' />
                            </div>
                        </div>
                        <p className='text-center'>
                            and typesetting industry. Lorem
                            industry's standard dummy text
                            when an unknown printer took
                            scrambled it to make a type specimen
                        </p>
                        <button className='bg-[#DA7110] px-6 py-1 text-sm text-white font-semibold rounded-full'>Explore</button>
                    </div>
                    <div className='flex flex-col gap-6 justify-center items-center p-4 border-2 border-[#DA7110] rounded-lg shadow'>
                        <div className='border-2 border-[#DA7110] p-2 rounded-full'>
                            <div className='w-30 h-30 overflow-hidden rounded-full'>
                                <img src="/team3.jpg" alt="" className='w-20' />
                            </div>
                        </div>
                        <h1 className='font-bold'>Laetitia</h1>
                        <span>CEO</span>
                        <button className='bg-[#DA7110] px-6 py-1 text-sm text-white font-semibold rounded-full'>Explore</button>
                    </div>
                    <div className='flex flex-col gap-6 justify-center items-center p-4 border-2 border-[#DA7110] rounded-lg shadow'>
                        <div className='border-2 border-[#DA7110] p-2 rounded-full'>
                            <div className='w-30 h-30 overflow-hidden rounded-full'>
                                <img src="/team4.jpg"  alt="" className='w-20 object-cover' />
                            </div>
                        </div>
                        <p className='text-center'>
                            and typesetting industry. Lorem
                            industry's standard dummy text
                            when an unknown printer took
                            scrambled it to make a type specimen
                        </p>
                        <button className='bg-[#DA7110] px-6 py-1 text-sm text-white font-semibold rounded-full'>Explore</button>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Test;