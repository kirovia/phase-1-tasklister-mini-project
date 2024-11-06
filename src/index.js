// document.addEventListener("DOMContentLoaded", () => {
  
  
// });


const form = document.getElementById('create-task-form');
const input = form.children[1];
const submit = form.children[2];
const list = document.getElementById('tasks');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newItem = document.createElement('li');
  const newX = document.createElement('button');
  newX.textContent = 'X';
  newItem.textContent = `${input.value}  `;
  list.append(newItem);
  newItem.append(newX);
  newX.addEventListener('click', () => newItem.remove());

})