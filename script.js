//Crie um objeto que receba ao menos três propriedades sobre você.
//Adicione uma nova propriedade sem alterar seu objeto inicial.
//Remova uma propriedade desse objeto.
//Mostre no console todas as propriedades desse objeto.
//Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
//Mostre no console o nome de um amigo de cada lista.


//01-Crie um objeto que receba ao menos três propriedades sobre você:
let aboutMe = {
    dog: "Pituca",
    sister: "Angela",
    brother: "Davi"
}

//02-Adicione uma nova propriedade sem alterar seu objeto inicial:
aboutMe.time = "Flamengo"

//03-Remova uma propriedade desse objeto:
delete aboutMe.time

//04-Mostre no console todas as propriedades desse objeto:
console.log(aboutMe);


//05- Crie um array  chamado "cadastro" contendo ao menos 5 objetos. Na propriedade amigos, adicione ao menos 4 itens:
let cadastro = [
{
    nome: "Daniel",
    idade: 21,
    telefone: 1234-1234,
    amigos: `Marcia, Lucas, Alisson e Joao`
},

{
    nome: "Sabrina",
    idade: 17,
    telefone: 1234-1234,
    amigos: `Maria, Luan, Alice e Luiza`
},

{
    nome: "Esther",
    idade: 11,
    telefone: 1234-1234,
    amigos: `Pedro, Marlon, Lucas e Bianca`
},

{
    nome: "Romildo",
    idade: 51,
    telefone: 1234-1234,
    amigos: `Bia, Bruno, Carla e Karol`
},

{
    nome: "Sheila",
    idade: 21,
    telefone: 1234-1234,
    amigos: `Bruna, luiz, Jose e Caio`
}

]
console.log(cadastro)

//06-Mostre no console o nome de um amigo de cada lista:
console.log(cadastro[0].amigos[3]) 
console.log(cadastro[1].amigos[2])
console.log(cadastro[1].amigos[4])
console.log(cadastro[0].amigos[1])
console.log(cadastro[4].amigos[3])