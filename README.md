# Trabalho sobre Algoritmos de Ambientes desenvolvimento de software

# **🚀** Desafio proposto

O trabalho foi criar 6 algoritmos e a criação do frontend para utilizar cada algoritmo. 

## **🎨** Frontend

Utilizando a vercel para subir o site você pode testar os algoritmos aqui [https://algorithms-unifor.vercel.app/](https://algorithms-unifor.vercel.app/) 

## **💻** Caso queira verificar o código em sua maquina

Verifique se tem o git e o node instalado e utilizando o npm ou yarn e siga os passos abaixo

```jsx
git clone https://github.com/joaopedroalb/algorithms-unifor.git
cd algorithms-unifor
npm install OU yarn install
npm run dev OU yarn dev
```

# **📝** Algoritmos usados

### **Número Primo**

Passando um número N a função vai retornar **true** caso o N seja primo e **false** caso contrario

```jsx
export const isPrimerWithSqrt = (number) =>{
    let sqrtNumber = Math.sqrt(number)

    for(let i = 2; i <= sqrtNumber; i++){
        if(number % i === 0) return false
    }
    return number > 1 
}
```

### **Somatório**

Passando uma lista de números a função vai retornar a **soma** de todos os números

```jsx
export const summation = (lstNumber) => {
    return lstNumber
            .map((value)=>{return !isNaN(value)&&value})
            .reduce((a,b)=>{return a+b})
}
```

### **Fibonacci**

Passando um número N ele a função vai retornar a **Fibonacci** do mesmo

```jsx
export const fibonacci = (number) =>{
    if(number <= 2){
        return number-1
    }

    return fibonacci(number-1)+fibonacci(number-2)
}
```

### **Máximo Divisor Comum**

Passando dois valores **A** e **B** a função vai retornar o **maior divisor comum** entre eles

```jsx
export const mdc = (x,y) =>{
    let remainder = x<y ? x:y

    while (remainder > 0){
        remainder = x % y;
        x = y;
        y = remainder;
    } 

    return x;
}
```

### **Quick Sort**

Passando uma lista de números a função vai retornar outra **lista de forma ordenada** 

```jsx
export const quickSort = (lst) => {
    if(lst.length < 2)
        return lst 
    
    const pivot = lst[Math.floor(Math.random()*lst.length)]

    let left = []
    let right = []
    let equals = []

    for(let value of lst){
        if(value < pivot){
            left.push(value)
        }

        if(value > pivot){
            right.push(value)
        }

        if(value == pivot){
            equals.push(value)
        }
    }

    return [...quickSort(left),...equals,...quickSort(right)]
}
```

### **Contagem**

Passando um valor **A** de corte e uma Lista ele vai retornar uma **lista com todos os valores que sejam maiores ou iguais a A** 

```jsx
export const cont = (a,lst) =>{
	let result = []
	for(let item in lst)
		if(item>=a) result.push(item)

	return result
}
```
