const todoList = [{
    name:'',
    dueDate: ''
  }, {
    name: '',
    dueDate: ''
  }];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  /* 
  todoList.forEach((todoObject, index) => {
     const {name, dueDate} = todoObject;
     const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
      " class = "js-delete-button">Delete</button>
      `;
    todoListHTML += html;
});
*/
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    //const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class = "delete-button js-delete-button">Delete</button>
      `;
    todoListHTML += html;
  
  }

document.querySelector('.js-todo-list').innerHTML = todoListHTML;

document.querySelectorAll('.js-delete-button')
.forEach ((deleteButton, index) => {
  deleteButton.addEventListener('click', () => {
 todoList.splice(index, 1);
  renderTodoList();
  })
});
}

document.querySelector('.js-add-button')
.addEventListener('click', () => {
  addTodoList();
});



function addTodoList() {
  const inputElem = document.querySelector('.js-todo-name');
  const name = inputElem.value;

const dueDateElem = document.querySelector('.js-date-input');
const dueDate = dueDateElem.value;
 
  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate});
      
    inputElem.value = '';

  renderTodoList();
}
