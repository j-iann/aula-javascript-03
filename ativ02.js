//#1
var x = 5;
var y = 7;

if (x < 7) {
    console.log("Olá mundo!");
}
else if (x > y) {
    console.log("Mundo, olá!");
}
else if (x == y) {
    console.log("Adeus!");
}

//#2
var fruta = "laranja";
switch (fruta) {
    case "banana":
        console.log("O filme é Os minions");
        break;
    case "laranja":
        console.log("O filme é Laranja Mecânica.");
        break;
    case "maçã":
        console.log("O filme é Branca de neve.");
        break;
    default:
        console.log("O cinema tá fechado.");
}