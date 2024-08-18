import React, { memo } from 'react'
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'

const TableItem = ({ item }) => {
    const tableItemBtnClass = `px-3 py-1.5 flex items-center justify-center gap-2 rounded-[5px]`

    return (
        <div className={`w-[100%] flex text-lg`}>
            <div style={{ width: '18rem' }} className="py-2 text-center border-b-[1px] border-gray-300 font-semibold">{item.id}</div>
            <div className="w-full py-1 flex items-center justify-start border-b-[1px] border-gray-300 ps-7">{item.name}</div>
            <div className="w-full py-1 flex items-center justify-start border-b-[1px] border-gray-300 ps-7">{item.innId}</div>
            <div className="w-full py-1 flex items-center justify-start border-b-[1px] border-gray-300 ps-7">{item.manzil}</div>
            <a href={`tel:${item.phone}`} className="w-full py-1 flex items-center justify-start border-b-[1px] border-gray-300 ps-7">{item.phone}</a>
            <div className="w-full py-2 border-b-[1px] border-gray-300 px-4 text-white flex items-center justify-start gap-4">
                <button title="Ko'rish" className={`bg-blue-500 ${tableItemBtnClass}`}>  <EyeOutlined />  </button>
                <button title="O'zgartirish" className={`bg-orange-500 ${tableItemBtnClass}`}>  <EditOutlined />  </button>
                <button title="O'chirish" className={`bg-red-500 ${tableItemBtnClass}`}>  <DeleteOutlined />  </button>
            </div>
        </div>
    )
}

export default memo(TableItem)