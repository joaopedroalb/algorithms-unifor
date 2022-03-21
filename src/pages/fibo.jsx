import { useState } from "react";
import Layout from "../components/Layout";
import { fibonacci,fibonacciWithouRecursion } from "../functions/algorithmFunc";
import { Main, Title, InputContainer, Input } from '../styles/StylePageV1'

export default function Fibo() {
    const [number,setNumber] = useState(null)

    function renderResult(){
        if(isNaN(number) || number<=0){
            setNumber(null)
            return 
        }

        let result = '';
        for(let i = 0; i<number; i++){
            const fibo = fibonacciWithouRecursion(i+1)
            result += ' '+fibo
        }   

        return <h1>{result}</h1>
    }

    return (
        <Layout title="Fibonacci" description="Algoritmo que vai receber mostrar a fibonnacci de um número inteiro">
            <Main>
                <InputContainer>
                    <Title>Digite um número inteiro maior que zero</Title>
                    <Input type="number" min={0} onChange={({target})=>setNumber(target.valueAsNumber)}/>
                </InputContainer>
                {
                    number != null && renderResult()
                }
            </Main>
        </Layout>
    )
}
