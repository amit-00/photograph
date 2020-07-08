import React from 'react'

const ImageItem = ({ img }) => {
    return (
        <div className="image-item">
            <img style={{width: '100%'}} src={img} alt="image"/>
        </div>
    )
}

export default ImageItem
