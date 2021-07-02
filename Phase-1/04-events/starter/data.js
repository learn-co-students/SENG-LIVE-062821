const bookStore = {
  location: "Seattle",
  address:'333 st ne Seattle wa 99999',
  number: '(999)-999-9999',
  name: 'Coding Books',
  hours: 'Monday - Friday 9am - 6pm',
  inventory: [
      {
          title: 'Eloquent JavaScript: A Modern Introduction to Programming',
          author: 'Marjin Haverbeke',
          price: 10,
          reviews: [{user_id: 1, content:'Good book, but not great for new coders'}],
          inventory: 10,
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
          
      },
      {
          title: 'JavaScript & JQuery: Interactive Front-End Web Development',
          author: 'Jon Duckett',
          price: 45,
          reviews: [{user_id: 15, content:'good way to learn JQuery'}],
          inventory: 2,
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
      },
      {
          title: 'JavaScript: The Good Parts',
          author: 'Douglas Crockford',
          price: 36,
          reviews: [{user_id: 25, content:'I disagree with everything in this book'}, {user_id: 250, content:'Only JS book anyone needs'}],
          inventory: 8,
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      },
      {
          title: 'JavaScript: The Definitive Guide',
          author: 'David Flanagan',
          price: 25,
          reviews: [{user_id: 44, content:'Great intro to js book'}, {user_id: 350, content:'It really is the Definitive guide'}],
          inventory: 0,
          image_url: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
          
      },
      {
          title: 'You Don’t Know JS',
          author: 'David Flanagan',
          price: 6,
          reviews: [{user_id: 76, content:'You can find this for free online, no need to pay for it!'}],
          inventory: 7,
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
      }

  ]
}