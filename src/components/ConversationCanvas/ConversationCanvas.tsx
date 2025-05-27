import styled from "styled-components";
import { useGetChatSession } from "../../hooks/useGetChat";

const CanvasWrapper = styled.div`
  max-height: 100%;
`;

const MessagesContainer = styled.div`
`;

const MessageBlock = styled.div`
  margin: 10px 0;
  font-weight: 400;
  font-size: 16px;
  line-height:  24px;
`;

const MessageContent = styled.div`
  white-space: pre-wrap;
  word-break: break-word;
`;

const ConversationCanvas = ({ conversationId }: { conversationId?: string }) => {
  const { chatSession } = useGetChatSession(conversationId);
  if (!chatSession) {
    return null;
  }
  return (
    <CanvasWrapper>
      <MessagesContainer>
        {chatSession.messages.map((message, index) => (
          <MessageBlock key={index}>   
            <MessageContent>{message.content}</MessageContent>
          </MessageBlock>
        ))}
      </MessagesContainer>
    </CanvasWrapper>
  );
};

export default ConversationCanvas;