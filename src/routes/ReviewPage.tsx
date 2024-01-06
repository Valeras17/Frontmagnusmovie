import React from 'react'

const ReviewPage = () => {
  return (
    <div>ReviewPage</div>
  )
}

export default ReviewPage


// // ReviewPage.tsx
// import React, { useContext, useState } from 'react';
// import { useQuery } from 'react-query';
// import ReviewForm from '../components/review-form/ReviewForm';
// import Spinner from '../components/spinner/Spinner';
// import { AxiosError } from 'axios';
// import ErrorCard from '../components/card/ErrorCard';
// import { reviewRequest } from '../services/magnusMovie-service';

// interface Review {
//   id: number;
//   rating: string;
//   textReview: string;
// }

// interface User {
//   userId: number;
//   movieId:number;
// }

// const ReviewPage: React.FC = () => {
//   const { userId, movieId } = useContext(UserContext);
//   const { isLoading, data: reviews, error, refetch } = useQuery<Review[], AxiosError>(["get-reviews", movieId], () => reviewRequest(movieId));
//   const [reviewData, setReviewData] = useState<Review | null>(null);
  
//   if (isLoading) {
//     return <Spinner />;
//   }

//   if (error) {
//     let errorCode = error.response ? error.response.status : 0;
//     // Утверждаем, что error.response.data имеет конкретный тип, например, any или ваш собственный тип ошибки
//     let errorMessage = error.response ? (error.response.data as any).message : "An error occurred";
//     return <ErrorCard errorCode={errorCode} message={errorMessage} />;
// }


//   const handleReviewSubmit = (data: Review) => {
//     setReviewData(data); // Обновление состояния с данными отзыва
//     // Дополнительные действия
//   };

//   return (
//     <div>
//       <ReviewForm movieId={movieId} userId={userId} onReviewSubmitted={refetch} />
//       {isLoading && <Spinner />}
//       {error && <ErrorCard errorCode={/* error code */} message={/* error message */} />}
//       {reviews && reviews.map(review => (
//         <div key={review.id}>
//           {/* Отображение данных отзыва */}
//           <p>Оценка: {review.rating}</p>
//           <p>Отзыв: {review.textReview}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReviewPage;
