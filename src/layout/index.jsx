import React, { memo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import MainHeader from './header'
import Sidebar from './sidebar'
import './layout.css'

const Layout = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className={`layout ${open ? 'layoutOpen' : 'layout'}`}>
            <Sidebar open={open} /> 
            <main className='w-full'>
                <MainHeader open={open} setOpen={setOpen} />
                <Outlet />
            </main>
        </div>
    )
}

export default memo(Layout)