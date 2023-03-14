import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

test("update scoop subtotal when scoops change.", async () => {
  const user = userEvent.setup();
  render(<Options optionType="scoops" />);

  const scoopsSubtotal = screen.getByText("Scoops total: $", { exact: false }); // exact: false 는 부분 일치하면 true
  expect(scoopsSubtotal).toHaveTextContent("0.00");

  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  await user.clear(vanillaInput); // 입력창에 있는것 clear
  await user.type(vanillaInput, "1"); // 입력창에 1 입력
  expect(scoopsSubtotal).toHaveTextContent("2.00");

  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  await user.clear(chocolateInput);
  await user.type(chocolateInput, "2");
  expect(scoopsSubtotal).toHaveTextContent("6.00");
});

test("update topping subtotal when topping change.", async () => {
  const user = userEvent.setup();
  render(<Options optionType="toppings" />);

  const toppingSubtotal = screen.getByText("toppings total: $", {
    exact: false,
  });
  expect(toppingSubtotal).toHaveTextContent("0.00");

  const mAndMCheckbox = await screen.findByRole("checkbox", {
    name: "M&Ms",
  });
  await user.click(mAndMCheckbox);
  expect(toppingSubtotal).toHaveTextContent("1.50");

  const hotFudgeCheckbox = await screen.findByRole("checkbox", {
    name: "Hot fudge",
  });
  await user.click(hotFudgeCheckbox);
  expect(toppingSubtotal).toHaveTextContent("3.00");
  await user.click(hotFudgeCheckbox);
  expect(toppingSubtotal).toHaveTextContent("1.50");
});
