import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList(props) {
  TodosList.propTypes = {
    todos: PropTypes.string.isRequired,
  };
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodosList;
