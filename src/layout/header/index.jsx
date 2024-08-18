import React, { Fragment, useState } from 'react'
import SerachIcon from '../../assets/icons/SerachIcon'
import BallIcon from '../../assets/icons/BallIcon'
import ChatIcon from '../../assets/icons/ChatIcon'
import profileImg from '../../assets/images/designer.jpg'
import { Button } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import './header.css'

const MainHeader = ({ open, setOpen }) => {

    return (
        <Fragment>
            <header className='w-[100%] h-[80px] px-8 flex items-center justify-between bg-white'>
                <Button onClick={() => setOpen(p => !p)} className='w-[40px] h-[40px] flex items-center justify-center' >
                    {open ? <MenuUnfoldOutlined className='text-[20px]' /> : <MenuFoldOutlined className='text-[20px]' />}
                </Button>
                <label className='headers__search' htmlFor='search__input'>
                    <SerachIcon />
                    <input className='headers__search-input' autoFocus type="search" placeholder="Type to search" id="search__input" />
                </label>
                <div className="headers__right">
                    <div className="bildirish-nomalar">
                        <BallIcon />
                    </div>
                    <div className="chat">
                        <ChatIcon />
                    </div>
                    <div className="flex items-center justify-center gap-6">
                        <div className='profile__info'>
                            <p>Thomas Anree</p>
                            <span>Ux Designer</span>
                        </div>
                        <img className='w-[46px] h-[46px]' src={profileImg} alt="" />
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default MainHeader