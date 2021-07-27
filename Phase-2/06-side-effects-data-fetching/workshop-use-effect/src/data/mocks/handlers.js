import { rest } from "msw";
import { dogs, getCat } from "./data";

export const handlers = [
  rest.get("https://dog.ceo/api/breeds/image/random/8", (req, res, ctx) => {
    return res(ctx.json(dogs));
  }),
  rest.get("https://cataas.com/cat/says/:tag", (req, res, ctx) => {
    return res(ctx.json(getCat()));
  }),
];
