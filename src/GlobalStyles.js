import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
 }

 body {
   font-family: 'Lucida Console', Courier, monospace;
   background: rgb(99,166,20);
background: linear-gradient(266deg, rgba(99,166,20,1) 10%, rgba(99,167,20,1) 42%, rgba(0,212,255,1) 100%);
 }

`;
