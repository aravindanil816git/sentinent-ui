import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  background: #F6F6F6;
  border-radius: 20px;
  padding: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  height: 32px;
  font-family: 'Nunito Sans', sans-serif;
`;

const Switch = styled.button<{ active: boolean }>`
  background: ${({ active }) => (active ? '#fff' : 'transparent')};
  color: ${({ active }) => (active ? '#222' : '#AEAEAE')};
  border: none;
  border-radius: 2rem;
  padding: 0.4rem 1.4rem;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  font-weight: 600;
  outline: none;
  font-family: 'Nunito Sans', sans-serif;

  &:not(:last-child) {
    margin-right: 2px;
  }
`;

type ModelSwitchProps = {
  leftLabel?: string;
  rightLabel?: string;
  onToggle: (model: string) => void;
};

const ModelSwitch: React.FC<ModelSwitchProps> = ({
  leftLabel = '4s -mini',
  rightLabel = 's1-preview',
  onToggle,
}) => {
  const [isRight, setIsRight] = useState(false);

  const handleToggle = (value: boolean, model: string) => {
    setIsRight(value);
    onToggle(model);
  };

  return (
    <ToggleContainer>
      <Switch active={!isRight} onClick={() => handleToggle(false, leftLabel)}>
        {leftLabel}
      </Switch>
      <Switch active={isRight} onClick={() => handleToggle(true, rightLabel)}>
        {rightLabel}
      </Switch>
    </ToggleContainer>
  );
};

export default ModelSwitch;