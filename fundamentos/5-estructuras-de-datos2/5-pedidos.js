// Pedidos

// Tenemos un array con pedidos para nuestro negocio de comidas:

const pedidos = [
{ id: "1", pedido: "hamburgesa", extras: ["mayonesa"] },
{ id: "1", pedido: "pancho" },
{ id: "1", pedido: "pizza" },
{ id: "1", pedido: "pancho", extras: ["ketchup"] },
{ id: "1", pedido: "empanadas" },
]

// Obtener un array con solo aquellos pedidos que incluyan algun condimento extra

const pedidosConCondimentoExtra = pedidos.filter(pedido => pedido.hasOwnProperty("extras"));

console.log(pedidosConCondimentoExtra);