let peso = parserFloat(prompt("digite o valor do peso :"));
let altura = parserFloat(prompt("digite o valor da altura: "));

if(isNaN(peso) || isNaN(altura) || peso<=0 || altura<=0 ){
document.write("digite valores válidos")
}else{
let imc = peso/(altura*altura).toFixed(2);

if(imc<=18){
    document.write ("seu imc está abaixo do normal !!");
    
}else if(imc>18 && imc <=24.9){
document.write ("seu imc está normal !!");
}
else if(imc>25 && imc<=28.9){
}
}
