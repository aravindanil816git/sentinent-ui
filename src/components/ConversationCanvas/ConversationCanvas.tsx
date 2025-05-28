import styled from "styled-components";
import { useGetChatSession } from "../../hooks/useGetChat";
import Loader from "../Loader";

const CanvasWrapper = styled.div`
  max-height: 100%;

  @media (min-width: 769px) {
    padding: 0 50px;
  }
`;

const MessagesContainer = styled.div`
  padding: 16px;
`;

const MessageBlock = styled.div`
  margin: 10px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const MessageContent = styled.div`
  white-space: pre-wrap;
  word-break: break-word;
`;

const TitleWrapper = styled.div`
      border-bottom-left-radius: 40px;
    border: 1px solid #e5e5e5;
    display: flex;
    border-bottom-right-radius: 40px;
    padding: 16px;
}`;

const ConversationCanvas = ({
  conversationId,
  isLoading = false,
}: {
  conversationId?: string;
  isLoading: boolean;
}) => {
  const { chatSession } = useGetChatSession(conversationId);
  if (!chatSession) {
    return null;
  }
  return (
    <CanvasWrapper>
      <TitleWrapper>{chatSession.title}</TitleWrapper>
      <MessagesContainer>
        <>
          {chatSession.messages.slice(1).map((message, index) => (
            <MessageBlock key={index}>
              <MessageContent>{message.content}</MessageContent>
            </MessageBlock>
          ))}
          {/* Make this seed configurable*/}
          {isLoading && <Loader seed="What is sentinent" />}
        </>
      </MessagesContainer>
    </CanvasWrapper>
  );
};

export default ConversationCanvas;
