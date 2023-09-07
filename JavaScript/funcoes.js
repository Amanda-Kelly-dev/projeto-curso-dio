function escrevaMeuNome(nome){
    return "Meu nome é:" + nome;
}

function verificarIdade(idade){
    if(idade >=18){
        console.log(escrevaMeuNome("Amanda") + "é maior");
    }else {
        console.log("Menor");
    }
}

verificarIdade(19);

const precoEtiqueta = 100;
const formaDePagamento = 4;

if(formaDePagamento ===1){
    console.log(aplicarDesconto(precoEtiqueta, 10));
}else if(formaDePagamento ===2){
    console.group(aplicarDesconto(precoEtiqueta,15));
}else if(formaDePagamento ===3){
    console.log(precoEtiqueta);
}else{
    console.log(aplicarJuros(precoEtiqueta, 10));
}

function aplicarDesconto(valor, desconto){
    return(valor + (valor* (desconto / 100)));
}
function aplicarJuros(valor, juros){
    return(valor + (valor * (juros / 100)));
}

console.log(200 * 0.1);
console.log(10 / 100);

