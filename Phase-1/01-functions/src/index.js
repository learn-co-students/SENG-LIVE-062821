//What are variables and how do you define them?
//Containers that store values 
//Global Scope
const host = 'Rose'
let episode = 'Intro to JavaScript'

//How do you define functions?
// function podCastIntro(){
//     return `Welcome to episode one, how to use functions`
// }
//console.log(podCastIntro())
//console.log(`Welcome to episode one, how to use functions`)

const episodeIntro = function(day, episode){
    //Functional scope
    return `Welcome to episode ${day}, ${episode}`
}

const hostIntro = function(host){
    console.log('hello from host intro')
    return `Hello, I'm ${host}. Thank you for tuning into the Flatiron podcast`
}

//Functions as arguments
function playFullIntro(part1, part2, day, episode, host){
    console.log('hello from play Full intro')
    return `${part1(day, episode)}. ${part2(host)}`

}
// playFullIntro(episodeIntro, hostIntro, 'one', 'how to use functions', 'Rose')

//arrow functions 
// const welcomeGuestIntro = function(){
//     return 'Lets welcome our guest!'
// }
//Single line returns
const welcomeGuestIntro = () => 'Lets welcome our guest!'

const guestIntro = (name, info) => `Hello I'm ${name} and I'm a ${info}`

const payGuest = pay => `${pay} paid to guest`

//The call stack
function playEpisode(epIntro, hIntro, day, episode, host, guest, info, pay){

    playFullIntro(epIntro,hIntro, day, episode, host)
    console.log('done')
    welcomeGuestIntro()
    guestIntro(guest,info)
    payGuest(pay)
 
}


playEpisode(episodeIntro, hostIntro, 'one', 'how functions work', 'rose')



















//Scope review
//What's global scope
//What's functional scope
//block scope


'hi'