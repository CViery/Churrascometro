let inputAdultos = document.getElementById("adultos")
let inputCriancas= document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")
let resultado = document.getElementById("resultado")


const calcular = ()=>{
    console.log("calculando")
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value
    let carne = carnePP(duracao)
    let cerveja = cervejaPP(duracao)
    let bebidas = bebidasPP(duracao)
    let qntdTotalCarne = carne * adultos + (carne/2 * criancas)
    let qntdTotalCerveja = cerveja* adultos
    let qntdTotalBebidas = bebidas* adultos + (bebidas/2 * criancas)

    resultado.innerHTML = `<p><img class="vetores" src="./imgs/steak.png">  ${qntdTotalCarne/1000} Kilos de carnes<p>`
    resultado.innerHTML += `<p><img class="vetores" src="./imgs/beer.png">  ${Math.ceil(qntdTotalCerveja/355)} Latas de cerveja de 355ml <p>`
    resultado.innerHTML += `<p><img class="vetores" src="./imgs/refri.png"> ${Math.ceil(qntdTotalBebidas/2000)}  Refrigerante de 2L<p>`
}
const carnePP = (duracao)=>{
    if(duracao >= 6){
        return 600
    }else{
        return 400
    }
    
}
const cervejaPP = (duracao)=>{
    if(duracao >= 6){
        return 2000
    }else{
        return 1200
    }
    
}
const bebidasPP = (duracao)=>{
    if(duracao >= 6){
        return 1500
    }else{
        return 1000
    }
    
}