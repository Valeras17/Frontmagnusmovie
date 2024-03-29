import React from 'react';
import ErrorCard from "../components/card/ErrorCard";

interface NotFoundProps {
  errorCode?: number; 
}

const NotFound: React.FC<NotFoundProps> = ({ errorCode = 404 }) => {
  
  return (
    <div>
      <ErrorCard errorCode={errorCode} />
    </div>
  );
};

export default NotFound;

