console.log("script running");

/* What we need to do here?
  1. Color changing based on user interaction - done
  2. Unhide an element at the bottom of the page
  3. Store which item was selected - done
  4. Do some logic/calculations on which answer should be shown
*/

// Access all the figures using the class
let pictures = document.querySelectorAll(".card-image");
//pictures.forEach((picture) => console.log(picture.id));

// Fill in the object
let quizValues = {
  color: ["blue", "green", "pink", "purple"],
  trait: ["blue", "green", "pink", "purple"],
  vacation: ["blue", "green", "pink", "purple"],
  house: ["blue", "green", "pink", "purple"],
  time: ["blue", "green", "pink", "purple"],
  food: ["blue", "green", "pink", "purple"],
  animal:["blue", "green", "pink", "purple"],
};
let quizValue = quizValues.color;
console.log("With .property", quizValue);
quizValue = quizValues["color"];
console.log(`With ["property"]`, quizValue);

// 'quizTaker' object here
let quizTaker = {
  blue: 0,
  green: 0,
  pink: 0,
  purple: 0,
};
let blueCount = quizTaker.blue;
console.log("With .property", blueCount);
blueCount = quizTaker["blue"];
console.log(`With ["property"]`, blueCount);
// console.log(quizTaker);
// quizTaker["extrovert"]++;
// console.log(quizTaker);

/* What behaviors do you want whenever we click on an question?
  1. Image Container to change color
  2. Assign value connected the result (i.e. logical) and store it somewhere
  3. To restrict user from choosing more than one, or be able to change their choice
  4. If it's the last question, display the user's result
*/
//winner function
//all if statements so it runs through all colors, places them into the array if more than 1 is winner 
function findWinner() {
  const highScore = Math.max(quizTaker.blue, quizTaker.green, quizTaker.pink, quizTaker.purple);
  const winners = [];
  if (quizTaker.blue === highScore) {
    winners.push("blue");
  }
  if (quizTaker.green === highScore) {
    winners.push("green");
  }
  if (quizTaker.pink === highScore) {
    winners.push("pink");
  }
  if (quizTaker.purple === highScore) {
    winners.push("purple");
  }
  console.log(winners);
  return winners;

}
// Make every image clickable!
pictures.forEach((picture) => {
  picture.addEventListener("click", (e) => {
    // Save the user's choice in a variable.
    let choice = picture.id.split("-");
    //console.log(picture.id);
    console.log(choice);

    // Change the background yellow
   // picture.classList.toggle("has-background-light");
  //  picture.classList.toggle("has-background-warning");


    // Increment the right personality trait
    let answer = quizValues[choice[0]][choice[1]];
    console.log(answer);

    quizTaker[answer]++;
    console.log(quizTaker);

    // Based answer total and links to according color page 
    if (choice[0] === "food" || choice[0] === "animal") {
      //quiz answer selector     
      const winners = findWinner();
      if (winners.length === 1) {
        //checks through colors IF there is 1 winner
        if (winners[0] === "blue") {
          console.log("blue")
          changePage("blue");
        } else if (winners[0] === "green") {
          console.log("green")
          changePage("green");
        } else if (winners[0] === "pink") {
          changePage("pink");
        } else {
          console.log("purple")
          changePage("purple");
        }
      } else {
        //for more than one winner 
        isTie(winners)
      }
    }
  });
});

//store elements
let colorChoice = document.querySelector("#color-choice");
let traitChoice = document.querySelector("#trait-choice");
let vacationChoice = document.querySelector("#vacation-choice");
let houseChoice = document.querySelector("#house-choice");
let timeChoice = document.querySelector("#time-choice");
let foodChoice = document.querySelector("#food-choice");
let animalChoice = document.querySelector("#animal-choice");
let quizButton = document.querySelector("#quizButton");


//HIDDEN ELENTS hides element and moves on tp the next question
colorChoice.addEventListener("click", (e) => {
  colorChoice.classList.add("hidden");
  traitChoice.classList.remove("hidden");
});

traitChoice.addEventListener("click", (e) => {
  traitChoice.classList.add("hidden");
  vacationChoice.classList.remove("hidden");
});

vacationChoice.addEventListener("click", (e) => {
  vacationChoice.classList.add("hidden");
  houseChoice.classList.remove("hidden");
});

houseChoice.addEventListener("click", (e) => {
  houseChoice.classList.add("hidden");
  timeChoice.classList.remove("hidden");
});
timeChoice.addEventListener("click", (e) => {
  timeChoice.classList.add("hidden");
  foodChoice.classList.remove("hidden");
});
foodChoice.addEventListener("click", (e) => {
  foodChoice.classList.add("hidden");
});


//This is deterining if there is a tie in quizTaker
function isTie(winners) {
  animalChoice.classList.remove("hidden");
  console.log("isTie", winners);
  const blue = document.querySelector("#reveal-blue");
  const green = document.querySelector("#reveal-green");
  const pink = document.querySelector("#reveal-pink");
  const purple = document.querySelector("#reveal-purple");

  // Reveal blue if it was one of the tied winners
  if (winners.includes("blue")) {
    console.log("revealing blue")
    blue.classList.remove("hidden");
  }
  if (winners.includes("green")) {
    console.log("revealing green")

    green.classList.remove("hidden");
  }
  if (winners.includes("pink")) {
    pink.classList.remove("hidden");
  }
  if (winners.includes("purple")) {
    purple.classList.remove("hidden");
  }

  // if (quizTaker.blue === quizTaker.green) {
  //   //show the tied options
  //   blue.classList.remove("hidden");
  //   green.classList.remove("hidden");
  // } else if (quizTaker.blue === quizTaker.pink) {
  //   blue.classList.remove("hidden");
  //   pink.classList.remove("hidden");
  // } else if (quizTaker.blue === quizTaker.purple) {
  //   blue.classList.remove("hidden");
  //   purple.classList.remove("hidden");
  // } else if (quizTaker.green === quizTaker.pink) {
  //   green.classList.remove("hidden");
  //   pink.classList.remove("hidden");
  // } else if (quizTaker.green === quizTaker.purple) {
  //   green.classList.remove("hidden");
  //   purple.classList.remove("hidden");
  // } else if (quizTaker.pink === quizTaker.purple) {
  //   purple.classList.remove("hidden");
  //   pink.classList.remove("hidden");
  // } else if (quizTaker.blue === quizTaker.green && quizTaker.blue === quiz.Taker.pink) {
  //   blue.classList.remove("hidden");
  //   green.classList.remove("hidden");
  //   pink.classList.remove("hidden");
  // } else if (quizTaker.blue === quizTaker.green && quizTaker.blue === quiz.Taker.purple) {
  //   blue.classList.remove("hidden");
  //   green.classList.remove("hidden");
  //   purple.classList.remove("hidden");
  // } else if (quizTaker.pink === quizTaker.green && quizTaker.pink === quiz.Taker.purple) {
  //   green.classList.remove("hidden");
  //   pink.classList.remove("hidden");
  //   purple.classList.remove("hidden");
  // }
}
//personality is var name for the result color
// linking to color recommendation pages 
function changePage(personality) {
  console.log(personality);
  if (personality === "blue") {
    window.location.replace("blue.html");
  } else if (personality === "green") {
    window.location.replace("green.html");
  } else if (personality === "pink") {
    window.location.replace("pink.html");
  } else {
    window.location.replace("purple.html");
  }
};