import React from 'react';

interface ErrorCardProps {
    errorCode: number;
    message?: string;
  }

const ErrorCard: React.FC<ErrorCardProps> = ({ errorCode, message }) => {
  const getErrorTitle = (code: number) => {
    switch(code) {
      case 401:
        return "Error 401: Unauthorized access";
      case 404:
        return "Error 404: Not found";
      
    }
  };

  const getDefaultMessage = (code: number) => {
    switch(code) {
      case 401:
        return "You are not authorized to access this resource. Please login.";
      case 404:
        return "The requested resource was not found.";
      
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-white shadow-md rounded-lg p-6 border border-red-500">
        <h2 className="text-xl font-bold text-red-500 mb-2">{getErrorTitle(errorCode)}</h2>
        <p className="text-gray-700">
          {message || getDefaultMessage(errorCode)}
        </p>
      </div>
    </div>
  );
};

export default ErrorCard;
