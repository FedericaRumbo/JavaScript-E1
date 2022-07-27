//Array de objetos
let pizzas = [
    {
      id: 1,
      nombre: 'Napolitana',
      ingredientes: ['harina', 'sal', 'levadura', 'agua', 'tomate', 'perejil', 'aceite de oliva', 'ajo', 'mozzarella'],
      precio: 500,
    },
    {
    id: 2,
    nombre: 'Fugazzetta',
    ingredientes: ['masa', 'cebolla', 'oregano', 'sal', 'pimienta', 'aceite de oliva', 'mozzarella'],
    precio: 590,
    },
    {
      id: 3,
      nombre: 'Margarita',
      ingredientes: ['masa', 'mozzarella', 'albahaca', 'salsa de tomate', 'sal', 'pimienta negra', 'aceite de oliva'],
      precio: 680,
    },
    {
      id: 4,
      nombre: 'Sfincione',
      ingredientes: ['masa', 'tomate', 'cebolla', 'aceite de oliva', 'queso pecorino rallado', 'pan rallado', 'boquerones en aceite', 'oregano'],
      precio: 800,
    },
    {
      id: 5,
      nombre: 'Chicago Style',
      ingredientes: ['masa', 'muzzarella', 'queso provolone', 'chistorra', 'salsa de tomate', 'albahaca', 'aceite de oliva'],
      precio: 1000,
    },
    {
      id: 6,
      nombre: 'Mexicana',
      ingredientes: ['masa', 'ajo', 'carne picada', 'pimenton', 'pure de tomate', 'cebolla', 'aguacate', 'limon'],
      precio: 950,
    },
  ];
  //a) Las pizzas que tengan un id impar

  const idImpar = pizzas.filter((pizza) => pizza.id % 2 !== 0);
  console.log(idImpar);

  //b) ¿Hay alguna pizza que valga menos de $600?

  const valorMenorA600 = () => pizzas.forEach((pizza) => {
    if(pizza.precio < 600) {
        console.log(`La pizza ${pizza.nombre} tiene un precio menor a 600`);
    }
  });
  valorMenorA600();

  //c) Los nombres de todas las pizzas.

  const nombresPizzas = pizzas.map(({ nombre }) => nombre);
  console.log(nombresPizzas);

  //d) Los precios de las pizzas.

  const preciosPizzas = pizzas.map(({ precio }) => precio);
  console.log(preciosPizzas);

  //e) El nombre de cada pizza con su respectivo precio.

  const nombreYPrecio = () => pizzas.forEach((pizza) => console.log(`La pizza ${pizza.nombre} sale ${pizza.precio}`));
  nombreYPrecio();