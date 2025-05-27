import { useChatStore } from "../store/Chat";

// Hook to access chatSessions array from the store
export const useGetChatSession = (id: string | undefined) => {
  const chatSessions = useChatStore((state) => state.chatSessions);
  console.log(chatSessions);
  if (!id) {
    return { chatSession: undefined };
  }
  const chatSession = chatSessions.find((session) => session.id === id);
  return { chatSession };
};
