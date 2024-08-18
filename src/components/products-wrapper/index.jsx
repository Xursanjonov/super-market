import React, { memo } from 'react'
import { BankOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { cartIconClass, cartItemClass, cartLiClass1, cartLiClass2, cartUlClass } from './productCartStyles'
import { MdOutlineCategory } from 'react-icons/md'

const ProductItem = () => {
    const navigate = useNavigate()

    return (
        <div className='w-full p-8 flex flex-wrap items-center gap-4 text-darkblue-500'>
            <div className={cartItemClass} onClick={() => navigate('/admin/setting/tashkilotlar')} >
                <BankOutlined className={cartIconClass} />
                <ul className={cartUlClass}>
                    <li className={cartLiClass1}>Tashkilotlar</li>
                    <li className={cartLiClass2}>Tashkilotlar soni: 3</li>
                </ul>
            </div>
            <div className={cartItemClass} onClick={() => navigate('/admin/setting/categories')} >
                <MdOutlineCategory size={52} className={cartIconClass} />
                <ul className={cartUlClass}>
                    <li className={cartLiClass1}>Kategoriyalar</li>
                    <li className={cartLiClass2}>Kategoriyalar soni: 3</li>
                </ul>
            </div>
            <div className={cartItemClass} onClick={() => navigate('/admin/setting/olchov-birligi')} >
                <BankOutlined className={cartIconClass} />
                <ul className={cartUlClass}>
                    <li className={cartLiClass1}>O'lchov birligi</li>
                    <li className={cartLiClass2}>O'lchov birliklari soni: 3</li>
                </ul>
            </div>
            <div className={cartItemClass} onClick={() => navigate('/admin/setting/mahsulotlar')} >
                <BankOutlined className={cartIconClass} />
                <ul className={cartUlClass}>
                    <li className={cartLiClass1}>Mahsulotlar</li>
                    <li className={cartLiClass2}>Mahsulotlar soni: 3</li>
                </ul>
            </div>
            <div className={cartItemClass} onClick={() => navigate('/admin/setting/yuk-xatlari')} >
                <BankOutlined className={cartIconClass} />
                <ul className={cartUlClass}>
                    <li className={cartLiClass1}>Yuk xatlari</li>
                    <li className={cartLiClass2}>Yuk xatlari soni: 3</li>
                </ul>
            </div>
            <div className={cartItemClass} onClick={() => navigate('/admin/setting/kirim-qilish')} >
                <BankOutlined className={cartIconClass} />
                <ul className={cartUlClass}>
                    <li className={cartLiClass1}>Kirim qilish</li>
                    <li className={cartLiClass2}>Kirim qilish soni: 3</li>
                </ul>
            </div>
        </div>
    )
}

export default memo(ProductItem)