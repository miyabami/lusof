document.addEventListener('DOMContentLoaded', () => {
    const carritoJSON = localStorage.getItem('carrito');
    const carrito = carritoJSON ? JSON.parse(carritoJSON) : [];
    const total = localStorage.getItem('total') || '0.00';

    const ticketList = document.getElementById('ticket-items');
    const totalSpan = document.getElementById('total-ticket');
    const orderId = document.getElementById('order-id');
    const fecha = document.getElementById('fecha');

    const date = new Date();
    fecha.textContent = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

    // Generar un número de orden aleatorio
    orderId.textContent = String(Math.floor(100000 + Math.random() * 900000));

    // Mostrar los productos del carrito
    if (carrito.length === 0) {
        const li = document.createElement('li');
        li.textContent = "No hay productos comprados.";
        ticketList.appendChild(li);
    } else {
        carrito.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
            ticketList.appendChild(li);
        });
    }

    // Mostrar el total
    totalSpan.textContent = parseFloat(total).toFixed(2);
});
