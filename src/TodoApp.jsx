import { useState } from "react";
import { useGetTodoQuery } from "./store/apis/todosApi";

// import { useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
//   const { data: todos, isLoading } = useGetTodosQuery();
const [todoId, setTodoId] = useState(1);
const { data: todo, isLoading } = useGetTodoQuery(todoId);
// console.log(todo);

return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />

      <h4>isLoading:{isLoading ? "True" : "False"}</h4>

      <pre>...</pre>
      <button onClick={()=>setTodoId(todoId - 1)}>prev Todo</button>
      <button onClick={()=>setTodoId(todoId + 1)}>Next Todo</button>
      <br />
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.userId}>
            <strong>{todo.completed ? "DONE" : "pending"}</strong>
            { todo.title }
          </li>
        ))}
      </ul> */}
      {JSON.stringify(todo)}

    </>
  );
};
