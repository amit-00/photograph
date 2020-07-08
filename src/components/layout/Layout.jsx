import React, { Fragment } from 'react';

import Sidebar from '../navigation/Sidebar';

import './layout.css';

const Layout = ( props ) => {
    return (
        <Fragment>
            <Sidebar />
            {props.children}
        </Fragment>
    )
}

export default Layout
