import {useState} from 'react'
import Layout from '../components/Layout'
import {Main,Header,Title,SubTitle,InputContainer,Input,Button} from '../styles/StylePageV2'

export default function Sort() {
  return (
    <Layout
        title="Quick Sort"
        description="O algoritmo vai ordernar uma lista passada utilizando metodo de quick sort"
    >
        <Main>
            <Header>
                <Title>Digite a Lista que deseja ordenar</Title>
                <SubTitle>Use espaço para dividir os itens exemplo: {`"3 8 2.2 42"`} que vai ser igual a {`"3, 8, 2.2, 42"`}</SubTitle>
            </Header>
            <InputContainer>
                <Input/>
                <Button>Ordenar</Button>
            </InputContainer>
        </Main>
    </Layout>
  )
}
