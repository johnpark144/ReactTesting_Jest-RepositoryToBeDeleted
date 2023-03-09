import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);  // render 는 인자로 받은 컴포넌트를 가상 Dom에 생성
  const linkElement = screen.getByText("Learn React"); // screen.getByText는 텍스트를 기반으로 요소를 찾음 (Regular expression 혹은 문자열로)
  expect(linkElement).toBeInTheDocument(); // 성공과 실패를 확인하는 단언(Assertion)부분. // .toBeInTheDocument 매쳐(Matcher)는 단언(Assertion)부분의 타입(요소가 문서에 있는지)
});
