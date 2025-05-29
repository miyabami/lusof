window.onload = function() {
    // Recuperar los datos del pedido
    const nombre = localStorage.getItem("nombre");
    const pizza1 = localStorage.getItem("pizza1");
    const pizza2 = localStorage.getItem("pizza2");
    const pizza3 = localStorage.getItem("pizza3");
    const complementos = localStorage.getItem("complementos");
    const metodoEntrega = localStorage.getItem("metodoEntrega");
    const metodoPago = localStorage.getItem("metodoPago");
    const total = localStorage.getItem("total");
    const fecha = localStorage.getItem("fecha");
    const dineroPagado = localStorage.getItem("dineroPagado");

    // Precios de las pizzas y complementos
    const precioPizza = 120;
    const precioComplemento = 50;

    // Mostrar los datos en el ticket
    document.getElementById("cliente").innerText = nombre;
    document.getElementById("pizza1").innerText = pizza1;
    document.getElementById("pizza2").innerText = pizza2;
    document.getElementById("pizza3").innerText = pizza3;
    document.getElementById("complementos").innerText = complementos;
    document.getElementById("metodoEntrega").innerText = metodoEntrega;
    document.getElementById("metodoPago").innerText = metodoPago;
    document.getElementById("total").innerText = total;
    document.getElementById("fecha").innerText = fecha;

    // Mostrar precios de las pizzas
    document.getElementById("precioPizza1").innerText = pizza1 !== "Ninguna" ? precioPizza : 0;
    document.getElementById("precioPizza2").innerText = pizza2 !== "Ninguna" ? precioPizza : 0;
    document.getElementById("precioPizza3").innerText = pizza3 !== "Ninguna" ? precioPizza : 0;

    // Mostrar precio de los complementos
    document.getElementById("precioComplementos").innerText = complementos !== "Ninguno" ? precioComplemento : 0;

    // Mostrar dinero pagado si es en efectivo
    if (metodoPago === "Efectivo") {
        document.getElementById("dineroPagado").innerText = dineroPagado;
    } else {
        document.getElementById("dineroPagado").innerText = "No aplica";
    }
};
