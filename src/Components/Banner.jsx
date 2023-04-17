import React , {useEffect, useState} from 'react';
import one from '../assets/image-one.png';
import two from '../assets/image-two.jpg';
import three from '../assets/image-three.jpg';
import four from '../assets/image-four.jpg';
import five from '../assets/image-five.png';
import '../Components/Header.css';

const Banner = () => {
    const [img, setImage] = useState(0);
    const [allImg] = useState([one, two, three, four, five])

    useEffect(() => {
        setInterval(() => {
            setImage(img => img < 5 ? img + 1 : 0)
        }, 3000)
    }, []);
    
    return (
        <img class="image" src={allImg[img]} alt="empty"/>
    )
}

export default Banner