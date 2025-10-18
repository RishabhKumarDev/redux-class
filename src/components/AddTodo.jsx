import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task" className="mr-2">
          Input Todo
          <input
            className="bg-slate-600 border-2 text-black"
            type="text"
            name="task"
            id="task"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </label>

        <button className="bg-black px-3 py-1 ">Add</button>
      </form>
    </>
  );
}

export default AddTodo;
