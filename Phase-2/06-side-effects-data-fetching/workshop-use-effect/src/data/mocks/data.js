import { v4 as uuid } from "uuid";

export const dogs = {
  message: [
    "https://images.dog.ceo/breeds/terrier-norwich/n02094258_1003.jpg",
    "https://images.dog.ceo/breeds/airedale/n02096051_2204.jpg",
    "https://images.dog.ceo/breeds/bluetick/n02088632_4339.jpg",
    "https://images.dog.ceo/breeds/clumber/n02101556_3100.jpg",
    "https://images.dog.ceo/breeds/poodle-miniature/n02113712_8655.jpg",
    "https://images.dog.ceo/breeds/terrier-border/n02093754_4110.jpg",
    "https://images.dog.ceo/breeds/hound-english/n02089973_1076.jpg",
    "https://images.dog.ceo/breeds/borzoi/n02090622_6204.jpg",
  ],
  status: "success",
};

export const getCat = () => {
  const id = uuid();
  return {
    id: id,
    created_at: "2016-11-25T03:40:10.695Z",
    tags: ["metal", "sing"],
    url: `/cat/${id}`,
  };
};
