import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  color: #fff;
  &::after {
    content: '';
    background: url('https://images8.alphacoders.com/462/462581.jpg');
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background-size: cover;
  }
  > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > h1 {
      margin-bottom: 20px;
    }
  }
  > div:last-child {
    display: flex;

    max-height: 390px;
    max-width: 800px;
    > a:hover {
      color: #e53935;
      transition: 0.3s;
    }
    > a {
      margin: 10px;
      text-decoration: none;
      font-size: 10px;
      color: #fff;
      > img:hover {
        opacity: 1;
      }
      > img {
        width: 200px;
        height: 300px;
        opacity: 0.8;
      }
    }
    > h1 {
      text-align: center;
    }
  }
`;
export const StyledInput = styled(DebounceInput)`
  height: 45px;
  width: 400px;
  border-radius: 10px;
  border-style: none;
  padding-left: 5px;
  margin-bottom: 20px;
  font-size: 20px;
`; 
