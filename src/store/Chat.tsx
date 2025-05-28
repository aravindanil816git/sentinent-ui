import { create } from 'zustand';

export interface ChatData {
  id: string;
  messages: {
    role: string;
    content: string;
  }[];
  title?: string;
}

interface ChatStore {
  chatSessions: ChatData[];
  setChatSessions: (sessions: ChatData[]) => void;
  updateOrCreateSession: (chatId: string | undefined, newChatData: {
    role: string;
    content: string;
  }[]) => string;
}

export const useChatStore = create<ChatStore>((set) => ({
  chatSessions: [],
  setChatSessions: (sessions) => set({ chatSessions: sessions }),
  updateOrCreateSession: (chatId, newChatData) => {
    if (chatId) {
      set(state => ({
        chatSessions: state.chatSessions.map(session =>
          session.id === chatId
            ? { ...session, messages: [...session.messages, ...newChatData] }
            : session
        )
      }));
      return chatId;
    } else {
      const newId = crypto.randomUUID();
      set(state => ({
        chatSessions: [
          ...state.chatSessions,
          { id: newId, title: newChatData[0].content, messages: newChatData }
        ]
      }));
      return newId;
    }
  }
}));