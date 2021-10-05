//#1
var sistema_operacional = "linux";

switch (sistema_operacional) {
    case "linux":
        console.log("O Linux é um sistema operacional de código aberto.");
        break;
    case "windows":
        console.log("O Windows é um sistema operacional da empresa Microsoft.");
        break;
    case "Chrome OS":
        console.log("O Chrome OS é um sistema operacional da empresa Google.");
        break;
    case "macOS":
        console.log("O macOS é um sistema operacional da empresa Apple.");
        break;
    default:
        console.log("Há a possibilidade de você estar utilizando um sistema mobile.");
}