// question2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

// let  Friend = "Rayyan";
// console.log(`Hello ${Friend}, would you like to learn some Python today?`);



// question3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// let conv = "rayyan";
// console.log (conv.toUpperCase());
//  console.log( conv.toLowerCase());
//  console.log (conv.charAt(0).toUpperCase() + conv.slice(1));






// question4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

let famousPerson = "LeviAckerman"
let quote = "giveup your dreams and die."
console.log (`${famousPerson} once said : ${quote}`)




// question5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_Person= "Sir Zia Khan"
let myMessage = "you're fascinating, I admire you sir"
console.log (`My Message To ${famous_Person} : ${myMessage}`)



// question6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// let Name = "Omer"
// let Name2  = "Shafiq"

// console.log (`   ${Name} \n ${Name2} ` )





// question7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// console.log (4+4)
// console.log (12-4)
// console.log (4*2)
// console.log (16/2)





// question8
// You should create four lines that look like this: console.log(5 + 3)

// console.log(5 + 3)
// console.log(5 + 3)
// console.log(5 + 3)
// console.log(5 + 3)



// question9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

// let favNumber = 777

// console.log (`Rayyan Favourite Number Is ${favNumber}`)





// question10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//addition program

// let number = 2
// let  number2 = 3
// console.log(`${number} + ${number2}`)

//subtraction program

// let value = 3 
// let value2 = 1
// console.log(`${value} - ${value2}`);



// question11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

// let other  = ['Omer' , 'Ahmed' , 'Onais' , 'Anas' , 'Immad' ]

// console.log(other[0])
// console.log(other[1])
// console.log(other[2])
// console.log(other[3])
// console.log(other[4])



// question12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// let same = ['Omer' , 'Ahmed' , 'Onais' , 'Anas' , 'Immad' , ' Ahmed hashmi']

// for (let friend of same){
//     console.log (`Hello ${friend}, hope you're doing fine `);}






// question13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// let trans = ["Private jet" , "train" ,"sports car" , "uber" ]

// console.log(`I would like to travel in ${trans[0]}`)
// console.log(`I would like to travel with my friends in ${trans[1]}`)
// console.log(`I would like to travel  in  ${trans[2]}`)
// console.log(`I would like to go mall in ${trans[3]}`)






// question14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner./

// let ondinner = ["Ayan","Shaheer","Huzaifa"]

// for (let friend of ondinner){
//     console.log (`Hello ${friend}, hope you're doing fine, would you join me on dinner on weekend `);}




// question15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// let dinnersecond = ["Ayan","Shaheer","Huzaifa"]
// console.log (` \n ${dinnersecond[2]} will not be able to come  \n`)
// dinnersecond.splice(2,1)
// dinnersecond.push("Ali")
// for (let friend of dinnersecond){
//     console.log (`Hello ${friend}, hope you are doing fine, would you join me on dinner on weekend `);}




// question16
//  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

//  let bigger = ["Ayan","Shaheer", "Huzaifa"]
//  console.log (` \n ${bigger[2]} will not be able to come  \n`)
//  bigger.splice(2,1)
//  bigger.push("Ali")
// //   to add the guest in the begining of array
//  bigger.unshift("uzair")
//  //   to add the guest in the begining of array
//  bigger.push("Amir") 
//  for (let friend of bigger){
//      console.log (`Hello ${friend}, hope you're doing fine, would you join me on dinner on weekend `);}

//     console.log ("Hey guys, I found the bigger table so now I can invite you'll , happy dinner :)")

// question 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// let Shrinking = ["Ayan","Shaheer","Ali","uzair","Amir"]

// console.log ("Due to limited space we are inviting only few members")

// while (Shrinking.length > 2){
//     let uninvitedFriend = Shrinking.pop()
//     console.log (`sorry ${uninvitedFriend} you're not invited now`)}

// for (let invitedFriend of Shrinking){
//     console.log (`dear ${invitedFriend} , you're still invited `)
// }

// Shrinking.pop()
// Shrinking.pop()
// console.log (Shrinking)





// question 18
// Seeing the World: Think of at least five places in the world you’d like to visit.

// let locations = [ "newyork" , "lasvegas" , "tokyo" , "amastardam"]

// console.log(locations)
// locations.sort()
// console.log(locations)
// console.log(locations)

// locations.reverse()
// console.log(locations)
// console.log(locations)

// locations.reverse()
// console.log(locations)


// question 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let mySchoolFriendsIWantToInvite: string[] = ['Muddassir' , 'OmerKhan' , 'MaazAhmed' , 'Tariq' , 'Immad']


while (mySchoolFriendsIWantToInvite.length > 2){
    let uninvitedFriend = mySchoolFriendsIWantToInvite.pop()}
    let  countArray: string []= []

     
for (let  invitedFriend  of mySchoolFriendsIWantToInvite){
    countArray.push(invitedFriend)
    }
console.log(countArray.length)



// question 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// let countries: string [] = [ "America","London","tokyo","UK"]

// for (let language of countries){
//     console.log (language)
// }


// question 21
// Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// let  newUser = {
//     userName : "Rayyan" ,
//     email : 'Rayya068@gmail.com' ,
//     password : 5824973 ,
//     isAdmin : false
// };

// console.log(newUser)

//question 21
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// storing number in string array for error
// let error = ['Muddassir' , 123 , 'MaazAhmed' , 'Tariq' , 'Immad']

// let error = ['Muddassir' , 'MaazAhmed' , 'Tariq' , 'Immad']
// console.log (error)





// question 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let racingCar = 'Supraa';
// console.log("Is car == 'Supraaa'? I predict True.")
// console.log(racingCar == "Supraa")

// let bestFootballer = 'Ronaldo';
// console.log("Is bestFootballer == 'Ronaldo'? I predict True.")
//  console.log(bestFootballer == "Ronaldo")

// let mySibling = 'ALi';
// console.log("Is mySibling == 'Ali'? I predict True.") 
// console.log(mySibling == "Ali")

// let bike = 'yamahaR6';
// console.log("Is bike == 'yamahaR6'? I predict True.")
// console.log(bike ==  "yamahaR6")

// let city = 'karachi';
// console.log("Is city == 'karachi'? I predict True.")
// console.log(city == "karachi")

// let colour = 'yellow';
// console.log("Is favColor == 'yellow'? I predict True.")
//  console.log (colour == "yello")

// let favCountry = 'London';
// console.log("Is favCountry == 'London'? I predict True.")
//  console.log(favCountry == "london" )

// let playsta = "PS5"
// console.log("is playsta == 'ps5'? I  predict True.")
// console.log(playsta == "ps5")




// question 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// let num2 = 2
// console.log(num2 == 3)

// let string2 = '2'
// console.log(string2 == '2')

// let one = 1
// console.log(one != 1)

// let anotherOne = '1'
// console.log(anotherOne === '1' )

// console.log (11<12)
// console.log (11>12)
// console.log (11>=12)
// console.log (11<=12)

// let firstPerson = 'Rayyan'
// let secondPerson = 'omerIkram'
// if (firstPerson == 'o'){
//     console.log("no omer")
// }


// question 25;
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.


// let alienColor = ["green","yellow" , "red"]

// if (alienColor[0] == "green"){
//     console.log ("player earned 5 points")
// }

// let anotherAlienColor = "Red"

// if (anotherAlienColor == "green"){
//     console.log ("player earned 5 points")
// }





// question 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.


// let Color1 = ["green","yellow" , "red"]

// if (Color1[0] == "green"){
//     console.log ("player earned 5 points")
// }
// else {
//     console.log ("player earned 10 points")
// }

// let Color = "Red"


// if (Color == "green"){
//     console.log ("player earned 5 points")
// }
// else {
//     console.log ("player earned 10 points")
// }

// question 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.


// let gameAlienColor31 = "green"

// if (gameAlienColor31 == "green"){
//     console.log ("player earned 5 points")
// }
// else if (gameAlienColor31 == "yellow"){
//     console.log ("player earned 10 points")
// }
// else if (gameAlienColor31 == "red"){
//     console.log ("player earned 15 points")
// }

// let gameAlienColor32 = "yellow"

// if (gameAlienColor32 == "green"){
//     console.log ("player earned 5 points")
// }
// else if (gameAlienColor32 == "yellow"){
//     console.log ("player earned 10 points")
// }
// else if (gameAlienColor32 == "red"){
//     console.log ("player earned 15 points")
// }


// let gameAlienColor33 = "red"

// if (gameAlienColor33 == "green"){
//     console.log ("player earned 5 points")
// }
// else if (gameAlienColor33 == "yellow"){
//     console.log ("player earned 10 points")
// }
// else if (gameAlienColor33 == "red"){
//     console.log ("player earned 15 points")
// }


// questiom 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, 

// let person = 2

// if ( person < 2) {
//     console.log("person is baby")
// }
// else if ( person >= 2 && person <=4) {
//     console.log("person is toddler")
// }
// else if ( person >= 4 && person <=13) {
//     console.log("person is kid")
// }

// else if ( person >= 13 && person <=20) {
//     console.log("person is teenagers")
// }

// else if ( person >= 20 && person <=65) {
//     console.log("person is adult")
// }

// else if ( person >= 65) {
//     console.log("person is elder")
// }
// else {
//     console.log("your given value is wrong")
// }


// question 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// let favFruits = ['mango' , 'peach', 'pineapple' , 'banana', 'apple']

// for (let fruits of favFruits){

//     if (fruits == 'mango') {
//     console.log('You really like mangos!');
//     }

//     if (fruits == 'peach') {
//         console.log('You really like peach!');
//         }

//     if (fruits == 'pineapple') {
//         console.log('You really like pineapple!');
//         }

//     if (fruits == 'banana') {
//             console.log('You really like bananas!');
//             }
//     if (fruits == 'apple') {
//                 console.log('You really like apples!');
//                 }
// }


// question 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

// let namebox = ['omer' , 'onais' , 'talha' , 'rohan' , 'admin']

// for (let user of namebox){

//         if (user == 'admin') {
//         console.log('Hello admin, would you like to see a status report?');
//         break;
//         }
//         else if (user != 'admin'){
//         console.log(`Welcome ${user}, how are you`);
//         }}
        

// question 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// let namebox2 = ['omer' , 'abdulHadi' , 'muneeb' , 'Mustafa']

//     if (namebox2.length == 0 ) {
//     console.log('We need to find some users!');
//     }
//     else {
//     console.log(`we have some users`);
//     }

//     for (let user of namebox2){

//         if(namebox2.length != 0 ){
//             namebox2.pop()
//             namebox2.pop()
            
//         }}
//     console.log(namebox2)
//     console.log("array is now empty")


//question 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.



// let current_Users  = ["Ahmed" ,'Immad' , 'Anas' , 'Ahmedhashmi']
// let new_Users  = ["Ahmed" , 'Omer' , 'Sara' , 'Immad' ]


// for (let newUser of new_Users){
//     let usernameTaken = false;
//     for (let currentUser of current_Users) {
//             if (newUser.toLowerCase() === currentUser.toLowerCase()){
//             usernameTaken = true
//             break;
//             }}
// if (usernameTaken == true){
//     console.log (`${newUser} is taken`)
//                 }
// else{
//     console.log (`${newUser} is available`)
//  }       
        
        
// }


       

//question 33
//33.	Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

// let ordinalNumber = [1,2,3,4,5,6,7,8,9]
// for (let num of ordinalNumber) {
//     if (num == 1){
//         console.log('1st')
//     }
//     if (num == 2){
//         console.log('2nd')
//     }
//     if (num == 3){
//         console.log('3rd')
//     }
//     if (num == 4){
//         console.log('4th')
//     }
//     if (num == 5){
//         console.log('5th')
//     }
//     if (num == 6){
//         console.log('6th')
//     }
//     if (num == 7){
//         console.log('7th')
//     }
//     if (num == 8){
//         console.log('8th')
//     }
//     if (num == 9){
//         console.log('9th')
//     }
// }

//question 34
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

// let myTypeOfPizza : string[] = [  'arabian pizza' , 'cheesy delight pizza' , 'extra creamy pizza']

// for (let pizza of myTypeOfPizza) {
//     console.log(`${pizza} would you like pizza`)
// }


//question 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

// let Animal = ["cat" , 'dog' , 'rabbit' ] 
// let comChar = ["nails" , "ears" , 'nose' , 'teeth']


// for (let animal of Animal){
//     console.log(`A ${animal} would be a great pet`)
// }

// console.log(`they all have the same ${comChar[0]}, ${comChar[1]} and ${comChar[2]}  `)


//question 36
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

// function make_shirt  (text: string  , size: number)  {
//     console.log(`${text} - ${size}`);
// }

// make_shirt("rayyan", 11)
// make_shirt("ayan" , 13)



//question 37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// const size = ["large",'medium'] 
// function largeShirt (msg:string,  size:string )  {
//     if (size == "medium" || size == "large" ){
//         console.log (`${msg} size : ${size}`)
//     }
//     else {
//         console.log (`${msg} size : S,XL`)
//     }
// }
// largeShirt( " I love TypeScript" , "10")






//question 38
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

// function describe_City  (city: string , country? : string) {
//     console.log (`${city} is in ${country}`)
// }

// describe_City ("Lahore" , "Pakistan")
// describe_City ("UK")
// describe_City ("Delhi" , "South Korea")



//question 39
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: "Lahore, Pakistan"



// function cityCountry  (city: string  , country : string)  {
//     console.log (`"${city},${country}"`)
// }

// cityCountry ("Lahore" , "Pakistan")
// cityCountry ("London","UL")
// cityCountry ("Delhi" , "India")





//question 40
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

// interface artistswAlbums { 
//     artists: string;
//     albums: string;
    
// };
// function AlbumDetails  (artists: string, albums: string, ): artistswAlbums  {
//     let albumDetails: artistswAlbums = { artists, albums, };
//     return albumDetails;
// };
// let album1 = AlbumDetails("The Weeknd", "Starboy" );
// let album2 = AlbumDetails("", "Apocalypse" );
// let album3 = AlbumDetails("Anuv Jain", "Barishien");
// console.log(album1);
// console.log(album2);
// console.log(album3);

//question 41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


// let magicians = [ 'Jhon' , 'AMIR' , 'The Founders'] 

// function showMagicians  ()  {
//     for (let magician of magicians){
//         console.log (magician)
//     }
// }
// showMagicians()


//question42
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


let magiciansCopy:string [] =  ['Jhon' , 'AMIR' , 'The Founders' ,] 


function makeGreat  ()  {

        for (let magicians = 0 ; magicians < magiciansCopy.length; magicians++ ){
            magiciansCopy[magicians] = " the great "  + magiciansCopy[magicians] 
        }

        for (let magician of magiciansCopy){
            console.log (magician)
           
        }
    }
makeGreat()







//question43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


function show_Magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
      console.log(magician);
    });
  }
  
  function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
  }
  
  // Example usage
  const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  
  const greatMagicianNames: string[] = make_great([...magicianNames]);
  show_Magicians(magicianNames);
  show_Magicians(greatMagicianNames);
  






//question44 
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


let makeSandwich = (sandwich: string[]) => {
    return console.log (`Items Customer want in sandwich are ${sandwich} `)
}

makeSandwich(["chicken sandwich "])
makeSandwich(["beef sandwhich"])



//question45
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

interface details {
    manufacturer : string,
    modelName : string 
    numberPlate? : number
    color? : string 
}

// let carDetails = (manufacturer:string , modelName:string , numberPlate?: number , color? : string ) => { 
//     let showDetails: details = {
//     manufacturer, modelName
//     } 
// if (numberPlate !== undefined)
// {
//     showDetails.numberPlate = numberPlate
// }
// if (color !== undefined){
//     showDetails.color = color
// }
//     return showDetails
// }

// let car1Detail = carDetails("toyota" , " Corrola", 2424, 'yellow')
// let car2Detail = carDetails("Honda" , "Civic" , 4040 , 'black')
// let car3Detail =carDetails("Toyota" , "Camry" , 3030 , "maroon")
// let car4Detail =carDetails("Honda" , "Accord" , 8989 , "white")
// let car5Detail =carDetails("BMW" , "X3")


// console.log (car1Detail)
// console.log (car2Detail)
// console.log (car3Detail)
// console.log (car4Detail)
// console.log (car5Detail)


