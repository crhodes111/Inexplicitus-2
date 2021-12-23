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
            

            <div className='text-gray-600 flex flex-wrap justify-center'>
            <Link href='/'>
                            <span  className=' ceaser flex-wrap flex-auto cursor-pointer font-bold text-center my-auto text-8xl text-amber-500 pt-10'>
                                Inexplicitus Times &nbsp;
                            </span>
                        </Link>
                        </div>
            <div>
             <h1 className="flex-auto flex-wrap text-3xl font-semibold text-center my-auto pt-10"> The News of Today, Inexplained</h1>
             </div>
                
                <img src="/Logo.png" alt="" width="300vw" className="mx-auto mb-5 flex justify-center text-center my-auto object-center"/>
                </div>
                
                
                
           
    )
}

export default Header
