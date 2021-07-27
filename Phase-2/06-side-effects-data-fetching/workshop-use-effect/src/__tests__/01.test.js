import { render, screen } from "@testing-library/react";
import { server } from "../data/mocks/server";
import App from "../exercise/01";
// import App from "../solution/01";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Exercise 01", () => {
  test("displays dog images after fetching, without clicking a button", async () => {
    render(<App />);

    const images = await screen.findAllByAltText(
      "A random dog from the internet"
    );

    expect(images).toHaveLength(8);
  });
});
