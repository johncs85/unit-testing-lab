import { render, fireEvent} from '@testing-library/react'
import App from './App'

describe("Todo App", () => {
  test("renders input and Add Todo button", () => {
    const app = render(<App />)

    const input = app.getByPlaceholderText("Enter a todo")
    const button = app.getByText("Add Todo")

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  test("todo list starts empty", () => {
    const app = render(<App />)

    const todo = app.queryByRole("listitem")
    expect(todo).toBeNull()
  })

   test("clicking button adds a todo to the todo list", () => {
    const app = render(<App />)

    const input = app.getByPlaceholderText("Enter a todo")
    const button = app.getByText("Add Todo")

    fireEvent.change(input, { target: { value: "Take a Nap!" } })
    fireEvent.click(button)

    const todo = app.getByText("Take a Nap!")
    expect(todo).toBeInTheDocument()
  })

})
