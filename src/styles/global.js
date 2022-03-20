import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --dark-blue:#2B2D42;
        --white:#F8F9FA;
        --blue:#118AB2;
        --orange:#FF674D;
        --green-ligth:#06D6A0;
        --red:#ef233c;
    }
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif; 
        background: var(--dark-blue);
        color: var(--white);
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
        list-style: none;
    }
    h1,h2,h3,h4,p{
        margin: 0;
        padding: 0;
    }
` 

export default GlobalStyle 