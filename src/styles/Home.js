import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    justify-content: flex-start;
    background: var(--dark-blue);
    text-align: center;
`

export const Header = styled.header`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .75rem;
`

export const Title = styled.h1`
    font-size: 4.5rem;

    b{
        color: var(--orange);
    }
`

export const SubTitle = styled.p`
    font-size: .85rem;
`

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 2.5rem;
    padding: 0 2rem;
`