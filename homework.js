// All answers consists of incoherent rambling commented throught the code.



// // Episode 1 = true since scenario is global
// const scenario = {
//      murderer: 'Miss Scarlet',
//      room: 'Library',
//      weapon: 'Rope'
//    };
   
//    const declareMurderer = function() {
//      return `The murderer is ${scenario.murderer}.`;
//    }
   
//    const verdict = declareMurderer();
//    console.log(verdict);
   
// // Episode 2 false since const cannot be changed
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// // Episode 3 only the first will work
// let murderer = 'Professor Plum';

// const declareMurderer = function() { 
//   let murderer = 'Mrs. Peacock'; // the murderer is changed here and then returned
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict); // true

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict); // false as murderer is scoped in the function 

// // ^^ second one wrong.




// // Episode 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard'; // so far so good
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`; // will return scarlet, plum and mustard
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`); // will return peacock

// // Episode 5
// const scenario = {
//      murderer: 'Miss Scarlet',
//      room: 'Kitchen',
//      weapon: 'Candle Stick'
//    };
   
//    const changeWeapon = function(newWeapon) {
//      scenario.weapon = newWeapon;
//    }
   
//    const declareWeapon = function() {
//      return `The weapon is the ${scenario.weapon}.`; // weapon is candle stick as the change weapon function has not been called. No it's not. It was outside of the brackets.
//    }
   
//    changeWeapon('Revolver');
//    const verdict = declareWeapon(); // weapon is now reveolver
//    console.log(verdict);
   
// // Episode 6
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//     murderer = 'Mr. Green';

//     const plotTwist = function() {
//     murderer = 'Mrs. White';
//     }

//     plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`; // murderer is colenel mustard.
// }

// changeMurderer();
// const verdict = declareMurderer(); // murderer is ms white
// console.log(verdict);

// // Episode 7
// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`; // murdere is plum
// }

// changeMurderer();
// const verdict = declareMurderer(); // murderer is now mustard. Incorrect! The murderer is mr green.
// console.log(verdict);

// // Episode 8
// const scenario = {
//      murderer: 'Mrs. Peacock',
//      room: 'Conservatory',
//      weapon: 'Lead Pipe'
//    };
   
//    const changeScenario = function() {
//      scenario.murderer = 'Mrs. Peacock';
//      scenario.room = 'Dining Room';
   
//      const plotTwist = function(room) {
//        if (scenario.room === room) {
//          scenario.murderer = 'Colonel Mustard';
//        }
   
//        const unexpectedOutcome = function(murderer) {
//          if (scenario.murderer === murderer) {
//            scenario.weapon = 'Candle Stick';
//          }
//        }
   
//        unexpectedOutcome('Colonel Mustard'); // new M
//      }
   
//      plotTwist('Dining Room');
//    }
   
//    const declareWeapon = function() {
//      return `The weapon is ${scenario.weapon}.`
//    }
   
//    changeScenario();
//    const verdict = declareWeapon(); // ms peacock. -- Hilarious. Not even the right question, however candle stick does make sense 
//    console.log(verdict);
   
// // Episode 9
// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer(); // peacock. Wrong. Plum - assuming as the murderer is changed within a for loop and not globally?
// console.log(verdict);
