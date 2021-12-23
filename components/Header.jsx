import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import {logo} from '../public/Logo.png'
import { TopBar } from '.'

    
const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=> {
        getCategories()
        .then((newCategories)=> setCategories(newCategories))
    },[])
    return (
        <div className='container flex-justify-center '>
            

            <div className='  text-gray-600 flex justify-center relative'>
            <Link href='/'>
                            <span className='cursor-pointer font-bold text-center my-auto text-4xl text-amber-500 pt-10'>
                                Inexplicitus Times - &nbsp;
                            </span>
                        </Link>
            <br/>
            <br/>
             <h1 className="block text-3xl font-semibold text-center my-auto pt-10"> The news of today Inexplained</h1>
</div>
<img src="/Logo.png" alt="" width="300vw" class="mx-auto mb-5 flex justify-center text-center my-auto object-center"/>
                </div>
                
                
           
    )
}

export default Header
