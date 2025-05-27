import { useCallback } from 'react';
import { useChatStore } from '../store/Chat';

// Hook to create or update chat sessions using Zustand store
export const useCreateOrUpdateChatSession = () => {
  const updateOrCreateSession = useChatStore(state => state.updateOrCreateSession);

  const createOrUpdateChatSession = useCallback(
    (chatId: string | undefined, newChatData: {
        role: string;
        content: string;
    }[]): string => {
      return updateOrCreateSession(chatId, newChatData);
    },
    [updateOrCreateSession]
  );

  return { createOrUpdateChatSession };
};

export default useCreateOrUpdateChatSession;