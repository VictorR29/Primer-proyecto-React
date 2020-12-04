import React from 'react'
import './card-small.css'

export default function CardSmall({ growth, pageView, icon }) {
    return (
        <div className="card-small">
            <p className="card-small-view">Page Views</p>
            <p className="card-small-icon">
                <img src={icon} alt="" />
            </p>
            <p className="card-small-number">{pageView}</p>
            <p className="card-small-porcent">
                <span>
                    <img src="Img/icons8-doble-arriba-16.png" alt="" />
                    {growth}% 
                </span>
            </p>
        </div>
    );
};
