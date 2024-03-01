alert("Presupuesta tu nueva casa");

function calcular(){
    let suma = (montoCasa + montoHabitaciones + montoPileta)
    alert("Usted necesita un presupuesto de $" + suma)
}

    let zonaCasa = 0;

    do{
        
    zonaCasa = parseInt(prompt("Donde quiere vivir? eliga una de las dos ocpciones (1 o 2) \n1. Zona Rural \n2. Zona urbana"))
    
        
    }while(zonaCasa != 1 && zonaCasa !=2)

    if (zonaCasa == 1){
        montoCasa = 7000;
        alert("Su monto es de " + montoCasa);
    }else if (zonaCasa == 2){
        montoCasa = 9000;
        alert("Su monto es de " + montoCasa);
    }

    let habitaciones = 0;
    
    do{
        habitaciones = parseInt(prompt("Cuantas habitaciones quiere? (Puede elegir hasta 6 habitaciones)"))

        
    }while ((habitaciones < 1 || habitaciones >6) || isNaN(habitaciones))

    if (habitaciones <= 2){
        montoHabitaciones = 1000;
        alert("Su monto es de " + montoHabitaciones)
    }else if (habitaciones <= 4){
        montoHabitaciones = 3000;
        alert("Su monto es de " + montoHabitaciones)
    }else if(habitaciones <= 6){
        montoHabitaciones = 5000;
        alert("Su monto es de " + montoHabitaciones)
    }

    let pileta = 0;

    do{
        pileta = prompt("Con Pileta SI o NO")
        pileta = pileta.toLowerCase()
        
    }while(pileta != "si" && pileta != "no")

    if(pileta == "si"){
        montoPileta = 5000;
        alert("Su monto es de " + montoPileta)
        calcular()
    }else{
        montoPileta = 0;
        alert("Su monto es de " + montoPileta)
        calcular()
    }
