import React from 'react';
import logo from '../../assets/book.png';

import CustomButton from '../custom-button/custom-button.component';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <div className="logo-container">
            <img className="logo" src={logo} alt="Logo" title="Bookmarker" />
        </div>
        {/* <div>Icons made by <a href="" title="mavadee">mavadee</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        <div className='options'>
            <CustomButton isAddBookmark>Add Bookmark</CustomButton>
        </div>
    </div>
)

export default Header;