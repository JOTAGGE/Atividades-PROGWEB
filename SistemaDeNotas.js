
var nota1 = 2;
var nota2 = 3;
var nota3 = 5;

var aluno = new Array(nota1, nota2, nota3);

var media = nota1 + nota2 + nota3 % 3;

if(media >= 7){
    console.log("Aprovado");
}
else if(5 <= media < 7){
    console.log("Recuperação");
}
if (media < 5){
    console.log("Reprovado");
}

var menu = aluno.length;