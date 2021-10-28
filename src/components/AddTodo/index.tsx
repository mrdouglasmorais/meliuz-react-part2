import React, { FormEvent, useContext, useRef } from "react";
import { Context as TodoContext } from '../../context/TodoContext';
import { addTodo } from '../../actions/TodoActions';

const AddTodo: React.FC = () => {
  const { dispatch } = useContext(TodoContext)
  const textInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue = textInput.current!.value;
    
    if(inputValue.trim() === ''){
      return;
    }
    
    dispatch(
      addTodo({
        id: new Date().getTime().toString(),
        title: textInput.current!.value,
        active: true
      })
    );

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="To do entry"
          ref={textInput}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddTodo;