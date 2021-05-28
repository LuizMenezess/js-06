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
console.log(aboutMe);

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
    telefone: "1234-1234",
    amigos: ["Marcia", "Lucas", "Alisson", "Joao", "Ronan"]
},

{
    nome: "Sabrina",
    idade: 17,
    telefone: "5431-1543",
    amigos: ["Maria", "Luan", "Alice", "Luiza", "Tati"]
},

{
    nome: "Esther",
    idade: 11,
    telefone: "4876-1020",
    amigos: ["Pedro", "Marlon", "Lucas", "Bianca", "Jason"]
},

{
    nome: "Romildo",
    idade: 51,
    telefone: "3401-1416",
    amigos: ["Bia", "Bruno", "Carla", "Karol", "Renan"]
},

{
    nome: "Sheila",
    idade: 21,
    telefone: "1234-1764",
    amigos: ["Bruna", "luiz", "Jose", "Caio", "Thales"]
}
]

console.log(cadastro);

//06-Mostre no console o nome de um amigo de cada lista:
console.log(cadastro[0].amigos[1], cadastro[1].amigos[2], cadastro[2].amigos[3],cadastro[3].amigos[4], cadastro[4].amigos[0]);