const name = 'Mustafa';
const para = document.createElement('p');

const phonebook = [
  { name : 'Chris', number : '1549' },
  { name : 'Li Kang', number : '9634' },
  { name : 'Anne', number : '9065' },
  { name : 'Francesca', number : '3001' },
  { name : 'Mustafa', number : '6888' },
  { name : 'Tina', number : '4312' },
  { name : 'Bert', number : '7780' },
  { name : 'Jada', number : '2282' },
];

// Buscar en el phonebook el nombre proporcionado
for (const entry of phonebook) {
  // Verificar si el nombre actual coincide con el nombre buscado
  if (entry.name === name) {
    // Mostrar el nombre y número de teléfono en el párrafo
    para.textContent = `${entry.name}: ${entry.number}`;
    // Salir del bucle una vez que se ha encontrado el nombre
    break;
  }
}

// Agregar el párrafo al elemento con la clase 'preview'
const section = document.querySelector('section.preview');
section.appendChild(para);
