import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import { reviewRequest, sendReview } from '../../services/magnusMovie-service';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Review, User, Movie,NewReviewData } from '../../interfaces/types';

interface ReviewFormCardProps {
    movieId: number;
}

interface FormValues {
    reviewText: string;
    rating: number;
}

const ReviewFormCard: React.FC<ReviewFormCardProps> = ({ movieId }) => {
    const [reviews, setReviews] = useState<Review[]>([]);

    const loadReviews = async () => {
        try {
            const fetchedReviews: Review[] = await reviewRequest(movieId);
            setReviews(fetchedReviews);
        } catch (error) {
            console.error("Error loading reviews:", error);
        }
    };

    useEffect(() => {
        loadReviews();
    }, [movieId]);

    const validationSchema = Yup.object().shape({
        reviewText: Yup.string().max(1000).required('Review is required'),
        rating: Yup.number().required('Rating is required').moreThan(0, 'Rating cannot be zero'),
    });

    const handleSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const reviewData: NewReviewData = {
            textReview: values.reviewText,
            rating: values.rating,
            movieId: movieId
        };
    
        try {
            await sendReview(reviewData);
            Swal.fire('Success', 'Review submitted successfully!', 'success');
            actions.resetForm();
            await loadReviews();
        } catch (error) {
            Swal.fire('Error', 'Failed to submit review', 'error');
        }
    
        actions.setSubmitting(false);
    };

    return (
        <Formik
            initialValues={{ reviewText: '', rating: 0 }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ values, setFieldValue, handleBlur, handleSubmit, isSubmitting }) => (
                <>
                    <Form onSubmit={handleSubmit}>
                        <div className="m-5 p-5 border border-gray-400 rounded max-w-screen-lg mx-auto w-full">
                           <div>
                            <Link to="/home" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Back
                            </Link>
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-yellow-600">Leave a Review</h2>
                            <Field
                                name="reviewText"
                                as="textarea"
                                rows="10"
                                className="border-gray-300 w-full py-3 bg-transparent text-white"
                                placeholder="Your Review"
                            />
                            <ErrorMessage name="reviewText" component="div" className="text-red-500" />

                            <Rating
                                name="rating"
                                value={values.rating}
                                onChange={(_, newValue) => setFieldValue('rating', newValue)}
                                onBlur={handleBlur}
                                className='bg-red-300'
                            />
                            <ErrorMessage name="rating" component="div" className="text-red-500" />

                            <div className="flex justify-center p-1">
                                <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
                                    Submit Review
                                </Button>
                            </div>
                        </div>
                    </Form>

                    <div className="max-w-screen-lg mx-auto">
                        {reviews.map((review, index) => (
                            <div key={index} className="review mb-4 p-4 bg-white shadow rounded opacity-75">
                                <p className="font-semibold text-lg">{review.user.username}</p>
                                <p className="text-gray-700">{review.textReview}</p>
                                <Rating name="read-only" value={review.rating} readOnly />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </Formik>
    );
};

export default ReviewFormCard;