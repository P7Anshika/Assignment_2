## run locally 
git clone 
npm i
npm i react-router-dom
port 3000
Todoitem :
 - display each to-do item with its respective tex
 - completion status checkbox
 - a remove button
accepts three props: todo, toggleComplete, and removeTodo.
-todo: Represents an individual todo object with id, text, and completed properties.
toggleComplete: Function to toggle the completion status of the todo item.
removeTodo: Function to remove the todo item from the list.
-handleCheckboxClick: Toggles the completion status (completed property) of the todo item when the checkbox is clicked.
It calls the toggleComplete function with the id of the todo item.
handleRemoveClick: Removes the todo item from the list when the remove button is clicked.
It calls the removeTodo function with the id of the todo item.
-The TodoItem component renders a div with class todo-item.
Inside the div, it renders:
An input element of type checkbox that reflects the completed status of the todo item (checked={todo.completed}).
A span element displaying the text of the todo item (todo.text).
A button labeled "Remove" that triggers the handleRemoveClick function when clicked.

Todolist :
 - responsible for managing the state of all to-do items
 - handling user interactions 
 - rendering the list of todo items dynamically
 - local storage is also used
It initializes state for todos and input text, fetches todos from localStorage on mount, manages todo operations, updates localStorage, and dynamically renders todo items.
-Imports and Setup: 
Imports the necessary React library for creating React components and using React hooks.
React hooks used for managing component state and side effects respectively.
Imports the TodoItem component which is responsible for rendering individual to-do items.

-useState: Declares two state variables:
 todos: An array that holds the list of to-do items.
 inputText: Holds the text entered in the input field for adding new to-dos.

-useEffect: Manages side effects in functional components.
 Fetching from Local Storage:
 The first useEffect runs once on component mount ([] dependency array ensures it runs only once).
It retrieves the stored todos from localStorage and initializes the todos state with them.
If no todos are stored (localStorage.getItem('todos') is null or undefined), it initializes todos as an empty array ([]).
Updating Local Storage:
The second useEffect runs whenever the todos state changes ([todos] dependency array).
It updates localStorage with the updated list of todos whenever todos state changes.

-addTodo: Adds a new todo to the todos array if inputText is not empty.

Creates a new todo object with an id, text (from inputText), and completed set to false.
Updates todos state with the new todo using spread syntax (...todos).
Clears inputText by setting it to an empty string ('').
Shows an alert if inputText is empty.
removeTodo: Removes a todo item from the todos array based on its id.

Uses Array.prototype.filter() to create a new array (updatedTodos) excluding the todo with the specified id.
Updates todos state with updatedTodos.
toggleComplete: Toggles the completed property of a todo item identified by its id.

Uses Array.prototype.map() to iterate through todos.
Updates the completed property of the todo with the matching id using object spread ({ ...todo, completed: !todo.completed }).
Updates todos state with updatedTodos.





