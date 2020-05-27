import styled from 'styled-components';

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
  > div:first-child {
    display: flex;
  }
  > div:last-child {
    display: flex;
    max-height: 370px;
    max-width: 800px;
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
