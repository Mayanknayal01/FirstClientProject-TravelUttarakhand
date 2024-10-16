import React from 'react';

const DistCarousel = ({id, dist_img, name}) => {
    return (
        <div>
            <img src={dist_img} alt="DistrictName" />
            <p className="image-caption">{name}</p>
        </div>
    )
}

export default DistCarousel;