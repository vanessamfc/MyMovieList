import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  position: fixed;
  top: 0;
  background: #000;
  width: 100%;
  z-index: 300;
  > a:hover {
    background-color: #373737;
    color: #e53935;
    transition: 0.3s;
  }
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100% - 20px);
    text-decoration: none;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
  }
`;
