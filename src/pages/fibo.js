import Layout from "../components/Layout";
import {Main,Title,InputContainer,Input} from '../styles/StylePageV1'

export default function Fibo() {
  return (
    <Layout title="Fibonacci" description="Algoritmo que vai receber mostrar a fibonnacci de um número inteiro">
        <Main>
            <InputContainer>
                <Title>Digite o número</Title>
                <Input type="number"/>
            </InputContainer>
        </Main>
    </Layout>
  )
}
