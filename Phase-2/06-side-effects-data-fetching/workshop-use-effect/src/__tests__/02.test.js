import { render, screen, fireEvent } from "@testing-library/react";
import App from "../exercise/02";
// import App from "../solution/02";

beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
  localStorage.setItem.mockClear();
});

describe("Exercise 02", () => {
  test("uses localStorage.getItem('text') as the initial value for state", () => {
    localStorage.setItem("text", "testing123");

    render(<App />);

    const input = screen.getByLabelText(/text/i);
    expect(input.value).toBe("testing123");
  });

  test("uses localStorage.setItem('text', value) to persist state after update", async () => {
    render(<App />);

    const input = screen.getByLabelText(/text/i);

    fireEvent.change(input, {
      target: {
        value: "hello",
      },
    });

    expect(input.value).toBe("hello");
    expect(localStorage.setItem).toHaveBeenLastCalledWith("text", "hello");
  });
});
