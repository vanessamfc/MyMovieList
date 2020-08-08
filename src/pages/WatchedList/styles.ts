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
  width:100%;
  > ul {
    display: flex;
    flex-direction: column;
    width:100%;
    font-size: 20px;
    list-style: none;
    align-items: center; 
    padding:10px;
    > div {
      display: flex;
      width:100%;
      max-width: 800px;
      color: #6d6d6d;
      border-bottom: 1px solid;
      justify-content: space-between;
      > a {
        max-width:100%;
        
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
        >p{
          display: inline-block;

          width:100%;
          text-overflow: ellipsis;
          overflow: hidden;

        }
      }
      > div {
        display: flex;
        flex-shrink:0;
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
