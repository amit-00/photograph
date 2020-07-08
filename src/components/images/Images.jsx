import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import Loader from '../widgets/Loader';
import ImageItem from './ImageItem';


const Images = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const status = 'production';

    let unsplashClientId;

    if(status !== 'production'){
        unsplashClientId = process.env.GATSBY_PORTFOLIO_ACCESS_KEY;
    }
    else{
        unsplashClientId = process.env.PORTFOLIO_ACCESS_KEY;
    }

    useEffect(() => { getImages(); } , []);

    const getImages = async () => {
        setLoading(true);
    
        const res = await axios.get(`https://api.unsplash.com/photos/random?count=20&client_id=${unsplashClientId}`);
    
        console.log(res.data);
        setImages(res.data);

        setLoading(false);
    }
    


    return (
        <Fragment>
            {loading && <Loader />}
            <div className="container">
                <div className="images-area">
                    <div className="images-area-column">
                        {images.map((image, index) => index < 10 && <ImageItem key={image.id} img={image.urls.small} />)}
                    </div>
                    <div className="images-area-column">
                        {images.map((image, index) => (index >= 10 && index < 20) && <ImageItem key={image.id} img={image.urls.regular} />)}
                    </div>
                </div>
            </div>
            
        </Fragment>
        
    )
}

export default Images
