const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class Person {
  //passing in person so that you have all the key/value pairs of each person object
    constructor(person) {
      this.id = person.id;
      this.name = person.name;
      this.age = person.age;
      this.skillSet = person.skillSet;
      this.placeBorn = person.placeBorn;
      this.canThrowBall = false 
      this.canDodgeBall = false
      this.hasPaid = false
      this.isHealthy = false
      this.yearsExperience = false
      
      this.team = person.team;
      this.isPlayer = person.isPlayer;
    }
}
//creating a new instance of each person in the array 
const people = arrOfPeople.map(person => new Person(person));
console.log(people)

const listPeopleChoices = () => {
    //getting the ul thatst going to show the people
    const listElement = document.getElementById('people')
    //setting the innerHTML to blank
    listElement.innerHTML = '';
    //filter out the people that are not players
    //map to create a new array of each person that is a player
    people.filter(person => !person.isPlayer).map(person => {
        console.log("PERSON:",  person)
        //creating the li and button elements
        const li = document.createElement("li")
        const button = document.createElement("button")
        button.innerHTML = "Make Player"
        //adding a event listener that calls the makePlayer function on click
        //make player takes in the persons id and sets the isPlayer property to true for the person with that id
        button.addEventListener('click', function() {makePlayer(person.id)} )
        //making the button and a list item of the persons name and their skill set show up in the list
        li.appendChild(button)
        li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
        //appending the li to the list
        listElement.append(li)
    })
}

const listPlayerChoices = () => {
//list of the dodgeball players
    const listElement = document.getElementById('players')
    listElement.innerHTML = '';
    //filter by if the person is a player and not on a team yet 
    people.filter(person => person.isPlayer && !person.team).map(person => {
    //creating the list item and button elements
    const li = document.createElement("li")
    const buttonRed = document.createElement("button")
    //setting inner html of button
    buttonRed.innerHTML = "Make Red"
    //adding an event listener to the "Make Red" button
    //on click calls the makeRed() function and puts that person on the red team
    buttonRed.addEventListener('click', function() {makeRed(person.id)} )
    li.appendChild(buttonRed)
    
    //creating the blue button
    const buttonBlue = document.createElement("button")
    //setting the text
    buttonBlue.innerHTML = "Make Blue"
    //adding an event listener to the "Make Blue" button
    //on click calls the makeBlue() function and puts that person on the blue team
    buttonBlue.addEventListener('click', function() {makeBlue(person.id)} )
    li.appendChild(buttonBlue)
    
    //listing the persons name and skill set in the ul with the id 'players'
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
    })
}



const listBlueChoices = () => {
    const listElement = document.getElementById('blue')
    listElement.innerHTML = '';
    people.filter(person => person.isPlayer && person.team === 'blue').map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
    })
}

const makePlayer = (id) => {
    console.log(`li ${id} was clicked!`)
    people.find(person => person.id === id).isPlayer = true;
    listPeople();
}

const listRedChoices = () => {
    const listElement = document.getElementById('red')
    listElement.innerHTML = '';
    people.filter(person => person.isPlayer && person.team === 'red').map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
    })
} 

const makeRed = (id) => {
    console.log(`li ${id} was clicked!`)
    people.find(person => person.id === id).team = 'red';
    listPeople();
}

const makeBlue = (id) => {
    console.log(`li ${id} was clicked!`)
    people.find(person => person.id === id).team = 'blue';
    listPeople();
}

const makePerson = (id) => {
    console.log(`li ${id} was clicked!`)
    people.find(person => person.id === id).isPlayer = false;
    listPeople();
}

const listPeople = () => {
    listBlueChoices();
    listRedChoices();
    listPeopleChoices();
    listPlayerChoices();
}

listPeople();