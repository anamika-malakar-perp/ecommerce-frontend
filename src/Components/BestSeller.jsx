import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import ProductCard from './ProductCard';

const BestSeller = () => {
    const [bestSellerTile, setBestSellerTile] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/feature-product`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setBestSellerTile(data.result)
        })
    }, []);

    return (
        <div className='best-seller'>
            <h4>BestSeller</h4>

            <div className='cards'>
                <ProductCard props={bestSellerTile}/>
            </div>
        </div>
    )
}

export default BestSeller