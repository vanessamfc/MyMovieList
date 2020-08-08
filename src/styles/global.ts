import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  .regim-options{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc7;
    width: 100%;
    padding-bottom: 5px;
    >:first-child{
        margin-right: 10px;
    }
    >span {
        font-size: 20px;
    }
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
  }
  body {
    background: #1b1b1b;
    -webkit-font-smoothing: antialiased;
    min-width:100%;
    max-width:100vw;
  }
  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    color:#424242;
  }
  #root {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction:column;
    min-height:100vh;
  }
  button {
    cursor: pointer;
  } 
  `;
