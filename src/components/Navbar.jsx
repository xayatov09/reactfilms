import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTelegram2Fill } from 'react-icons/ri'

export default function Navbar() {
    return (
        <div className='h-16 bg-[#353434] shadow'>
            <div className="max-w-[1200px] flex items-center justify-between mx-auto h-16 text-white max-md:px-4">
                <h1 className='text-4xl italic'>MOVIE</h1>
                <div className="flex gap-2">
                    <a target='_blank' href="https://t.me/">
                        <RiTelegram2Fill className='text-3xl' />
                    </a>
                    <a target='_blank' href="https://instagram.com/">
                        <IoLogoInstagram className='text-3xl'/>
                    </a>
                </div>
            </div>
        </div>
    )
}
