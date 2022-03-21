import {} from 'react'
import Layout from '../components/Layout'
import {Main,Title,RowInputContainer,Input} from '../styles/StylePageV1'
import {Button} from '../styles/StylePageV2'

export default function Mdc() {
  return (
    <Layout 
        title="Máximo Divisor Comum" 
        description="O algoritmo vai receber dois inteiros A e B e retornar o maior divisor entre eles"
    >
        <Main>
            <Title>Digite os numeros que deseja calcular o MDC</Title>
            <RowInputContainer>
                <Input type="number"/>
                <Input type="number"/>
            </RowInputContainer>
            <Button>Calcular</Button>
        </Main>
    </Layout>
  )
}
