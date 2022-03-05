function clicou() {
    document.getElementById("Agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

};

function redirecionar() {
    window.open("https://globallabs.academy/")
        //window.location.href = "https://google.com";
};

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse."
};

function voltar(elemento) {
    //ocument.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui."
};

function load() {
    alert("Pagina carregada")
};

function funcaoChange(elemento) {
    console.log(e)
};

let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseFloat(gets());
console.log("NUMBER = " + valor1);
console.log("SALARY = U$ " + (valor2 * valor3));
// Escreva o seu código aqui
/*
function soma(n1, n2){
    return n1 + n2
};

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
};
var idade = prompt("Qual sua idade? ")
console.log(validaIdade(idade))
*/
/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
};
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*var d = new Date();
alert(d.getMonth()+1);
alert(d.getMilliseconds());
*/

/*var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}
for (var count; count > 0; count--){
    console.log(count);
};
*/
/*var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de idade")
} else{
    alert("menor de idade")};
*/

/*var frutas = [{nome: "maçã", cor: "vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
console.log(frutas[1].nome);
console.log(frutas[1].cor);
console.log(frutas[0].nome);
console.log(frutas[0].cor);
*/



//var lista = ["maça", "pera", "laranja"];
//console.log(lista.toString());
//console.log(lista.join('| - |'));



//console.log(lista);

//console.log(lista[1]);
//lista.push("uva");
//console.log(lista);
//lista.pop();
//console.log(lista)
//console.log(lista.length);
//console.log(lista.reverse());

//var nome = "Marcelo Pastana";
//var idade = 30;
//var idade2 = 10;
//var frase = "Japão é massa"
//alert(nome + "tem idade "+ idade + " anos.");
//alert(idade + "idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//var n1 = 5;
//var n2 = 3;
//console.log(n1*n2)