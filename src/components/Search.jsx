import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
export default function Search({ search, setSearch }) {
    const [input, setInput] = useState(search)
    window.addEventListener('keydown', (e) => {
        if (e.key == "Enter") {
            setSearch(input)
        }
    })
    return (
        <div className='max-w-xl mx-auto my-16 max-md:px-4'>
            <div className="flex border-b-2 px-4 py-2">
                <input value={input} onChange={(e) => { setInput(e.target.value) }} type="text" placeholder='Search Film' className='outline-0 grow pr-4 text-xl' />
                <div className="">
                    <FaSearch onClick={() => {
                        setSearch(input)
                    }} className='flex items-center justify-center text-xl cursor-pointer' />
                </div>
            </div>
        </div>
    )
}
