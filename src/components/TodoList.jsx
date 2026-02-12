import React, { useOptimistic, useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [optimisticTodo, setOptimisticTodo] = useOptimistic(
    todo,
    (oldTod, newTod) => [...oldTod, { text: newTod, pending: true }],
  );
  async function handleTodo(formData) {
    const newTodo = formData.get("todo");
    setOptimisticTodo(newTodo);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setTodo((currentTodo) => [
      ...currentTodo,
      { text: newTodo, pending: false },
    ]);
  }
  return (
    <div>
      <form action={handleTodo}>
        <input type="text" name="todo" placeholder="Enter Todo" />
        <button>Add Todo</button>
      </form>
      <ul>
        {optimisticTodo.map((tod, index) => (
          <li key={index}>
            {tod.text} {tod.pending && <span>(Adding...)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
