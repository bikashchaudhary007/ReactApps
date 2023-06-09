import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
export const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left'
                src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80" alt="Workspace" />

            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 '>I'm Bikash Chaudhary</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
                        <TypeAnimation
                            sequence={[
                                'Developer', // Types 'One'
                                1000, // Waits 1s
                                'Coder', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                'Tech Enthusiast'
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', display: 'inline-block',paddingLeft:'5px' }}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaTwitter className='cursor-pointer' size={20} />
                        <FaFacebookF className='cursor-pointer' size={20} />
                        <FaInstagram className='cursor-pointer'  size={20} />
                        <FaLinkedinIn className='cursor-pointer' size={20} />

                    </div>
                </div>
            </div>

        </div>
    )
}
