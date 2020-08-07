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
  color: ${theme.palette.secondary.dark} !important;
`;
export const StyledButton = styled(Button)`
  width: 100% !important;
  margin-top: 5px !important;
`;
