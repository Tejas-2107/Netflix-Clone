import React, { useRef, useState } from 'react';
import './list.css'
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import Listitem from '../listitem/ListItem';

function List() {
    return (
        <div className='list'>
            <div className="wrapper">
                <div className='container'>
                <Listitem />
                <Listitem />
                <Listitem />
                <Listitem />
                <Listitem />
                <Listitem />
                </div>
            </div>
        </div>
    );
}

export default List;












/* 
import React, { useRef, useState } from 'react';
import './list.css'
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import Listitem from '../listitem/ListItem';

function List() {

    const [sliddNumber, setSlideNumber] = useState(0);
    const listRef = useRef()
    const handleClick = (direction) => {
        if (direction === "left" && sliddNumber > 0) {
            setSlideNumber(sliddNumber - 1);
            var x = document.getElementById('lButton');
            x.current.style.transform = 'translateX(230px)';
        }
        else if(direction === "left" && sliddNumber <6){
            setSlideNumber(sliddNumber + 1);
            listRef.current.style.transform = 'translateX(-230px)'
        }
    }
    return (
        <div className='list'>
            <span className='listTitle'>Cotinue to watch</span>
            <div className="wrapper">
                <ArrowBackIosNewOutlined className='sliderarrow left' />
                <div className='container'>
                <Listitem />
                <Listitem />
                <Listitem />
                <Listitem />
                <Listitem />
                <Listitem />
                <Listitem />
                <Listitem />
                <Listitem />
                <Listitem />
                </div>
                <ArrowForwardIosOutlined className='sliderarrow right'  />
            </div>
        </div>
    );
}

export default List;
*/