import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #424242;
  color: #fff;
  padding: 60px 0;
  min-height: 100vh;
  > ul {
    font-size: 20px;
    margin-top: 20px;
    list-style: none;
    align-items: center; 
    > div {
      width: 800px;
      color: #6d6d6d;
      border-bottom: 1px solid;
      display: flex;
      justify-content: space-between;
      > a {
        display: flex;
        flex-grow: 1;
        align-items: center;
        text-decoration: none;
        color: #fff;
        > img {
          height: 80px;
          width: 60px;
          margin: 10px 10px 10px 0;
        }
      }
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
export const StyledButton = styled(Button)`
  margin-left: 15px !important;
  height: 40px;
  border-radius: 15px;
`;
