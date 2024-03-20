const productosCompradosMes = [];

let productoComprado;
let productoPrecio;
let presupuesto;

alert("Presupuesta tu mes aqui")

do{

    presupuesto = parseInt(prompt("Ingrese su presupuesto del mes"))

}while(isNaN(presupuesto))

do{
    productoComprado = prompt("Ingrese el nombre del producto. Ingrese 'SALIR' si no quiere agregar mas productos")

    if (productoComprado !== "SALIR") {

        do{
            
        productoPrecio = parseInt(prompt("Ingresa el monto del producto"));
    
        }while(isNaN(productoPrecio))
    
        let productosIngresados = {
            producto: productoComprado,
            precio: productoPrecio
        }

        productosCompradosMes.push(productosIngresados);
        console.log(productosCompradosMes);
    }else if(isNaN(productoComprado)){
        
    }

}while(productoComprado !== "SALIR")

function calcularGastosMes() {
    return productosCompradosMes.reduce((acc, total) => acc + total.precio, 0)
}

alert("Su gasto total en el mes es de: $" + calcularGastosMes())

function calcularDineroRestante() {
    let resta = presupuesto - calcularGastosMes();

    if(presupuesto < calcularGastosMes()){
        alert("Los productos que elegio superan su presupuesto, tiene una perdida de " + resta + "$")
    }else{
        alert("La cantidad de dinero que le sobra es de $" + resta)
    }
}

calcularDineroRestante()
