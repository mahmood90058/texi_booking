"use client"
import { DirectionDataContext } from '@/app/context/DirectionDataContext'
import { SelectedCarAmountContext } from '@/app/context/SelectedCartAmountContext'
import CarsList from '@/data/CarsList'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

function Cars() {

    const [selectedcar, setSelectedCar] = useState<any>()
    const { directionData, setDirectionData }
        = useContext(DirectionDataContext);



        const {carAmount,setCarAmount}= useContext(SelectedCarAmountContext);



        // update the charge based upon the distence

        const getCost = (charges: any) => {
            if (!directionData?.routes || directionData.routes.length === 0) {
                return 0;  // or handle the case where there's no route data available
            }
        
            return (charges * directionData.routes[0].distance * 0.000621371192).toFixed(2);
        }
        

    return (
        <div className='mt-3'>
            <h2 className='font-semibold'>Select Car</h2>
            <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 mt-2 p-2'>
                {
                    CarsList.map((item, index) => (
                        <div key={index} className={`m-2 p-2 border-gray-300 border-[1px] rounded-lg hover:border-yellow-400 cursor-pointer ${index === selectedcar ? 'border-yellow-500 bg-blue-50' : null}  `} onClick={() => {setSelectedCar(index); setCarAmount(getCost(item.charges))}}>
                            <Image src={item.image} alt={item.name} width={75} height={90} className='w-full' />
                            <h2 className='text-[12px]'>{item.name}
                            {directionData.routes ?
                                <span className='float-right font-medium
                     text-black'>
                                    {getCost(item.charges)}
                                    $</span> : null}</h2>

                    </div>
            ))
            }
        </div>

    </div >
  )
}

export default Cars



