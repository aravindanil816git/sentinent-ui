import { useState } from "react";
import styled from "styled-components";
import ModelSwitch from "./ModelSwitch";
import AutoSuggestions from "./AutoSuggestions";
import SentinentIcon from "../../assets/Sentinent.svg";

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
    background: ${props => props.isValid ? '#F1F1F1' : 'white'};
`;
const InputWrapper = styled.form`
    display: flex;
}`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChatInput = ({ onSubmit, chartStarted }: { onSubmit: (value: {
    value: string
    model: string;
}) => void;
    chartStarted: boolean
 }) => {
  const [value, setValue] = useState("");
//   const [model, setModel] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    if(value) {
    e.preventDefault();
      onSubmit({
        value,
        model: ""
    });
    setValue("");
    };
  };

  return (
    <>
    {!chartStarted &&
        <img src={SentinentIcon}   style={{ marginBottom: "24px"}}/>
    }
    <InputWrapper onSubmit={handleSubmit}>
      <Container>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ask me anything..."
        />

        <ControlsWrapper>
          <ModelSwitch onToggle={(_model) =>{
            console.log(_model);
          } }/>
          <SubmitButton type="submit" isValid={value.length > 0}>&rarr;</SubmitButton>
        </ControlsWrapper>
      </Container>
    </InputWrapper>
    {!chartStarted &&<AutoSuggestions /> }
    </>
  );
};

export default ChatInput;
