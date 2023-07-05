const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//el evento addEventListener espera el evento en este caso a que des click en el boton y luego ejecuta la funcion btnOnClick
//btn.addEventListener('click', btnOnClick);

//Esto pasa porque es un formulario y el boton es de type=submit pero se puede cambiar a type=button y ya no se escucharia submit sino el evento click
form.addEventListener('submit',sumarInputValues);

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}


