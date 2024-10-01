

import React, { useContext } from 'react'
import AutocompleteAddress from './AutocompleteAddress'
import Cars from './Cars'
import Cards from './Cards'
import { useRouter } from 'next/navigation'
import { SelectedCarAmountContext } from '@/app/context/SelectedCartAmountContext'

function Booking() {

    const router:any= useRouter()
    const {carAmount,setCarAmount}= useContext(SelectedCarAmountContext);

    return (
        <div className='p-5'>
            <h1 className='text-3xl font-semibold'>Booking</h1>
            <div className='border-[1px] p-5' style={{ height: '100vh', overflowY: 'hidden' }}>
                <AutocompleteAddress />
                <Cars/>
                <Cards/>
                <button onClick={()=>router.push('/payment')} className={`w-full bg-yellow-400  p-1 rounded-md mt-5 ${!carAmount?'bg-gray-200':null} `}>Book</button>
            </div>



        </div>
    )
}

export default Booking