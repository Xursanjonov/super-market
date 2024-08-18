import React, { memo } from 'react'
import { Flex, Spin } from 'antd';

const Lodaing = () => {
    return (
        <section className='w-full h-screen flex items-center justify-center'>
            <Flex align="center" className='flex flex-col gap-2 items-center justify-center' gap="middle">
                <Spin tip="Loading" size="large" /> <p className='text-blue-500'>Loading...</p>
            </Flex>
        </section>
    )
}

export default memo(Lodaing)