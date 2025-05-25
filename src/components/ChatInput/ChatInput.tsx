import { useState } from "react";
import styled from "styled-components";
import ModelSwitch from "./ModelSwitch";
import AutoSuggestions from "./AutoSuggestions";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  padding: 1rem;
  border: 1px solid #D7D7D7;
`;

const Input = styled.textarea`
  width: 100%;
  border: 0;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  background: #ffff;
  box-sizing: border-box;
  color: #000;
`;

const SubmitButton = styled.button`
  height: 44px;
  width: 44px;
  color: #fff;
  border: 1px solid #f1f1f1;
  border-radius: 50%;
  background: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
`;
const InputWrapper = styled.form`
    display: flex;
}`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChatInput = ({ onSubmit }: { onSubmit?: (value: string) => void }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit?.(value);
      setValue("");
    }
  };

  return (
    <>
    <InputWrapper onSubmit={handleSubmit}>
      <Container>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ask me anything..."
        />

        <ControlsWrapper>
          <ModelSwitch />
          <SubmitButton type="submit">➡️</SubmitButton>
        </ControlsWrapper>
      </Container>
    </InputWrapper>
    <AutoSuggestions />
    </>
  );
};

export default ChatInput;
