import styled from "styled-components";

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  position: sticky;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

const AddButton = styled.div`
  font-size: 26px;
  cursor: pointer;
  user-select: none;
`;

const LogoWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const QuickActions = ({
  onClick,
}: {
  onClick?: () => void;
}) => {
  return (
    <ActionsWrapper>
      <AddButton onClick={onClick}>+</AddButton>
      <div>
        <LogoWrapper>S</LogoWrapper>
      </div>
    </ActionsWrapper>
  );
};

export { QuickActions };