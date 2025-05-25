import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;


const Switch = styled.button<{ active: boolean }>`
  background: ${({ active }) => (active ? '#222' : '#eee')};
  color: ${({ active }) => (active ? '#fff' : '#222')};
  border: none;
  border-radius: 1rem;
  padding: 0.4rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
`;

type ModelSwitchProps = {
  leftLabel?: string;
  rightLabel?: string;
  onToggle?: (isRight: boolean) => void;
};

const ModelSwitch: React.FC<ModelSwitchProps> = ({
  leftLabel = 'GPT-3.5',
  rightLabel = 'GPT-4',
  onToggle,
}) => {
  const [isRight, setIsRight] = useState(false);

  const handleToggle = (value: boolean) => {
    setIsRight(value);
    onToggle?.(value);
  };

  return (
    <ToggleContainer>
      <Switch active={!isRight} onClick={() => handleToggle(false)}>
        {leftLabel}
      </Switch>
      <Switch active={isRight} onClick={() => handleToggle(true)}>
        {rightLabel}
      </Switch>
    </ToggleContainer>
  );
};

export default ModelSwitch;