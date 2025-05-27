import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  height: 100dvh;
  flex-direction: column-reverse;
  flex: 1;

  @media (min-width: 769px) {
    flex-direction: row; /* Desktop: row */
  }
`

const SideBar = styled.aside`
  width: 100%;
  background: #F5F5F5;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  z-index: 100;

  @media (min-width: 769px) {
    position: static;
    width: 80px;
    min-width: 80px;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0 0 0;
    background: #F5F5F5;
    justify-content: center;
  }
`

const Content = styled.main`
    flex: 1;
    box-sizing: border-box;
    padding: 16px;
    height: 100%;
        display: flex;
    flex-direction: column;

  @media (min-width: 769px) {
    min-height: auto;
  }
`

const Layout = () => {

  return (
    <MainContainer>
      <SideBar>
        <NavBar />
      </SideBar>
      <Content>
        <Outlet />
      </Content>
    </MainContainer>
  );
}

export default Layout