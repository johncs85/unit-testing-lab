import { render, fireEvent} from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  const app = render(<App />);
  const heading = app.getByRole('heading')
  expect(heading).toHaveTextContent('Hello, World!');
});
