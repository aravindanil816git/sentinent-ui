import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  display: inline-flex;
  align-items: center;
  background: #eee;
  border-radius: 2px;
  padding: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
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
  leftLabel = 'GPT-3.5',
  rightLabel = 'GPT-4',
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