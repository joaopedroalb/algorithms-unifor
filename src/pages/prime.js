import Layout from '../components/Layout'
import { useState } from 'react'
import {Main,Title,InputContainer,Input,Button} from '../styles/Prime'

export default function Prime() {
  const [number,setNumber] = useState(null)

  return (
    <Layout 
        title="Número Primo" 
        description="Desafio para verificar se o número é primo"
    >
      <Main>
        <Title>Digite o número que deseja verificar</Title>
        <InputContainer>
          <Input type="number" min={0}/>
          <Button>Verificar</Button>
        </InputContainer>
      </Main>
    </Layout>
  )
}
