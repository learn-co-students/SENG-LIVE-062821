import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { server } from "../data/mocks/server";
import App from "../exercise/03";
// import App from "../solution/03";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Exercise 03", () => {
  test("displays cat image after fetching", async () => {
    render(<App />);

    // find the image
    expect(await screen.findByAltText(/a cat saying/i)).toBeInTheDocument();
  });

  test("displays a new cat image after the form is submitted", async () => {
    render(<App />);

    // get the first displayed image
    const img = await screen.findByAltText(/a cat saying/i);

    // save the src since we're checking later if it changes
    const src = img.src;

    // update the text state
    fireEvent.change(screen.getByLabelText(/text/i), {
      target: { value: "hi there" },
    });

    // submit the form
    fireEvent.click(screen.getByText(/update text/i));

    await waitFor(() => {
      // check if the URL has changed
      expect(img.src).not.toBe(src);
    });
  });

  test("displays a new cat image after the dropdown is changed", async () => {
    render(<App />);

    // get the first displayed image
    const img = await screen.findByAltText(/a cat saying/i);

    // save the src since we're checking later if it changes
    const src = img.src;

    // update the text state
    fireEvent.change(screen.getByLabelText(/filter/i), {
      target: { value: "paint" },
    });

    await waitFor(() => {
      // check if the URL has changed
      expect(img.src).not.toBe(src);
    });
  });
});
