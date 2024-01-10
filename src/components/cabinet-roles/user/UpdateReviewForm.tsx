import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Rate } from 'antd';
import Swal from 'sweetalert2';
import { getReviewDetails, updateReview } from '../../../services/magnusMovie-service';
import Spinner from '../../spinner/Spinner';
import { Review } from '../../../interfaces/types';

const UpdateReviewForm: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { movieId: movieIdString, reviewId: reviewIdString } = useParams<{ movieId: string, reviewId: string }>();
  const movieId = movieIdString ? parseInt(movieIdString, 10) : null;
  const reviewId = reviewIdString ? parseInt(reviewIdString, 10) : null;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (movieId === null || reviewId === null) {
      Swal.fire('Error', 'Movie ID or Review ID is missing', 'error');
      navigate(-1);
      return;
    }

    const fetchReviewData = async () => {
      setLoading(true);
      try {
        const reviewData = await getReviewDetails(movieId, reviewId);
        form.setFieldsValue({
          textReview: reviewData.textReview,
          rating: reviewData.rating
        });
      } catch (error) {
        Swal.fire('Error', 'Failed to fetch review data', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchReviewData();
  }, [movieId, reviewId, form, navigate]);

  const onFinish = async (values: Review) => {
    if (reviewId === null) {
      Swal.fire('Error', 'Review ID is missing', 'error');
      return;
    }

    try {
      await updateReview(reviewId, values);
      Swal.fire('Success', 'Review updated successfully', 'success');
      navigate('/reviews-with-movies');
    } catch (error) {
      console.error('Error updating review:', error);
      Swal.fire('Error', 'Failed to update review', 'error');
    }
  };

  if (loading) {
    return <Spinner title="Loading review data..." />;
  }

  return (
    <div className="container mx-auto p-4">
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <Form.Item
          name="textReview"
          label="Review Text"
          rules={[{ required: true, message: 'Please enter your review!' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="rating"
          label="Rating"
          rules={[{ required: true, message: 'Please rate the movie!' }]}
        >
          <Rate />
        </Form.Item>

        <Form.Item>
          <Button className=' bg-green-500 hover:bg-green-600 text-white font-bold' type="primary" htmlType="submit">
            Update Review
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateReviewForm;
