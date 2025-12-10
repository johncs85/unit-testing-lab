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
})
