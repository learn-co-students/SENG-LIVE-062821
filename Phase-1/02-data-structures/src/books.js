const bookStore = {
    location: "Seattle",
    inventory: [
        {
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            price: 10,
            reviews: [{user_id: 1, content:'Good book, but not great for new coders'}],
            inventory: 10
        },
        {
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            price: 45,
            reviews: [{user_id: 15, content:'good way to learn JQuery'}],
            inventory: 2
        },
        {
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            price: 36,
            reviews: [{user_id: 25, content:'I disagree with everything in this book'}, {user_id: 250, content:'Only JS book anyone needs'}],
            inventory: 8
        },
        {
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            price: 25,
            reviews: [{user_id: 44, content:'Great intro to js book'}, {user_id: 350, content:'It really is the Definitive guide'}],
            inventory: 0
        },
        {
            title: 'You Don’t Know JS',
            author: 'David Flanagan',
            price: 6,
            reviews: [{user_id: 76, content:'You can find this for free online, no need to pay for it!'}],
            inventory: 7
        }

    ]
}



//1. Console.log title of the 2nd book
// console.log(bookStore.inventory[1].title)
// console.log(bookStore.inventory[2].reviews[1])
// console.log(bookStore.inventory[3].reorder = true)

// bookStore.inventory.forEach(element => {
//     if(element.inventory === 0){
//         element.reorder = true
//     }
// })

let filterArr = bookStore.inventory.filter(book => {
   return book.inventory === 0
}).map(book => {
    book.reorder = true 
    return book
})
console.log(filterArr)

