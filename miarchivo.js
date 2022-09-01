//Presentación
let nombre = prompt("Ingrese el nombre de un jugador (ESC para salir)")

while(nombre.toUpperCase() != "ESC"){ 
    alert("El usuario ingresó: "+nombre)
    nombre = prompt("Ingresa el nombre de otro jugador")
}

//Promedio goles por equipo Premier League 2022 - 2023

const NUMERO_GOLES = prompt("Ingrese la cantidad de equipos")
let sumatoria = 0
let promedio = 0

for(let index = 1; index <= NUMERO_GOLES; index++){
    const GOLES = prompt("Ingrese los goles del equipo "+ index)
    sumatoria = sumatoria + parseFloat(GOLES)
}

promedio = sumatoria / NUMERO_GOLES
alert("El promedio de goles es: " +promedio)

