
import Card from '../components/Card'
import {Main,Header,Title,SubTitle,CardContainer} from '../styles/Home'

export default function Home() {
  return (
    <Main>
      <Header>
        <Title><b>A</b>lgoritmos</Title>
        <SubTitle>Trabalho de Ambientes de Desenvolvimento de software</SubTitle>
      </Header>
      <CardContainer>
        <Card number={1} name="Número Primo" path="prime"/>
      </CardContainer>
    </Main>
  )
}
