import React, { createContext, useContext, useState } from 'react';


interface ReviewContextType {
    review: Review | null;
    updateReview: (newReview: Review) => void;
}
export interface Review {
    id: number; 
    text: string;
    rating: number;
    movieId: number; 
    userId:number;
}


const ReviewContext = createContext<ReviewContextType>({
    review: null,
    updateReview: () => {}
});


export const useReview = () => useContext(ReviewContext);


export const ReviewProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [review, setReview] = useState<Review | null>(null);

    const updateReview = (newReview: Review) => {
        console.log("Updating review in context:", newReview);
        setReview(newReview);
    };

    return (
        <ReviewContext.Provider value={{ review, updateReview }}>
            {children}
        </ReviewContext.Provider>
    );
};
