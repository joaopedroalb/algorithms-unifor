import { useState } from 'react'
import Layout from '../components/Layout'
import { Main, Header, Title, SubTitle, InputContainer, Input, Button,Result } from '../styles/StylePageV2'
import { Input as InputNumber } from '../styles/StylePageV1'

export default function Cont() {
    const [notes,setNotes] = useState(null)
    const [min, setMin] = useState(null)
    const [result,setResult] = useState(null)

    function getListNumber(){
        const listNumber = notes.split(' ')
                                .filter(x=>!isNaN(x)&&x!=='')
                                .map(x=>{return parseFloat(x)})

        return listNumber
    }

    function handleClick(){
        console.log(min)
        if(getListNumber().length <= 0 || min===null || isNaN(min)){
            console.log('entrou aqui')
            setResult(null)
            return
        }

        const listFilter = getListNumber().filter(x=>x>=min)
        setResult(listFilter)
    }

    return (
        <Layout
            title="Contagem"
            description="Algoritmo verifica uma lista de números e um valor N de corte retornando quais números passando pelo valor de corte"
        >
            <Main>
                <Header>
                    <Title>Digite a Lista e o valor de corte</Title>
                    <SubTitle>Digite uma lista divindo os números por ESPAÇO ex: "1 5 8 10"</SubTitle>
                </Header>
                <InputContainer>
                    <Input onChange={({target})=>setNotes(target.value)}/>
                    <InputNumber type="number" onChange={({target})=>setMin(target.valueAsNumber)}/>
                    <Button onClick={()=>handleClick()}>Verificar</Button>
                </InputContainer>
                {result&&<Result>Notas que passaram: <b>{result.join(', ')}</b></Result>}
            </Main>
        </Layout>
    )
}