import React from 'react';

import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import './bookmark.styles.scss';

const Bookmark = ({ name, url }) => {
    console.log(name, url);
    return (
        <div className='bookmark-item'>
            <div className="bookmark-options">
                <IconButton style={{ color: 'white', padding: '2px' }}>
                    <CloseIcon fontSize="small"></CloseIcon>
                </IconButton>
            </div>
            <div className='link-info'>
                <img src={`https://s2.googleusercontent.com/s2/favicons?domain=${url}`} alt="favicon" />
                <a href={`${url}`} target='_blank' rel="noreferrer">{`${name}`}</a>
            </div>
        </div>
    )
}

export default Bookmark;
