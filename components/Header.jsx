import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import {logo} from '../public/Logo.png'

    
const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=> {
        getCategories()
        .then((newCategories)=> setCategories(newCategories))
    },[])
    return (
        <div className='container flex-justify-center  pb-20'>
            <img src="/Logo.png" alt="" width="200vw" class="absolute left-0 top-0 "/>

            <div className='w-screen mb-5 py-5 text-gray-600 flex justify-center relative'>
            <Link href='/'>
                            <span className='cursor-pointer font-bold text-center my-auto text-4xl text-amber-500 pt-10'>
                                Inexplicitus Times - &nbsp;
                            </span>
                        </Link>
            <br/>
            <br/>
             <h1 class="block text-3xl font-semibold text-center my-auto pt-10"> The news of today Inexplained</h1>

                </div>
                
                </div>
           
    )
}

export default Header
