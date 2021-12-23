import React from 'react'
import Link from 'next/link'

const TopBar = () => {
    return (
        <div className='h-10 sticky top-0 flex align items-center  bg-black '>
               
      <div className="basis-1/4 justify-center items-center flex">
        
      </div>
      <div className="basis-1/2 ">
        <ul className="flex justify-center m-0 p-0 list-none">
          <li className="mr-20 cursor-pointer text-white">
            <Link href={`/`}>
              HOME
            </Link>
          </li>
          <li className="mr-20 cursor-pointer text-white">
            
            <Link href={`/about`}>
              About
            </Link>
          </li>
          </ul>
          </div>
        </div>
    )
}

export default TopBar
