import { useState, useEffect } from 'react';
import SentinentIcon from '../assets/Sentinent.svg';
import styled from 'styled-components';

interface LoaderProps {
    seed: string;
}

const messages = ['Searching for ', 'Browsing the web...'];
const speed = 1000;

const LoaderWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
}`

const RotatingIcon = styled.img`
  width: 24px;
  height: 24px;
  animation: rotate 3s linear infinite;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = ({ seed }: LoaderProps) => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, speed);

        return () => clearInterval(interval);
    }, [seed]);

    return (
        <LoaderWrapper>
            <RotatingIcon
                src={SentinentIcon}
                alt="Sentinent Icon"
            />
            <p>
                {currentMessageIndex === 0
                    ? <span>{messages[currentMessageIndex]} <strong>{seed}</strong></span>
                    : messages[currentMessageIndex]}
            </p>
        </LoaderWrapper>
    );
};

export default Loader;