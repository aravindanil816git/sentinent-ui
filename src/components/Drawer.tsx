import styled from "styled-components";
import { useChatStore } from "../store/Chat";

const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.3);
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  transition: opacity 0.2s;
  z-index: 1000;
`;

const DrawerContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 320px;
  background: #fff;
  box-shadow: 2px 0 8px rgba(0,0,0,0.1);
  transform: translateX(${({ open }) => (open ? "0" : "-100%")});
  transition: transform 0.3s;
  z-index: 1001;
  display: flex;
  flex-direction: column;
`;

const DrawerHeader = styled.div`
  padding: 1rem;
  font-weight: bold;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DrawerList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
`;

const DrawerListItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`;

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  onSelectChat: (chatId: string) => void;
}

const Drawer = ({ open, onClose, onSelectChat }: DrawerProps) => {
  const chatSessions = useChatStore(state => state.chatSessions);

  return (
    <>
      <Overlay open={open} onClick={onClose} />
      <DrawerContainer open={open}>
        <DrawerHeader>
          History
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: "1.2rem", cursor: "pointer" }}>×</button>
        </DrawerHeader>
        <DrawerList>
          {chatSessions.length === 0 && <div>No chats yet.</div>}
          {chatSessions.map(session => (
            <DrawerListItem key={session.id} onClick={() => { onSelectChat(session.id); onClose(); }}>
              {session.title || session.id}
            </DrawerListItem>
          ))}
        </DrawerList>
      </DrawerContainer>
    </>
  );
};

export default Drawer;