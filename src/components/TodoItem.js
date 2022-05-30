import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  TodoItem.propTypes = {
    todo: PropTypes.string.isRequired,
  };
  const { todo: { title } } = props;
  return <li>{title}</li>;
}

export default TodoItem;
