import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { FaHome, FaComments, FaUser, FaHourglass } from "react-icons/fa";
import { FaGlobe, FaHouse, FaHourglass } from "react-icons/fa6";
import Drawer from "./Drawer";
import { useState } from "react";
import { QuickActions } from "./QuickActions";

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  background: #f5f5f5;
  padding: 0 0 1rem 0;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: column;
    height: 100%;
  }
`;

const IconButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  color: ${({ active }) => (active ? "black" : "#aaa")};
  font-size: 25px;
  cursor: pointer;
  transition: color 0.2s;
  border-radius: 2px;
  border-top: ${({ active }) => (active ? "2px solid black" : "none")};
  padding-top: 15px;
  width: 100%;

  &:hover {
    color: black !important;
  }

  @media (min-width: 769px) {
    border-right: 2px solid black;
    border-top: none;
  }
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavItemName = styled.span<{ active: boolean }>`
  color: ${({ active }) => (active ? "black" : "#A9A9A9")};
  font-size: 12px ${IconButton}:hover & {
    color: black;
  }

  @media (min-width: 769px) {
    display: none;
  }

  font-weight: 600;
`;

const QuickActionsWrapper = styled.div`
  display: none;
  @media (min-width: 769px) {
    display: flex;
  }
`;

const NavItemWrapper = styled.div`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  display: flex;
  padding: 0 20px;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 0;
  }
`;

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { to: "/chat", icon: <FaHouse />, key: "chat", name: "Home" },
    { to: "/", icon: <FaHourglass />, key: "history", name: "History" },
    { to: "", icon: <FaGlobe />, key: "discover", name: "Discover" },
  ];

  const handleNavClick = (item: (typeof navItems)[0]) => {
    if (item.key === "history") {
      setDrawerOpen(true);
    } else {
      navigate(item.to);
    }
  };

  const handleSelectChat = (chatId: string) => {
    // Set chat as undefined before navigating
    if (chatId === "") {
      // Optionally, you can manage chatId state here if needed
      navigate("/");
    } else {
      navigate(`/chat/${chatId}`);
    }
  };

  const isActive = (item: (typeof navItems)[0]) =>
    location.pathname === item.to ||
    (item.to === "/chat" && location.pathname.startsWith("/chat"));

  return (
    <>
      <NavBarContainer>
        <NavItemWrapper>
          {navItems.map((item) => (
            <NavItem key={item.key}>
              <IconButton
                active={isActive(item)}
                onClick={() => handleNavClick(item)}
                aria-label={item.key}
              >
                {item.icon}
              </IconButton>
              <NavItemName active={isActive(item)}>{item.name}</NavItemName>
            </NavItem>
          ))}
        </NavItemWrapper>
        <QuickActionsWrapper>
          <QuickActions onClick={() => handleSelectChat("")} />
        </QuickActionsWrapper>
      </NavBarContainer>
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onSelectChat={handleSelectChat}
      />
    </>
  );
};

export default NavBar;
