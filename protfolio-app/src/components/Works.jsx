import React from 'react';
import { WorkItem } from './WorkItem';

const data = [
    {
        year: 2020,
        title: 'Computer Teacher',
        duration: '1 Years',
        details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, a.'
    },
    {
        year: 2021,
        title: 'Associate Engineer (Database Migration & QA)',
        duration: '1 Years',
        details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, a.'
    }
]

export const Works = () => {
    return (
        <div id='Works' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Works</h1>
            {data.map((item, idx) => (
                <WorkItem
                    key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details} />
            ))}

        </div>
    )
}
