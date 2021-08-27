import React from 'react';
import './directory.styles.scss';

import Bookmark from '../bookmark/bookmark.component';


const Directory = ({ bookmarks }) => {

    return (
        <div className='directory-bookmarks'>
            {   
                bookmarks !== null ? 
                Object.keys(bookmarks).map((id) => (
                    <Bookmark key={id} name={bookmarks[id].name} url={bookmarks[id].url}/>
                ))
                :
                <h1>No bookmarks to show</h1>
            }
        </div>
    )
}

export default Directory;
