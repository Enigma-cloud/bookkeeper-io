import React from 'react';
import './bookmark.styles.scss';

const Bookmark = ({ name, url }) => {
    console.log(name, url);
    return (
        <div className='bookmark-item'>
            <div className='link-info'>
                <img src={`https://s2.googleusercontent.com/s2/favicons?domain=${url}`} alt="favicon" />
                <a href={`${url}`} target='_blank' rel="noreferrer">{`${name}`}</a>
            </div>
        </div>
    )
}

export default Bookmark;
