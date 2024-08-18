import React, { memo } from 'react'
import TableItem from '../../../components/table-item'
import TableHeaderItem from '../../../components/table-item/TableHeaderItem'
import { Pagination } from 'antd'
const tableData = [
    {
        id: 1,
        title: 'Name',
        name: 'IT Park Toshkent sh.',
        innId: '12245678',
        manzil: 'Toshkent shahar',
        phone: '+998979808898'
    },
    {
        id: 2,
        title: 'INN (JshIR)',
        name: 'IT Park Toshkent sh.',
        innId: '12245678',
        manzil: 'Toshkent shahar',
        phone: '+998979808898'
    },
    {
        id: 3,
        title: 'Manzil',
        name: 'IT Park Toshkent vil.',
        innId: '12335678',
        manzil: 'Toshkent vil.',
        phone: '+998907377735'
    },
    {
        id: 4,
        title: 'Tel raqam',
        name: 'IT Park Andijon sh.',
        innId: '12344678',
        manzil: 'Andijon shahar',
        phone: '+998905401501'
    },
]

const Tashkilotlar = () => {

    return (
        <section className='w-[100%] mx-auto bg-whit'>
            <h1>Tashkilotlar</h1>
            <div className="w-full p-4">
                <div className="w-full grid border-slate-500 bg-white">
                    <div className="flex items-center justify-around bg-">
                        <div className="py-2 border-y-[1px] border-gray-300 px-[23px] font-bold">
                            <span className='py-1 flex items-center justify-center boreder-0 bg-transparent'>ID</span>
                        </div>
                        {
                            tableData?.map(item => <TableHeaderItem key={item?.id} title={item?.title} />)
                        }
                        <div className="w-full py-2 border-y-[1px] border-gray-300 px-4 font-bold flex items-center justify-between">
                            <span className='py-1 flex items-center justify-center boreder-0 bg-transparent'>Amallar</span>
                        </div>
                    </div>
                    <div className="w-full bg-">
                        {
                            tableData?.map(item => <TableItem key={item.id} item={item} />)
                        }
                    </div>
                </div>
                <div className="w-full py-3 pe-5 flex items-center justify-end bg-white">
                    <Pagination
                        total={85}
                        showTotal={(total, range) => `${total} ta ma'lumotdan (${range[0]} dan ${range[1]}) tagacha ko'rsatildi.`}
                        defaultPageSize={10}
                        defaultCurrent={1}
                    />
                </div>
            </div>
        </section>
    )
}

export default memo(Tashkilotlar)