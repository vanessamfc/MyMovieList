import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import theme from '../../styles/themes';

export const SignUpContainer = styled.div`
  display: flex;
  background-color: #424242;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  > div:first-child {
    height: 400px;
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 25px;
    > input {
      border-radius: 5px;
      width: 300px;
      height: 45px;
      border: 1px solid gray;
      padding: 10px;
      font-size: 16px;
      margin-top: 10px;
    }
    > input:hover {
      border-color: #1b1b1b;
    }
    > p {
      color: #757575;
      margin: 3px 0 3px 10px;
    }
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5px;

      > a {
        text-decoration: none;
        color: ${theme.palette.primary.main};
        margin-left: 5px;
      }
    }
  }
`;

export const StyledInput = styled(TextField)`
  margin-top: 10px !important;
`;
export const StyledButton = styled(Button)`
  width: 100% !important;
  margin-top: 5px !important;
`;
