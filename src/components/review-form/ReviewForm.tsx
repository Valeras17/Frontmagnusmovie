
import React from 'react'

const ReviewForm = () => {
  return (
    <div>ReviewForm</div>
  )
}

export default ReviewForm


// import React, { useState, FormEvent } from 'react';
// import { sendReview } from '../../services/magnusMovie-service';

// interface ReviewFormProps {
//   movieId: number;
//   userId: number;
//   onReviewSubmitted: () => void; 
// }

// const ReviewForm: React.FC<ReviewFormProps> = ({ movieId, userId, onReviewSubmitted }) => {
//   const [textReview, setTextReview] = useState<string>('');
//   const [rating, setRating] = useState<string>('5');

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     try {
//       const reviewData = { textReview, rating, userId, movieId };
//       await sendReview(reviewData);
//       console.log("Отзыв успешно отправлен");
//       onReviewSubmitted(); // Вызываем функцию обработки после успешной отправки
//     } catch (error) {
//       console.error('Ошибка при отправке отзыва:', error);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="rating">Оценка (1-10):</label>
//         <input
//           type="number"
//           id="rating"
//           value={rating}
//           onChange={(e) => setRating(e.target.value)}
//           min="1"
//           max="10"
//         />
//       </div>
//       <div>
//         <label htmlFor="textReview">Отзыв:</label>
//         <textarea
//           id="textReview"
//           value={textReview}
//           onChange={(e) => setTextReview(e.target.value)}
//         />
//       </div>
//       <button type="submit">Отправить</button>
//     </form>
//   );
// };

// export default ReviewForm;
