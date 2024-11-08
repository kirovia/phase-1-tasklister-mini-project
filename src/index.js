// document.addEventListener("DOMContentLoaded", () => {
  
  
// });


const form = document.getElementById('create-task-form');
const input = form.children[1];
const submit = form.children[2];
const list = document.getElementById('tasks');
const colors = document.getElementById('select');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newItem = document.createElement('li');
  const newX = document.createElement('button');
  newX.textContent = 'X';
  newItem.textContent = `${input.value}  `;
  newItem.style.color = colors.value;
  newItem.append(newX);

  switch (colors.value) {
    case 'red':
      list.prepend(newItem);
      break;
    case 'green':
      list.append(newItem);
      break;
    default:
      alert('error');
      break;
  }

  newX.addEventListener('click', () => newItem.remove());
})