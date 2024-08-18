import React, { memo } from 'react'
import ProductItem from '../../components/products-wrapper'

const Setting = () => {

    return (
        <section className='setting'>
            <ProductItem />
        </section>
    )
}

export default memo(Setting)