import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #424242;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  justify-content: center;
  align-items: center;
  color: #fff;
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
    max-height: 370px;
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

      > img {
        width: 200px;
        height: 290px;
      }
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
