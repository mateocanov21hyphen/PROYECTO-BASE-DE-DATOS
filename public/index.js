//EJEMPLO
const inputName = document.querySelector('#productName')
const inputPrice = document.querySelector('#productPrice')

const button = document.querySelector('button')

//Capturar "Crear Ruta de Vuelo":
const inputID = document.querySelector('#IDRutaVuelo')
const Aerolinea = document.querySelector('#Aerolinea')
const AeropuertoOrigen = document.querySelector('#AeropuertoOrigen')
const AeropuertoDestino = document.querySelector('#AeropuertoDestino')
const ContinenteOrigen = document.querySelector('#ContinenteOrigen')
const ContinenteDestino = document.querySelector('#ContinenteDestino')
const PaisOrigen = document.querySelector('#PaisOrigen')
const PaisDestino = document.querySelector('#PaisDestino')
const CiudadOrigen = document.querySelector('#CiudadOrigen')
const CiudadDestino = document.querySelector('#CiudadDestino')

button.addEventListener('click', (e) =>{

    const inputID = inputID.value
    const Aerolinea = Aerolinea.value
    const AeropuertoOrigen = AeropuertoOrigen.value
    const AeropuertoDestino = AeropuertoDestino.value
    const ContinenteOrigen = ContinenteOrigen.value
    const ContinenteDestino = ContinenteDestino.value
    const PaisOrigen = PaisOrigen.value
    const PaisDestino = PaisDestino.value
    const CiudadOrigen = CiudadOrigen.value
    const CiudadDestino = CiudadDestino.value

    fetch('/api/v1/products', { 
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            inputID,
            Aerolinea,
            AeropuertoOrigen,
            AeropuertoDestino,
            ContinenteOrigen,
            ContinenteDestino,
            PaisOrigen,
            PaisDestino,
            CiudadOrigen,
            CiudadDestino
        }),
    })
})
