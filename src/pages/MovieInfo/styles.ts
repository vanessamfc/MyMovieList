import styled from 'styled-components';

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
      font-size: 50px;
    }
  }
  > div:nth-child(2) {
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    > div:first-child {
      > img {
      }
    }
    > div:last-child {
    }
  }
  > div:nth-child(3) {
  }
`;
