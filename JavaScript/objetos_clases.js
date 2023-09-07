//1 - Crie uma classe para representar carros.
//Os carros possuem uma marca. uma cor e um gasto medio de combustivel
//Crie um metódo que dado a quantidade de km e o preço de combustivel
//retorne gasto em reais para realizar esse percurso.

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoDePercurso(distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro("Fiat", "Vermelho", 1 / 12);
uno.calcularGastoDePercurso(70, 5);
console.log(uno.calcularGastoDePercurso(70, 5));

const palio = new Carro("Fiat", "Preto", 1/10);
console.log(palio.calcularGastoDePercurso(70, 5));




//Crie uma classe para representar pessoas
//para cada pessoa teremos os atributos nome, peso e altura
//as pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC= peso / (altura * altura))
//instancie uma pessoa chaa José que tenha 70 kg de peso e 
//1,75 altura e peça para o José dizer seu IMC.

class Pessoa{
    nome;
    peso;
    altura;
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC(){
        return this.peso / (this.altura * this.altura)
    }
}

const jose = new Pessoa("José", 70, 1.75);
console.log(jose);
console.log(jose.calcularIMC());
