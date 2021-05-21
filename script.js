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
console.log(aboutMe);


//03-Remova uma propriedade desse objeto:
delete aboutMe.time
console.log(aboutMe);


//04-Mostre no console todas as propriedades desse objeto:
console.log(aboutMe.dog, aboutMe.sister, aboutMe.brother);


//05- Crie um array  chamado "cadastro" contendo ao menos 5 objetos. Na propriedade amigos, adicione ao menos 4 itens:
let cadastro = [
{
    nome: "Daniel",
    idade: 21,
    telefone: 0000-0000,
    amigos: `Marcia, Lucas, Alisson e Joao`
},

{
    nome: "Sabrina",
    idade: 17,
    telefone: 0000-0000,
    amigos: `Maria, Luan, Alice e Luiza`
},

{
    nome: "Esther",
    idade: 11,
    telefone: 0000-0000,
    amigos: `Pedro, Marlon, Lucas e Bianca`
},

{
    nome: "Romildo",
    idade: 51,
    telefone: 0000-0000,
    amigos: `Bia, Bruno, Carla e Karol`
},

{
    nome: "Sheila",
    idade: 21,
    telefone: 0000-0000,
    amigos: `Bruna, luiz, Jose e Caio`
}

]
console.log(cadastro)


//06-Mostre no console o nome de um amigo de cada lista:
console.log(cadastro[0].amigos, cadastro[1].amigos, cadastro[2].amigos, cadastro[3].amigos, cadastro[4].amigos);


//atividades 05 e 06 não está finalizado!