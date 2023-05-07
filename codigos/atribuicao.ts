let pessoa: number | string;
pessoa = 1;
pessoa.toFixed(1);

pessoa = "Marcos Said";
pessoa.toString();
pessoa.toUpperCase();



//Quando se atribui uma variavel que pode ter dois tipos, quando setar um valor, o typescript entende 
//que é uma string e mostra os metodos string, se for int entende os metodos inteiros
//se usar um if, ele entended que dentro do escopo o tipo sera o que foi feito na condição

//let pessoa2: number | string;


let pessoa2 = Math.random() > 0.5
? "Marcos Said"
: 51;


if(pessoa2 == "Marcos Said"){
    pessoa2.length
    pessoa2.toUpperCase();
    //pessoa2.toFixed(1); Da erro, pois entende que é uma string
}

if(typeof pessoa2 === "string"){
    pessoa2.toUpperCase();
}

if(pessoa2 == 1){
    //pessoa2.length Da erro, pois entende que é do tipo number
    pessoa2.toFixed(1);
}

if((typeof pessoa2 === "string")){
    pessoa2.toUpperCase();
}


//ou validacao por typeof

