import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
const ReviewRating = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const reviewLink = `https://mysterious-gorge-96095.herokuapp.com/reviews`;
    useEffect(() => {
        fetch(reviewLink)
            .then(res => res.json())
            .then(data => setReviews(data));
        setIsLoading(false)
    }, []);

    if (isLoading) {
        return <div><Spinner animation="border" variant="primary" /></div>;
    }

    return (
        <Box sx={{ mx: 2, my: 2, px: 4, py: 2 }}>
            <Typography variant="h4" component="h4" sx={{ py: 2, bgcolor: '#6c757d' }}>User Review and Rating</Typography>
            <Grid container spacing={2} sx={{
                '& > legend': { mt: 2 },
            }}>

                {
                    reviews?.map(reviewRating =>
                        <Grid item xs={6} md={4} sx={{ my: 2 }} key={reviewRating.id}>
                            <Typography variant="h6" component="h6">{reviewRating.name}</Typography>
                            <Typography component="legend">{reviewRating.review}</Typography>
                            <Rating name="read-only" value={reviewRating.rating} readOnly />
                        </Grid>
                    )
                }
            </Grid>
        </Box>



    );
};

export default ReviewRating;