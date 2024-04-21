// Definir un array con algunos elementos
const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];

// Crear un nuevo elemento de lista desordenada (<ul>)
const list = document.createElement('ul');

// Recorrer el array usando forEach para crear un elemento <li> para cada elemento del array
myArray.forEach(item => {
  // Crear un nuevo elemento de lista (<li>)
  const listItem = document.createElement('li');
  // Establecer el contenido de texto del elemento <li> como el elemento actual del array
  listItem.textContent = item;
  // Agregar el elemento <li> creado al elemento de lista desordenada (<ul>)
  list.appendChild(listItem);
});

// Seleccionar el elemento <section> con la clase 'preview'
const section = document.querySelector('section.preview');
// Agregar la lista creada al elemento <section> seleccionado
section.appendChild(list);
