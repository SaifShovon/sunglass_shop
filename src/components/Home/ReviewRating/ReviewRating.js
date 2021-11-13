import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
const ReviewRating = () => {

    return (
        <Box>
            <Typography variant="h4" component="h4" sx={{ py: 2, mx: 4, my: 4, bgcolor: '#6c757d' }}>User Review and Rating</Typography>
            <Grid container spacing={2} sx={{
                '& > legend': { mt: 2 },
            }}>

                <Grid item xs={6} md={4}>
                    <Typography variant="h6" component="h6">User Name</Typography>
                    <Typography component="legend">Very Good Service</Typography>
                    <Rating name="read-only" value="4" readOnly />
                </Grid>
            </Grid>
        </Box>



    );
};

export default ReviewRating;