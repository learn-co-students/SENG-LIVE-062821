//Lets make an app to track orders at our bakery Flatiron Cakes!

const bakery = {
    store:'FlatironCakes',
    location: 'Seattle',
    orders:[
        {
            id: 13,
            flavor: 'Vanilla',
            size: '6" cake',
            amount: 1,
            price: 40.00,
            ingredients: ["buttermilk", " vanilla extract", "eggs", "sugar", "butter", "baking soda", "baking powder", "flour"]
        },
        {
            id: 14,
            flavor: 'Raspberry Cardamon Rose',
            size: '9" cake',
            amount: 1,
            price: 50.00,
            ingredients: ["cardamon", "rose water", "buttermilk", " vanilla extract", "eggs", "sugar", "butter", "baking soda", "baking powder", "flour"]
        },
        {
            id: 15,
            flavor: 'Pink Champagne',
            size: 'cup cake',
            amount: 25,
            price: 37.5,
            ingredients: ["Andre Blush Champagne", "buttermilk", " vanilla extract", "eggs", "sugar", "butter", "baking soda", "baking powder", "flour"]
        },
        {
            id: 1,
            flavor: 'Earl Grey',
            size: 'cup cake',
            amount: 12,
            price: 18.00,
            ingredients: ["earl grey", "buttermilk", " vanilla extract", "eggs", "sugar", "butter", "baking soda", "baking powder", "flour"]
        }
    ]
}

// Objects -----------------------------------
//Create 
//how to create objects
    let obj = {
        name:'rose',
        age: 9
    }
// Read Values
    console.log(bakery.store)
    console.log(bakery["store"])
    console.log(Object.keys(bakery))
    console.log(Object.values(bakery))
    console.log(Object.entries(bakery))

//Update properties (key:value) 
//add a property
    bakery.address = '999 9th Seattle Wa 9999999'
    bakery["address"] = '999 9th Seattle Wa 9999999'

//update a property
    bakery.store = 'FlatironBakes'  

//remove property 
    delete bakery.address


//Arrays-----------------------------
//Create arrays
    let arr = [1,2,3]

//Read elements
    // console.log(bakery.orders[0].ingredients[0])

//Update elements
    //add elements
    //remove elements
    let cakeObj =    {
        id: 22,
        flavor: 'Vanilla',
        size: '6" cake',
        amount: 4,
        price: 40.00,
        ingredients: ["buttermilk", " vanilla extract", "eggs", "sugar", "butter", "baking soda", "baking powder", "flour"]
    }
    bakery.orders.push(cakeObj)
    bakery.orders.pop()
    //shift
    //unshift
    //slice
    //splice
    //bakery.orders[8] = 'hi'
    // console.log(bakery)

//Loop Through Array 
function loopThroughArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}
//loopThroughArray(bakery.orders)


//forEach ------------------------------------
//Loops through every element in the array
//performs the function passed as a callback on every element 
//returns undefined 
    bakery.orders.forEach((cakeOrder) => console.log(cakeOrder.price))

    let forEachArray = bakery.orders.forEach(cakeOrder => console.log(cakeOrder.price))   
    console.log(forEachArray)
//map -------------------------------------
//Loops through every element in the array, 
//performs the function passed as a callback on every element and transforms that element
//returns a new array of transformed elements
  let bakeryArr =  bakery.orders.map(cakeOrder => {
      console.log(cakeOrder)
      cakeOrder.price = Math.floor(cakeOrder.price/2)
        return cakeOrder
  })
  
  console.log(bakeryArr)

//filter/find-------------------------------
//Loops through every element in the array, 
//performs the function passed as a callback on every element and returns true or false
//returns a new array of all the elements that returned true
//find will return the first element that returns true
    let filterBooksArray = bakery.orders.filter(cakeOrder => {
        return cakeOrder.price < 40
    })

    console.log(filterBooksArray)












    

//Warmup---------------
// const firstFunction = () =>{
//     return 1+1
// }

// function secondFunction(cb){
//     console.log(cb)
//     return cb()
// }

