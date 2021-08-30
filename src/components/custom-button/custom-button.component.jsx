import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isAddBookmark,...otherProps }) => (
    <button className={`custom-button ${isAddBookmark ? 'add-bookmark' : ''}`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;