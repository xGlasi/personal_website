import React, { useState, useEffect } from 'react';

const Alert = ({ title, message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-xl p-4 bg-green-100 border border-green-400 text-green-700 rounded shadow-lg mt-4 flex justify-between items-start z-50">
      <div className="flex space-x-2">
        <svg
          className="fill-current w-6 h-6 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 15V9h2v6H9zm0-8V5h2v2H9z" />
        </svg>
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
