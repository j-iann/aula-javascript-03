//#1
var idade = 19;
var idadeVouF;

if (idade >= 18) {
    idadeVouF = true;
}

else if (idade < 18) {
    idadeVouF = false;
}

if (idadeVouF == true) {
    console.log("Que legal! Você já pode ter a carteira de habilitação.");
}

else if (idadeVouF == false) {
    console.log("Poxa, que pena! Você ainda não pode ter a carteira de habilitação.");
}

//#2
var terminouEm = true;
var terminouEmSVouF;

if (terminouEm == true) {
    terminouEmSVouF = true;
}

else if (terminouEm == false) {
    terminouEmSVouF = false;
}

if (idadeVouF == true) {
    console.log("Poxa, que legal!");
}

else if (idadeVouF == false) {
    console.log("Falta pouco! Logo você termina.");
}