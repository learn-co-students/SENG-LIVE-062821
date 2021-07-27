import { render, screen, act } from "@testing-library/react";
import App from "../exercise/04";
// import App from "../solution/04";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe("Exercise 04", () => {
  test("displays the current time on render", () => {
    render(<App />);

    expect(screen.queryByText(new Date().toString())).toBeInTheDocument();
  });

  test("updates the time every second", () => {
    render(<App />);

    expect(screen.queryByText(new Date().toString())).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.queryByText(new Date().toString())).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.queryByText(new Date().toString())).toBeInTheDocument();
  });

  test("clears the interval when the Clock component is unmounted", () => {
    const { unmount } = render(<App />);
    unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
