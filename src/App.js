import { useState } from "react"

const App = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleAddTodo = () => {
    // return when input is empty
    if (todo.trim() === "") return

    setTodos([...todos, todo])
    setTodo("") // Clear input after adding
  }

  return(
    <>
       <h1>Todo App</h1>

      <input
        placeholder="Enter a todo"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />

      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, id) => (
          <li key={id}>{todo}</li>
        ))}
      </ul>
    </>
  )
}

export default App