import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 

:root {
    --color-white: #FFF;
    --color-black: #000;


  }

  * {
  font-family: 'Inter', sans-serif;
  font-style: normal;
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  } 

  input:focus{
    background-color: #f6f6f6;
  }

  input:disabled {
  background-color: #f2f2f2; /* Cor de fundo */
  color: #999; /* Cor do texto */
  cursor: not-allowed; /* Cursor do mouse */
}

textarea:disabled {
  background-color: #f2f2f2; /* Cor de fundo */
  color: #999; /* Cor do texto */
  cursor: not-allowed; /* Cursor do mouse */
}
  



  h1 {
    font-size: 80px;
    font-weight: 800
  }

  h2 {
    font-size: 42px;
    font-weight: 800
  }

  h4 {
    font-size: 26px;
  }

  .p0 {
    font-size: 14px;
  } 

  .p1 {
    font-size: 16px;
  } 

  .p2 {
    font-size: 18px;
    
  }

  .p3 {
    color: #808080;
    font-size: 24px;
  } 

  .t1 {
    letter-spacing: 1.2px;
    font-size: 10px;
    color: #000;
    font-weight: 200
  } 

  .t2 {
    font-size: 18px;
    color: #000;
    font-weight: 600
  }

  .t3 {
    color: #000;
    font-size: 24px;
    font-weight: 600
  }



  
 
  
`;
