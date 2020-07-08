import React, { Fragment } from 'react';
import spinner from '../../assets/spinner.gif';

const Loader = () => {

    const spinnerStyle ={
        height: '25px',
        width: '25px',
        display: 'block',
        margin: 'auto',
        position: 'fixed',
        top: '50vh',
        left: '65vw'
    }

    return (
        <Fragment>
            <img style={spinnerStyle} src={spinner} alt="loading..."/>
        </Fragment>
    )
}



export default Loader
