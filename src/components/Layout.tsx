import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  height: 100dvh;
  flex-direction: column-reverse;

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
  }
`

const Content = styled.main`
  width: 100vw;
  box-sizing: border-box;
  padding: 16px;

  @media (min-width: 769px) {
    margin-left: 80px;
    margin-bottom: 0;
    padding: 2rem;
    width: auto;
    min-height: auto;
  }
`

const Layout = () => (
  <MainContainer>
    <SideBar>
      <NavBar />
    </SideBar>
    <Content>
      <Outlet />
    </Content>
  </MainContainer>
)

export default Layout