"use client"

import CardsList from '@/data/CardsList'
import Image from 'next/image'
import React, { useState } from 'react'

function Cards() {
    const [activeIndex, setActiveIndex] = useState<any>()
    return (
        <div className='mt-3'>
            <h2 className='text-2xl font-bold'>Payment Method</h2>
            <div className='grid grid-cols-5 mt-3'>

                {
                    CardsList.map((item, index) => (
                        <div key={index} className={`flex items-center justify-center w-[50px] border-[1px] rounded-md cursor-pointer hover:scale-110 transition-all hover:border-yellow-500 ${activeIndex===index? 'bg-blue-50 border-yellow-600':null} `} onClick={() => setActiveIndex(index)}>
                            <Image src={item.image} alt={item.name} width={30} height={60} />
                        </div>
                    ))

                }


            </div>

        </div>
    )
}

export default Cards