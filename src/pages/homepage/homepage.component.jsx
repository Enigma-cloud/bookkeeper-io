import React, { useEffect } from 'react';
import './homepage.styles.scss';

import useLocalStorage from '../../hooks/useLocalStorage';
import Directory from '../../components/directory/directory.component';

const HomePage = () => {
    const [bookmarks, setBookmarks] = useLocalStorage('bookmarks', {});
    
    useEffect(() => {
        setBookmarks(
            {
            'https://www.google.com': {name: 'Google', 
                                        url: 'https://www.google.com'}
            }
        )
    }, [setBookmarks]);

    return (
        <div className="homepage">
            <Directory bookmarks={bookmarks} />
        </div>
    )
}

export default HomePage;