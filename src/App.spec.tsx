import { render } from "@testing-library/react";
import App from "./App";

test("verifyText", () => {
  const { getByText } = render(<App />);

  expect(getByText("hello world!")).toBeTruthy();
});
