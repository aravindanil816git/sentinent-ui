import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaHome, FaComments, FaUser } from "react-icons/fa";

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  background: #f5f5f5;
  padding: 0 0 1rem 0;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: column;
  }
`;

const IconButton = styled.button<{ active: boolean }>`
    background: none;
    border: none;
    color: ${({ active }) => (active ? "black" : "#aaa")};
    font-size: 2rem;
    cursor: pointer;
    transition: color 0.2s;
    border-radius: 2px;
    border-top: ${({ active }) => (active ? "2px solid black" : "none")};
    padding-top: 0.5rem;
    width: 100%;

    &:hover {
      color: black !important;
    }
`;

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { to: "/", icon: <FaHome />, key: "home" },
    { to: "/chat", icon: <FaComments />, key: "chat" },
    { to: "/profile", icon: <FaUser />, key: "profile" },
  ];

  return (
    <NavBarContainer>
      {navItems.map((item) => (
        <IconButton
          key={item.key}
          active={
            location.pathname === item.to ||
            (item.to === "/chat" && location.pathname.startsWith("/chat"))
          }
          onClick={() => navigate(item.to)}
          aria-label={item.key}
        >
          {item.icon}
        </IconButton>
      ))}
    </NavBarContainer>
  );
};

export default NavBar;
