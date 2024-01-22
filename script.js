/*document.write('LIBBS 2024');

var nome = 'Vivianne Christi';
var endereco = 'Rua da minha casa';
var telefone = '11 4002-8922';
const anoNascimento = 2005;

//nome = prompt('Qual o seu nome?');

studing =confirm('Está estudando no momento?');
console.log(studing);


if(studing){
    alert('Parabéns');
}else{
    alert('Vamos Estudar...');
}

document.write(nome + '<br>');
document.write(endereco + '<br>');
document.write(telefone + '<br>');
document.write(anoNascimento + '<br>');

console.log('Estou aqui...')

alert('Você chegou aqui');*/

//ATIVIDADE 1

/*O usuarío digita a idade e:
12=>alerta que ainda brinca
18=>Parabéns! hora de tirar a carta!
>25 Já não precisar morar com papai
>50 =>Nada de neto?
*/


var idade;

idade = prompt('Qual é sua idade?');

if (idade <=17){
    alert('Novo demais, vai brincar!');
}else if (idade >=18 && idade <=24){
    alert('Parabéns pode tirar a carta!');
}else if( idade >=25 && idade <=49){
    alert('Já não precisar morar com papai');
}else if(idade >=50){
    alert('Nada de Neto?');
}
