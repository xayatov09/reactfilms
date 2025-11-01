import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TbMoodEmpty } from 'react-icons/tb';
import { CircularProgress } from 'react-loader-spinner';

export default function Films({ search }) {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false)

    const GetData = async function () {
        setLoading(true)
        try {
            const res = await axios.get(`https://www.omdbapi.com/?apikey=8df60ba5&s=${search}`)
            console.log(res);
            setData(res.data.Search)
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        GetData()
    }, [search])

    if (loading) {
        return <div className='absolute left-0 top-0 w-full h-screen bg-[#333333b0] flex items-center justify-center'>
            <CircularProgress
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="circular-progress-loading"
                wrapperStyle={{}}
                wrapperClass="wrapper-class"
                visible={true}
                strokeWidth={2}
                animationDuration={1}
            />
        </div>
    }
    return (
        <div className='max-w-7xl mx-auto grid gap-5 grid-cols-4 max-md:grid-cols-1 mb-[100px] justify-center max-md:px-4'>
            {
                data ? data.map((film) => {
                    return <div className='bg-amber-100 p-2 rounded-lg' key={film.imdbID}>
                        <h2 className='text-center text-2xl mb-3 font-semibold line-clamp-1'>{film.Title}</h2>
                        <img src={film.Poster} alt="" height={220} className='h-[320px] w-full ' />
                        <div className="flex justify-between px-4 italic text-xl mt-3">
                            <p>{film.Type}</p>
                            <p>{film.Year}</p>
                        </div>
                    </div>
                }) : <div className='flex flex-col justify-center items-center gap-8 col-span-4 max-md:col-span-1'>
                    <TbMoodEmpty className='text-[80px]' />
                    <p className='text-4xl'>NOT FOUND</p>
                </div>
            }
        </div>
    )
}
