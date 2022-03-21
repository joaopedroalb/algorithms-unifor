import { useState } from 'react'
import Layout from '../components/Layout'
import { summation } from '../functions/algorithmFunc'
import { Main, Header, Title, SubTitle, InputContainer, Input, Button,Result } from '../styles/SumStyle'
export default function Sum() {
  const [text, setText] = useState(null)
  const [result, setResult] = useState(null)

  function handleClick() {
    if (text === null || getListNumber().length <=0){
      setResult(null)
      return 
    }
      
    const sum = summation(getListNumber())
    console.log(sum)
    setResult(sum)
  }

  function getListNumber(){
    const lstTxt = text.split(';')
    const lstNumber = lstTxt
                          .filter(x=>!isNaN(x))
                          .map(x=>{return parseFloat(x)})
    return lstNumber
  }


  return (
    <Layout title="Somatório" description="Algoritmo para fazer o somatório de uma lista de números">
      <Main>
        <Header>
          <Title>Digite sua lista</Title>
          <SubTitle>Separe seus numeros por {`";"`} Ex: <strong>{`"5;4;2.2;6"`}</strong> que vai ser igual a <strong>{`"5,4,2.2,6"`}</strong></SubTitle>
        </Header>
        <InputContainer>
          <Input type="text" onChange={({ target }) => setText(target.value)} />
          <Button onClick={()=>handleClick()}>Somar</Button>
        </InputContainer>
        {
          result &&
          (
            <Result>Resultado da soma: <b>{result}</b></Result>
          )
        }
      </Main>
    </Layout>
  )
}
