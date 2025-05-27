import { useNavigate, useParams } from "react-router-dom";
import ChatInput from "../components/ChatInput/ChatInput";
import ConversationCanvas from "../components/ConversationCanvas/ConversationCanvas";
import styled from "styled-components";
import useCreateOrUpdateChatSession from "../hooks/useCreateUpdateChat";
import { useEffect, useState } from "react";
import { QuickActions } from "../components/QuickActions";
import Loader from "../components/Loader";

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 100%;

  @media (min-width: 769px) {
    justify-content: center;
  }
`;

const CanvasWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  text-align: center;
  background: #fff;
  z-index: 10;
`;


const Chat = () => {
  const { id } = useParams<{ id: string }>();
  const { createOrUpdateChatSession } = useCreateOrUpdateChatSession();
  const [chatId, setChatId] = useState<string | undefined>(id);
  const [chatStarted, setChatStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Update chatId when id param changes
  useEffect(() => {
    setChatId(id);
    setChatStarted(false);
  }, [id]);

  const onSubmit = (query: { value: string; model: string }) => {
    const input = query.value;
    setIsLoading(true);
    const newChatId = createOrUpdateChatSession(chatId, [
      { role: "user", content: input },
    ]);

    setTimeout(() => {
      createOrUpdateChatSession(newChatId, [
        { role: "assistant", content: response },
      ]);
      setIsLoading(false);
    }, 1000); // Simulate AI response delay
    setChatId(newChatId);
  };

  useEffect(() => {
    if(!chatId) {
        setChatStarted(false);
    }
    if (chatId && !chatStarted) {
      setChatStarted(true);
    }
  }, [chatId]);

  const navigate = useNavigate();

  const handleQuickActionClick = () => {
    setChatId(undefined);
    navigate("/");
  };

  return (
    <>
      <QuickActions onClick={handleQuickActionClick} />
      <ChatContainer>
        {chatStarted && (
          <CanvasWrapper>
            {isLoading ? (
              <Loader seed="What is sentinent"/>
            ) : (
              <ConversationCanvas conversationId={chatId} />
            )}
          </CanvasWrapper>
        )} 
        <InputWrapper>
          <ChatInput onSubmit={onSubmit} chatStarted={chatStarted} />
        </InputWrapper>
      </ChatContainer>
    </>
  );
};

export default Chat;


const response = "Sentient refers to the ability to experience feelings or sensations. It means being capable of sensing or feeling, conscious of or responsive to the sensations of seeing, hearing. feeling, tasting, or smelling."
