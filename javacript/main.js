
var nome = "Vinicius Guilherme de Freitas";
var idade = 29


var lista = ["maça", "pera", "laranja"];
lista.push("Uva");//adicionar um elemnento
console.log(lista);
lista.pop();//remover o ultimo
//lista.length(); //tamanho da lista;
lista.reverse();// lista ao contrario
lista.toString();// traz em forma de string
lista.join("-"); //substitui a virgula pelo que quiser

var frutas ={cor:"azul",sabor:"ruim"};
frutas.cor;

var data = new Date(); // Pegar a data
console.log(data.getDate())//pegar um campo expecifico da data

console.log(data);


function soma(n1,n2){
    return n1+n2
}


function ValidatorYears(idade){
    if(idade<18){
        return"Pode entrar não";
    }else {
        return "Pode entrar"
    }
}

function Botao(){
    console.log(document.getElementById("agradecimento")); // Pegar algo no html por ID
    console.log(document.getElementById("agradecimento").innerHTML= "<h3>Ae siim</h3>"); // Adicionar codigos
}


function Redirect(){
   // window.open("https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Meta_programming"); // Abrir uma pagina WEB
    window.location.href= "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Meta_programming";//Abre na mesma paginas
    
}

//this no html passa o elemento na função
// onchange é usado no select utiliza para chamar função no html
function Torcar(item){
    var x = document.getElementById("esse").innerHTML("Valeu mermão")
    item.value


}
