import React, { useState } from 'react';
import './listitem.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
function ListItem() {
    const [isHovered, setHover] = useState(false);
    const trailer = "https://youtu.be/w-Xe8gLBc5I";
    return (
        <div className="listitem" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>

            {
                isHovered === false ? <> <img src="https://i0.wp.com/globalzonetoday.com/wp-content/uploads/2021/05/Sacred-Games_Netflix-Web-Series.jpg" alt="" /></> : <>
                <iframe  width="560" height="315" src="https://www.youtube.com/embed/w-Xe8gLBc5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    
                </>
            }

        </div>
    );
}

export default ListItem;