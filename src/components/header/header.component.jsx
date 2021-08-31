import React from 'react';
import logo from '../../assets/book.png';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import CustomButton from '../custom-button/custom-button.component';

import './header.styles.scss';

const Header = () => (
    <AppBar position="static">
        <Toolbar style={{ backgroundColor: '#242325' }}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Bookmark
          </Typography>
        </Toolbar>
      </AppBar>
    // <div className='header'>
    //     <div className="logo-container">
    //         <img className="logo" src={logo} alt="Logo" title="Bookmarker" />
    //     </div>
    //     {/* <div>Icons made by <a href="" title="mavadee">mavadee</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    //     <div className='options'>
    //     </div>
    // </div>
)

export default Header;