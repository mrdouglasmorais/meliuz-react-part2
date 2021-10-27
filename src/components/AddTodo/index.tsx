import React, { useState, FormEvent } from "react";

const AddTodo: React.FC = () => {
  const [todo, setTodo] = useState<string[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="To do entry"
          onChange={(e) => setTodo([ ...todo, e.target.value ])}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddTodo;