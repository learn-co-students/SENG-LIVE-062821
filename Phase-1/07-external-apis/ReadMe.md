# SWBAT
- [] Explain what web APIs are
- [] Read API documentation 
- [] Understand the difference between public and private apis
- [] Implement requests to a external API using key 

## What is a web API(Application Programming Interfaces)
![dzone.com](https://dz2cdn1.dzone.com/storage/temp/9836586-screen-shot-2018-07-25-at-35127-pm.png)

It's right in the name, web APIs are the way we interface with services, code and data provided by other parties. They allow us to develope complex programs and applications by providing simpler syntax for complex code or by providing data. 

Google maps, allows us to add map and location functionality to our applications. We no longer need to build this kind of functionality from scratch, Google has taken care of that for us in their api. Instead we can use the provided methods that allow us to call on their code and retrieve complex map data.  
![express.co.uk](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWZdL-vnQcd0tNdB1dLZeLjxQlp_GKjJMl3DSUVzmAqzBWmgTaVFOTxGGS7NFbWucSXI&usqp=CAU)

## Tips for Reading the Docs
* First go through the summary or overview
  * this will give you an idea of what this endpoint or method is trying to accomplish
  * it will likely also explain what the result of calling the endpoint/method will be (i.e you can expect an array back or it returns a new object etc.)
* Review the syntax
  * how do i call this method/endpoint?
  * what arguments is it expecting, are they optional?
* Look for examples
  * Examples are a great way to get an understanding of you're going use the endpoint or method
  * often times it is helpful to walk through the example and see if you can explain what is happening
  * It can also be useful to copy the example and use that as a launching point for your own code.
* Check for deprecation
  * Make sure that the method or api you are using is still valid.
  * Api endpoints and methods often get deprecated by the maintaners of the api. THis means they are not continuing work oon it and there
    may be security vulnerabilities.

## Making Requests
Lets focus on apis that provide data.
A request can be single fetch call or something a bit more complicated requiring signing up for an api key. 
[Pokmeon API](https://pokeapi.co/)

This pokemon api is pretty straight forward. It provides Read only JSON data on pokemon.To get that data we can make a standard fetch call.

```
fetch(https://pokeapi.co/api/v2/pokemon/ditto)
.then(res => res.json)
.then(console.log)
```

More complex apis may require an api key. 
For any of the google apis, you'll need to take a deep dive into their documentation to find out how to make requests. 
[Youtube](https://developers.google.com/youtube/v3/getting-started)

To get video data form the youtube api we will need to follow a few steps. 
- have a google account
- Create a project using the Google Developers console and obtain authorization credentials (API key)
- Register YouTube Data API as a service for your project
- Build a request using your API key

> NOTE: DO NOT PUSH YOUR KEYS TO github 
> This is a big security risk, remove your keys from your code before pushing up
[How to hide your keys](https://betterprogramming.pub/how-to-hide-your-api-keys-c2b952bc07e6)
```
const API_KEY = 'your key here'
const search = 'cute cats'
 fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${search}&type=video&key=${API_KEY}`)
    .then(res => res.json())
    .then(console.log)
```


### Resources 
