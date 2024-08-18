import React, { memo } from 'react'
import { Avatar } from 'antd'
import { Link, NavLink } from 'react-router-dom'
import DashboradIcon from '../../assets/icons/DashboradIcon'
import { UserOutlined } from '@ant-design/icons'
import './sidebar.css'


const Sidebar = ({ open }) => {
    const navLinkClass = `px-[12px] py-[8px] mx-auto flex items-center justify-start gap-4 ${open ? 'w-[64px]' : 'w-[230px]'}`

    return (
        <div className={`${open ? 'w-[64px]' : 'w-[280px]'} h-screen flex flex-col items-center gap-4 bg-[#1C2434] text-white`}>
            <Link to={'/admin/menu'} className='sidebar__logo flex items-center justify-center gap-4'>
                <Avatar size="large" icon={<UserOutlined />} />
                <span className={`${open ? 'hidden' : 'block'}`}>TailAdmin</span>
            </Link>
            <ul className={` mx-auto flex flex-col gap-2 ${open ? 'w-[64px]' : 'w-[230px]'}`}>
                <NavLink to={'/admin/menu'} className={navLinkClass}>
                    <span className='item__icon'><DashboradIcon /></span>
                    <span className={`item__title ${open ? 'hidden' : 'block'}`}>Dashboard</span>
                </NavLink>
                <NavLink to={'/admin/sotuv-bolimi'} className={navLinkClass}>
                    <span className='item__icon'><DashboradIcon /></span>
                    <span className={`item__title ${open ? 'hidden' : 'block'}`}> Sotuv bo'limi </span>
                </NavLink>
                <NavLink to={'/admin/magazine'} className={navLinkClass}>
                    <span className='item__icon'><DashboradIcon /></span>
                    <span className={`item__title ${open ? 'hidden' : 'block'}`}>Magazin</span>
                </NavLink>
                <NavLink to={'/admin/omborxona'} className={navLinkClass}>
                    <span className='item__icon'><DashboradIcon /></span>
                    <span className={`item__title ${open ? 'hidden' : 'block'}`}>Omborxona</span>
                </NavLink>
                <NavLink to={'/admin/setting'} className={navLinkClass}>
                    <span className='item__icon'><DashboradIcon /></span>
                    <span className={`item__title ${open ? 'hidden' : 'block'}`}>Sozlamalar</span>
                </NavLink>
            </ul>
        </div>
    )
}

export default memo(Sidebar)