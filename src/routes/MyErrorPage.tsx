import React from 'react';
import ErrorCard from "../components/card/ErrorCard";

interface MyErrorPageProps {
  errorCode: number;
}

const MyErrorPage: React.FC<MyErrorPageProps> = ({ errorCode }) => {
  return (
    <div>
      <ErrorCard errorCode={errorCode} />
    </div>
  );
};

export default MyErrorPage;
