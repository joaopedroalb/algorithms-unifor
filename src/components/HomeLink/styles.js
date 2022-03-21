import styled from 'styled-components'

export const Button = styled.div`
    padding: 0.7rem;
    background: var(--white);
    color: var(--dark-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    position: absolute;
    bottom: 10vh;
    left: calc(100vw - 85px);
    cursor: pointer;

    transition: 400ms;
    &:hover{
        opacity: .6;
    }
`