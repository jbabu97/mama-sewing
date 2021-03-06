import React from 'react';
import './ReviewMessage.css';

const ReviewMessage = ({review}) => {
    return (
        <div className='col-md-4'>
            <div className='review_message'>
                <p className='mb-4 mt-3'><em>"{review.message}"</em></p>
                <div className='review_img'><img src={review.photo} alt=""/></div>
                <h4>{review.name}</h4>
                <h6>{review.designation}, {review.company}</h6>
            </div>
        </div>
    );
};

export default ReviewMessage;