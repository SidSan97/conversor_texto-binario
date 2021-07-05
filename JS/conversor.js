
function convert() 
{

    var texto  = document.getElementById('texto').value;
    var texto2 = document.getElementById('texto2');

    texto2.value = "";

    for (i=0; i < texto.length; i++) 
    {
        texto2.value +=texto[i].charCodeAt(0).toString(2) + " ";
    }
}

function convertToString()
{
    var texto  = document.getElementById('texto');
    var texto2 = document.getElementById('texto2').value;

    texto.value = "";

    //texto2.replace(/ /g, "");
    var decimal = parseInt(texto2, 2);
    var dec = String.fromCharCode(decimal);

    texto.value = dec;

    alert(dec);
}