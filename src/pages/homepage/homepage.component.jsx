import React from 'react';
import './homepage.styles.scss';

import useLocalStorage from '../../hooks/useLocalStorage';
import Directory from '../../components/directory/directory.component';
import { IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const HomePage = () => {
    const [bookmarks, setBookmarks] = useLocalStorage('bookmarks', {});

    return (
        <div className="homepage">
            <Directory bookmarks={bookmarks} />
            <IconButton className="fab-button">
                <AddCircleIcon></AddCircleIcon>
            </IconButton>
        </div>
    )
}

export default HomePage;