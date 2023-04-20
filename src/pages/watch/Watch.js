import React from 'react';
import './watch.css';
import { ArrowBack } from '@mui/icons-material';
function Watch() {
    return ( 
        <div className='watch'>
        <div className='backButton'>
        <ArrowBack />
        Home
        </div>
        <iframe allowFullScreen src="https://www.youtube.com/embed/w-Xe8gLBc5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
     );
}

export default Watch;