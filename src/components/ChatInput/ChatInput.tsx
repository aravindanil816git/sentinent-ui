import { useState } from "react";
import styled from "styled-components";
import ModelSwitch from "./ModelSwitch";
import AutoSuggestions from "./AutoSuggestions";
import SentinentIcon from "../../assets/Sentinent.svg";

const Container = styled.div<{ chatStarted: boolean }>`
  width: 100%;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  padding: 8px;
  border: 1px solid #D7D7D7;

  @media (min-width: 769px) {
    border: 2px solid #D7D7D7;
    outline: 10px solid #F1F1F1;
    margin-bottom: 24px;
    height: ${(props) => (props.chatStarted ? "40px" : "100%")};
    display:  ${(props) => (props.chatStarted ? "flex" : "block")};
    justify-content:  ${(props) =>
      props.chatStarted ? "space-between" : "flex-start"};
`;

const Input = styled.textarea<{ chatStarted: boolean }>`
  width: 100%;
  border: 0;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  background: #ffff;
  box-sizing: border-box;
  color: #000;

  @media (min-width: 769px) {
    width: ${(props) => (props.chatStarted ? "65%" : "100%")};
  }
`;

const SubmitButton = styled.button<{ isValid?: boolean }>`
  height: 44px;
  width: 44px;
  color: #707070;
  border: 1px solid #707070;
  border-radius: 50%;
  background: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  background: ${(props) => (props.isValid ? "#F1F1F1" : "white")};
`;
const InputWrapper = styled.div`
    display: flex;
}`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const isMobile = () => window.innerWidth < 769;

const ChatInput = ({
  onSubmit,
  chatStarted,
}: {
  onSubmit: (value: { value: string; model: string }) => void;
  chatStarted: boolean;
}) => {
  const [value, setValue] = useState("");
  const [model, setModel] = useState("");

  const handleSubmit = () => {
    if (value) {
      onSubmit({
        value,
        model,
      });
      setValue("");
    }
  };

  return (
    <>
      {!chatStarted && (
        <img src={SentinentIcon} style={{ marginBottom: "24px" }} />
      )}
      <InputWrapper>
        <Container chatStarted={chatStarted}>
          <Input
            chatStarted={chatStarted}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Ask me anything..."
            rows={chatStarted && !isMobile() ? 1 : 3}
          />

          <ControlsWrapper>
            <ModelSwitch
              onToggle={(_model) => {
                setModel(_model);
              }}
            />
            <SubmitButton onClick={handleSubmit} isValid={value.length > 0}>
              &rarr;
            </SubmitButton>
          </ControlsWrapper>
        </Container>
      </InputWrapper>
      {!chatStarted && <AutoSuggestions />}
    </>
  );
};

export default ChatInput;
