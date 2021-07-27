import { render, screen } from "@testing-library/react";
import { server } from "../data/mocks/server";
import App from "../exercise/01";
// import App from "../solution/01.extra-1";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Exercise 01 - Extra Credit", () => {
  test("displays dog images after fetching, without clicking a button", async () => {
    render(<App />);

    const images = await screen.findAllByAltText(
      "A random dog from the internet"
    );

    expect(images).toHaveLength(8);
  });

  test("displays a loading status before the images are fetched", async () => {
    render(<App />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    const images = await screen.findAllByAltText(
      "A random dog from the internet"
    );

    expect(images).toHaveLength(8);
    expect(screen.queryByText("Loading...")).toBe(null);
  });
});
