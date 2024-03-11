import React, { useState, useEffect } from 'react';

const generateBinaryLine = (length) => Array.from({ length }, () => Math.floor(Math.random() * 2)).join('');

const BinaryBackground = ({ lines, length }) => {
    const [binaryLines, setBinaryLines] = useState([]);

    useEffect(() => {
        setBinaryLines(Array.from({ length: lines }, () => generateBinaryLine(length)));

        const interval = setInterval(() => {
            setBinaryLines(Array.from({ length: lines }, () => generateBinaryLine(length)));
        }, 100);

        return () => clearInterval(interval);
    }, [lines, length]);

    return (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
            {binaryLines.map((line, index) => (
                <span key={index} className="text-white text-opacity-75 font-mono">
                    {line}
                </span>
            ))}
        </div>
    );
};

export default BinaryBackground;
