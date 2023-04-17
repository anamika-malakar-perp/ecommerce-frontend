import React from 'react'

const ProductCard = ({props}) => {
    return (
        <>
            {props?.slice(0, 8).map((data, i) =>
                <div className='product-feature'>
                    <img src={data.image} alt="empty" className="product-image"/>
                    <p className='title'>{data.name}</p>
                    <img src={data.ratting} alt="empty"/>
                    <div>
                        <span className='price'>{data.price}</span>
                        <span className='price'>{data.oPrice}</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductCard