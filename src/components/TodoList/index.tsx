import React, { useContext } from 'react';
import { Context as TodoContext } from '../../context/TodoContext';
import { deleteTodo } from '../../actions/TodoActions';

const TodoList: React.FC = () => {
  const {
    state: { todos },
    dispatch
  } = useContext(TodoContext);

  const deleteHandle = (id: string) => dispatch(deleteTodo(id)); 

  return todos.length > 0 ? (
    <div>
      <ul>
        { todos.map(({ id, title}) => (
          <li key={id}>
            { title } - <button onClick={ () => deleteHandle(id) }> deletar </button>
          </li>
        ))}
      </ul>

      <h5>Eu tenho {todos.length} { todos.length > 1 ? 'tarefas' : 'tarefa' }</h5>
    </div>
  ) : (
    <div>
      <h5>Sem tarefas</h5>
    </div>
  )
}

export default TodoList;