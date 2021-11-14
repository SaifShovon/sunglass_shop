import userEvent from '@testing-library/user-event';
import React from 'react';
import { useState } from 'react';
import useAuth from '../hooks/AuthProvider';

const AddReview = () => {

    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');
    const [error, setError] = useState('');
    const { user } = useAuth();
    const handleReview = e => {
        e.preventDefault();
        console.log(review, rating, error, user);
        if (rating < 5 && rating < 1) {
            setError('Rating value must be between 1 to 5');
            return;
        }
        setError('');
        const url = 'https://mysterious-gorge-96095.herokuapp.com/reviews';
        const data = { email: user.email, name: user.displayName, review: review, rating: rating };
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(resData => {
                console.log(resData)
                if (resData.insertedId) {
                    alert('Inserted Successfully!!!')
                    setRating('');
                    setReview('');
                }
            })
    };
    const handleReviewChange = e => {
        setReview(e.target.value);
        e.preventDefault();
    }
    const handleRatingChange = e => {
        setRating(e.target.value);
        e.preventDefault();
    }
    return (
        <div className="mx-5">
            <form onSubmit={handleReview}>
                <h2>Please Add a Review</h2>
                <div className="row mb-3">
                    <label htmlFor="review" className="col-sm-2 col-form-label">Review</label>
                    <div className="col-sm-10">
                        <textarea onChange={handleReviewChange} type="text" className="form-control" id="review" value={review} required />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="rating" className="col-sm-2 col-form-label">Rating Value</label>
                    <div className="col-sm-10">
                        <input onChange={handleRatingChange} type="number" value={rating} className="form-control" id="rating" />
                    </div>
                </div>

                {error ?
                    <div className="row mb-5  ml-5 text-danger">{error}</div> : ''
                }


                <button type="submit" className="btn btn-primary">Add Review</button>

            </form>
        </div >
    );
};

export default AddReview;