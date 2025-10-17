import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleIsDone } from "../features/todos/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-3xl  text-rose-500 underline decoration-wavy">
        Todo
      </div>
      <ul className=" mt-3">
        {todos.map((todo, i) => (
          <li
            style={{ background: todo.isDone ? "green" : "red" }}
            key={i}
            className=" w-fit m-auto p-3 mt-2 text-black"
          >
            {todo.task}
            <button
              className="bg-black p-2 text-white m-2"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              delete
            </button>
            <button
              className="bg-black p-2 text-white m-2"
              onClick={() => dispatch(toggleIsDone(todo.id))}
            >
              {todo.isDone ? "un done" : "done"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
