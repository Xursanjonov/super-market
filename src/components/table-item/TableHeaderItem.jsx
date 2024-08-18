import React, { memo } from 'react'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'

const TableHeaderItem = ({ title }) => {
    const tableHeaderItemClass = `w-full py-2 border-y-[1px] border-gray-300 px-4 font-bold flex items-center justify-between`
    const tableHeaderItemBtn = `flex items-center justify-center boreder-0 bg-transparent`

    return (
        <div className={tableHeaderItemClass}>
            <span className='text-xl'>{title ?? 'Name'}</span>
            <p className="flex flex-col items-center justify-center gap-1">
                <button className={tableHeaderItemBtn}> <CaretUpOutlined className='text-[14px]' /> </button>
                <button className={tableHeaderItemBtn}> <CaretDownOutlined className='text-[14px]' /> </button>
            </p>
        </div>
    )
}

export default memo(TableHeaderItem)