import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between p-4 px-10 border-b-[1px] shadow-md '>
        <div className='flex gap-10 items-center'>
            <Image src={'/logo.png'} width={120} height={60} alt='logo'/>
            <div className=' gap-6 hidden md:flex'>
                <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Home</h2>
                <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>History</h2>
                <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Help</h2>
            </div>
        </div>
        <UserButton/>
      
    </div>
  )
}

export default Navbar


