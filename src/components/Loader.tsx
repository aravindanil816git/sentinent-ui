import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

interface LoaderProps {
    seed: string;
}

const messages = ['Searching for ......', 'Browsing the web...'];
const speed = 500;

const Loader = ({ seed }: LoaderProps) => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, speed);

        return () => clearInterval(interval);
    }, [seed]);

    return (
        <span>
            <FaSpinner />
            <p>
                {currentMessageIndex === 0
                    ? `${messages[currentMessageIndex]} ${seed}`
                    : messages[currentMessageIndex]}
            </p>
        </span>
    );
};

export default Loader;