document.addEventListener('DOMContentLoaded', () => {
  let carrito = [];
  let total = 0;

  try {
    // Recuperar el carrito desde localStorage
    const carritoJSON = localStorage.getItem('carrito');
    if (carritoJSON) {
      carrito = JSON.parse(carritoJSON);
    }

    // Calcular el total
    total = carrito.reduce((sum, item) => sum + item.precio, 0);
    
    // Si existe un total guardado, usarlo (aunque lo recalculamos arriba)
    const totalStr = localStorage.getItem('total');
    if (totalStr) total = parseFloat(totalStr);
  } catch (e) {
    console.error('Error leyendo localStorage:', e);
  }

  const ticketList = document.getElementById('ticket-items');
  const totalSpan = document.getElementById('total-ticket');
  const orderId = document.getElementById('order-id');
  const fecha = document.getElementById('fecha');

  const date = new Date();
  fecha.textContent = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

  // Generar un número de orden aleatorio
  orderId.textContent = '#' + String(Math.floor(100000 + Math.random() * 900000));

  // Si el carrito está vacío, mostrar mensaje
  if (carrito.length === 0) {
    const li = document.createElement('li');
    li.textContent = "No hay productos comprados.";
    ticketList.appendChild(li);
  } else {
    // Mostrar los productos del carrito
    carrito.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
      ticketList.appendChild(li);
    });
  }

  // Mostrar el total
  totalSpan.textContent = total.toFixed(2);

  // Opcional: limpiar el carrito tras mostrar el ticket
  // localStorage.removeItem('carrito');
  // localStorage.removeItem('total');
});
