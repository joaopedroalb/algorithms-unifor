import styled from 'styled-components'

export const Main = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: var(--dark-blue);
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 3.25rem;
`

export const Header = styled.header`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: .2rem;   
`

export const Title = styled.h1`
    font-size: 3.75rem;
    color: var(--orange);
`

export const Subtitle = styled.p`
    font-size: 1rem;
    font-style: italic;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
