import styled from "styled-components";

export const CardMain = styled.div`
    width: 280px;
    background: var(--orange);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    gap: .75rem;
    border-radius: 30px;
    cursor: pointer;

    overflow-y: hidden;
    text-overflow: ellipsis;

    transition: 400ms;
    &:hover{
        transform: scale(1.05);
    }
`

export const Circle = styled.div`
    padding: 20px;
    font-size: 1.6rem;
    border-radius: 50%;
    background: var(--dark-blue);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    color: var(--dark-blue);
    font-size: 1.5rem;
    font-weight: 600;
`