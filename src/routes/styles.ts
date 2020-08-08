import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavbar = styled.nav`
  display: grid;
  grid-template-areas: 'gap menu button';
  grid-template-columns: 1fr 1fr 1fr;

  height: 60px;
  position: fixed;
  top: 0;
  background: #000;
  width: 100%;
  z-index: 300;
  > div:first-child {
    width:330px; 
    grid-area: menu;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    top: 0;
    flex-grow: 1;
    > a:hover {
      background-color: #e53935aa;
      color: #fff;
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
      margin: 5px;
      border-radius: 5px;
    }
  }
  div:last-child {
    grid-area: button;
    justify-self: end;
    align-self: center;
    padding: 10px;
    > button {
      background-color: #e53935;
      border-style: none;
      border-radius: 50%;
      height: 30px;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;

      > svg {
        height: 20px;
        width: 20px;
        color: #fff;
      }
    }
    > button:hover {
      background-color: #e53935aa;
    }
  }

`;


export const StyledNavLink = styled(NavLink)`
  &.active {
    background-color: #e53935;
  }
`;
