"Use Strict"

let palavra = prompt("Entre com a palavra que você quer inverte")

reverseString(palavra)

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    alert(newString);
}


