
/* ---- POST DEL FORMULARIO ---- */

function onClick (event){
    event.preventDefault();
  
    const mensaje = {
      emprendimiento: document.getElementById('emprendimiento').value,
      titular: document.getElementById('titular').value,
      celular: document.getElementById('celular').value
    }
    console.log(mensaje);
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(mensaje),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        Swal.fire(
            'Enviado', 
            '¡Gracias por tu registro!',
            'success'
      );
      cleanForm();
    })
    .catch((err) => console.log(err));
  }
  function cleanForm(){
    let formulario = document.getElementById('formulario');
    formulario.reset();
  }
  let boton = document.getElementById("enviar");
  boton.addEventListener("click", onClick);

/* ---- APP DEL CLIMA --- */

let ciudad = document.querySelector('.ciudad');
let temperatura = document.querySelector('.temperatura');
let tiempo = document.querySelector('.tiempo');

function letWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=-24.18328&lon=-65.33069&appid=a2a967f20fda739b027a2e0aa283722b&lang=es&units=metric')
        .then(response => response.json())
        .then(response => {
            let city = response['name'];
            let temp = response['main']['temp'];
            let time = response['weather'][0]['description'];

            ciudad.innerHTML = city;
            temperatura.innerHTML = temp;
            tiempo.innerHTML = time;
        })

        .catch(err => console.error(err));

}
letWeather();