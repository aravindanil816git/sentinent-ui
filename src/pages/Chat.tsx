import { useNavigate, useParams, useLocation } from "react-router-dom";
import ChatInput from "../components/ChatInput/ChatInput";
import ConversationCanvas from "../components/ConversationCanvas/ConversationCanvas";
import styled from "styled-components";
import useCreateOrUpdateChatSession from "../hooks/useCreateUpdateChat";
import { useEffect, useState } from "react";
import { QuickActions } from "../components/QuickActions";
import { isMobile } from "../utils/util";

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
  const location = useLocation();
  const { createOrUpdateChatSession } = useCreateOrUpdateChatSession();
  const [chatId, setChatId] = useState<string | undefined>(id);
  const [chatStarted, setChatStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setChatId(id);
  //   setChatStarted(false);
  // }, [id]);

  // Reset chatId if at root path
  useEffect(() => {
    if (location.pathname === "/") {
      setChatId(undefined);
      setChatStarted(false);
    } else {
      setChatId(id);
      setChatStarted(true);
    }
  }, [location.pathname]);

  const navigate = useNavigate();

  const onSubmit = (query: { value: string; model: string }) => {
    const input = query.value;
    setIsLoading(true);
    const newChatId = createOrUpdateChatSession(chatId, [
      { role: "user", content: input },
    ]);
    setChatId(newChatId);

    if (newChatId) {
      navigate(`/chat/${newChatId}`, { replace: true });
    }

    setTimeout(() => {
      createOrUpdateChatSession(newChatId, [
        { role: "assistant", content: response(input) },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (!chatId) {
      setChatStarted(false);
    }
    if (chatId && !chatStarted) {
      setChatStarted(true);
    }
  }, [chatId]);

  const handleQuickActionClick = () => {
    setChatId(undefined);
    navigate("/");
  };

  return (
    <>
      {isMobile() && <QuickActions onClick={handleQuickActionClick} />}
      <ChatContainer>
        {chatStarted && (
          <CanvasWrapper>
              <ConversationCanvas conversationId={chatId} isLoading={isLoading}/>
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

const response = (title: string) => 
  `${title} refers to the ability to experience feelings or sensations. It means being capable of sensing or feeling, conscious of or responsive to the sensations of seeing, hearing. feeling, tasting, or smelling.`;
