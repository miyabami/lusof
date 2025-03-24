// pipshas.js

// Función para guardar los datos del pedido
function guardarDatosPedido() {
    let nombre = document.getElementById("nombreCliente").value || "No especificado";
    let pizza1 = document.getElementById("pizza1").value || "Ninguna";
    let pizza2 = document.getElementById("pizza2").value || "Ninguna";
    let pizza3 = document.getElementById("pizza3").value || "Ninguna";
    let complementos = document.getElementById("complementos").value || "Ninguno";
    
    let metodoEntregaElement = document.querySelector('input[name="entrega"]:checked');
    let metodoPagoElement = document.querySelector('input[name="pago"]:checked');

    let metodoEntrega = metodoEntregaElement ? metodoEntregaElement.value : "No seleccionado";
    let metodoPago = metodoPagoElement ? metodoPagoElement.value : "No seleccionado";

    let total = calcularTotal(pizza1, pizza2, pizza3, complementos);

    // Guardamos los datos en el localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("pizza1", pizza1);
    localStorage.setItem("pizza2", pizza2);
    localStorage.setItem("pizza3", pizza3);
    localStorage.setItem("complementos", complementos);
    localStorage.setItem("metodoEntrega", metodoEntrega);
    localStorage.setItem("metodoPago", metodoPago);
    localStorage.setItem("total", total);

    // Guardamos la fecha del pedido
    let fecha = new Date().toLocaleDateString();
    localStorage.setItem("fecha", fecha);

    // Redirigir a la página de confirmación o pago según el método de pago
    if (metodoPago === "Tarjeta") {
        window.location.href = "pago_tarjeta.html";
    } else {
        window.location.href = "confirmacion.html";
    }
}

// Función para calcular el total del pedido
function calcularTotal(pizza1, pizza2, pizza3, complementos) {
    let total = 0;
    let precioPizza = 120; // Precio base de una pizza
    let precioComplemento = 50; // Precio base de un complemento

    // Sumar el precio de las pizzas seleccionadas
    [pizza1, pizza2, pizza3].forEach(pizza => {
        if (pizza !== "Ninguna") {
            total += precioPizza;
        }
    });

    // Agregar el costo de los complementos si se seleccionaron
    if (complementos !== "Ninguno") {
        total += precioComplemento;
    }

    return total.toFixed(2); // Retornar el total con dos decimales
}
