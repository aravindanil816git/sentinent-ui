import { useParams } from 'react-router-dom';
import ChatInput from '../components/ChatInput/ChatInput';
import ConversationCanvas from '../components/ConversationCanvas/ConversationCanvas';
import styled from "styled-components";

const ChatContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: end;
`;

const CanvasWrapper = styled.div`
  flex: 1;
  overflow: auto;
`;

const InputWrapper = styled.div`
  position: sticky;
  bottom: 0;
  background: #fff;
  z-index: 10;
`;

const Chat = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <ChatContainer>
    <CanvasWrapper>
      <ConversationCanvas conversationId={id}/>
    </CanvasWrapper>
      <InputWrapper>
        <ChatInput />
      </InputWrapper>
    </ChatContainer>
  );
};

export default Chat;