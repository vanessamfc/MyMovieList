import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #424242;
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div:nth-child(1) {
    display: flex; 
    > h1 {
      font-size: 40px;
      margin-bottom: 20px;
    }
  }
  > div:nth-child(2) {
    max-width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    > div:first-child {
      > img {
        height: 400px;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0);
        margin-right: 20px;
      }
    }
    > div:last-child {
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      > p:first-child {
        font-size: 19px;
        margin-bottom: 10px;
      }
      > p {
        font-size: 16px;
      }
      > h1 {
        font-size: 23px;
      }
      > span {
        margin: 5px 5px 5px 0;
      }
    }
  }
  > div:nth-child(3) {
    display: flex;

    margin-top: 15px;
  }
`;

export const StyledButton = styled(Button)`
  margin-left: 15px !important;
`;
