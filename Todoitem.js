import React from 'react';

const Todoitem = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxClick}
      />
      <span>{todo.text}</span>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  );
};

export default Todoitem;
