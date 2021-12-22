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
        <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block border-blue-400 py-8'>
                <div className='md:float-left block'>
                        <Link href='/'>
                            <span className='cursor-pointer font-bold text-4xl text-amber-500'>
                                Inexplicitus Times: The News of Today, Inexplained!
                            </span>
                        </Link>
                </div>
                <div className='md:float-left block'>
                </div>
            </div>
            </div>
    )
}

export default Header
