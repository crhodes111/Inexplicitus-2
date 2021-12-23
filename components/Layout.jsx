import React from 'react'
import {TopBar} from './'

const Layout = ({children}) => {
    return (
        <>
            <TopBar/>
            {children}
            
        </>
    )
}

export default Layout
