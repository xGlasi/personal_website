import React, { useState, useEffect } from 'react';

const Alert = ({ title, message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-xl p-4 bg-green-100 border border-green-400 text-green-700 rounded shadow-lg mt-4 z-50">
      <div className="flex justify-between items-start">
        <div className="flex space-x-2">
          {/* Icon und Nachricht hier */}
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
        {/* Schließkreuz Button */}
        <button
          onClick={handleClose}
          className="text-green-700 hover:text-green-900 rounded-full text-sm p-1 focus:outline-none"
        >
          <svg
            className="fill-current w-4 h-4"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Schließen</title>
            <path d="M14.348 14.849a1.002 1.002 0 01-1.414 0L10 11.414 6.737 14.677a1.002 1.002 0 01-1.414-1.414L8.586 10 5.323 6.737a1.002 1.002 0 111.414-1.414L10 8.586l3.263-3.263a1.002 1.002 0 011.414 1.414L11.414 10l3.263 3.263a1.002 1.002 0 010 1.586z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Alert;
