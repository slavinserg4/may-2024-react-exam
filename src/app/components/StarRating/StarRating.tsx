import React from 'react';
import {Rating} from "@mui/material";

const StarRating = () => {
    return (
        <div>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </div>
    );
};

export default StarRating;