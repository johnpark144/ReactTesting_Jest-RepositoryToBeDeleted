import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Button has correct initial color, and updates when clicked', () => {
  render(<App />);
  const colorBtn = screen.getByRole("button", { name: "Change to blue" }); // "Change to blue" 라는 버튼이 있는지
  expect(colorBtn).toHaveStyle(`background-color: red`)

  fireEvent.click(colorBtn); // 버튼 클릭 발생시
  expect(colorBtn).toHaveStyle(`background-color: blue`) // 파랑색으로 변경
  expect(colorBtn).toHaveTextContent('Change to red')
});

test('Initial conditions',() => {
  render(<App />);
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });
  expect(colorBtn).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
})