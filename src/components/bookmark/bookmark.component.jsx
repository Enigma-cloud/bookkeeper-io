import React from 'react';

import { XIcon } from '@heroicons/react/solid';


import './bookmark.styles.scss';

const Bookmark = ({ name, url }) => {
    console.log(name, url);
    return (
        <div className='bookmark-item'>
            <i className="icon-container">
                {/* <XIcon className="h-6 w-6" /> */}
            </i>
            <div className='link-info'>
                <img src={`https://s2.googleusercontent.com/s2/favicons?domain=${url}`} alt="favicon" />
                <a href={`${url}`} target='_blank' rel="noreferrer">{`${name}`}</a>
            </div>
        </div>
    )
}

export default Bookmark;
