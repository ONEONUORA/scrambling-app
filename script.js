// document.addEventListener("DOMContentLoaded", function () {
//   // Get references to HTML elements
//   const form = document.querySelector('form');
//   const textArea = document.querySelector('textarea');
//   const wordsToScrambleInput = document.querySelector('#wordsToScramble');
//   const resultDisplay = document.querySelector('#results');
//   const replacementInput = document.querySelector('#replacement');
//   const replacement = replacementInput.value;


//   // Define a function to scramble text
//   function scrambleText(text, wordsToScramble, replacement) {
//     // Split the text into words
//     const words = text.split(' ');

//     // Initialize variables to keep track of stats
//     let wordsScanned = 0;
//     let wordsMatched = 0;
//     let charactersScrambled = 0;

//     // Scramble the text
//     const scrambledText = words.map(word => {
//       wordsScanned++;

//       if (wordsToScramble.includes(word.toLowerCase())) {
//         wordsMatched++;

//         // Count the number of characters in the word
//         charactersScrambled += word.length;

//         // Replace the word with the replacement text
//         return replacement;
//       }

//       return word;
//     });

//     return {
//       scrambledText: scrambledText.join(' '),
//       stats: {
//         wordsScanned,
//         wordsMatched,
//         charactersScrambled,
//       },
//     };
//   }

//   // Handle form submission
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const inputText = textArea.value;
//     const wordsToScramble = wordsToScrambleInput.value.split(' ');
//     const replacement = '*'; // You can change the replacement character

//     if (inputText.trim() === "") {
//       alert("Please enter some text in the Enter Text.");
//       return; // Exit the function
//     }

//     const { scrambledText, stats } = scrambleText(inputText, wordsToScramble, replacement);

//     // Display the scrambled text and stats
//     resultDisplay.innerHTML = `Scrambled Text:<br>${scrambledText}<br><br>
//       Stats:<br>
//       - Words Scanned: ${stats.wordsScanned}<br>
//       - Words Matched: ${stats.wordsMatched}<br>
//       - Characters Scrambled: ${stats.charactersScrambled}`;

//     // You can customize the display of results based on your design.
//   });

//   // Get a reference to the refresh button by its ID
//   const refreshButton = document.getElementById("refreshButton");

//   // Add a click event listener to the refresh button
//   refreshButton.addEventListener("click", function () {
//     // Reload the page
//     location.reload();
//   });// Get references to HTML elements



// const form = document.querySelector('form');
// const textArea = document.querySelector('textarea');
// const wordsToScrambleInput = document.querySelector('#wordsToScramble');
// const resultDisplay = document.querySelector('#results');

// // Define a function to scramble text
// function scrambleText(text, wordsToScramble, replacement) {
//   // Record the start time
//   const startTime = performance.now();

//   // Split the text into words
//   const words = text.split(' ');

//   // Initialize variables to keep track of stats
//   let wordsScanned = 0;
//   let wordsMatched = 0;
//   let charactersScrambled = 0;

//   // Scramble the text
//   const scrambledText = words.map(word => {
//     wordsScanned++;

//     if (wordsToScramble.includes(word.toLowerCase())) {
//       wordsMatched++;

//       // Count the number of characters in the word
//       charactersScrambled += word.length;

//       // Replace the word with the replacement text
//       return replacement;
//     }

//     return word;
//   });

//   // Record the end time
//   const endTime = performance.now();

//   const elapsedTime = (endTime - startTime) / 1000; // Convert to seconds

//   return {
//     scrambledText: scrambledText.join(' '),
//     stats: {
//       wordsScanned,
//       wordsMatched,
//       charactersScrambled,
//       elapsedTime, // Add elapsed time to stats
//     },
//   };
// }

// // Handle form submission
// // Handle form submission
// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const inputText = textArea.value;
//   const wordsToScramble = wordsToScrambleInput.value.split(' ');
//   const replacement = '*'; // You can change the replacement character

//   // Check if the input text is empty
//   if (inputText.trim() === "") {
//     alert("Please enter some text in the Enter Text.");
//     return; // Exit the function
//   }

//   const { scrambledText, stats } = scrambleText(inputText, wordsToScramble, replacement);

//   // Display the scrambled text and stats
//   resultDisplay.innerHTML = `Scrambled Text:<br>${scrambledText}<br><br>
//     Stats:<br>
//     - Words Scanned: ${stats.wordsScanned}<br>
//     - Words Matched: ${stats.wordsMatched}<br>
//     - Characters Scrambled: ${stats.charactersScrambled}<br>
//     - Elapsed Time: ${stats.elapsedTime.toFixed(2)} seconds`; // Display elapsed time with two decimal places
// });


// // Get a reference to the refresh button by its ID
// const refreshButton = document.getElementById("refreshButton");

// // Add a click event listener to the refresh button
// refreshButton.addEventListener("click", function () {
//   // Reload the page
//   location.reload();
// });

// // });


// Get references to HTML elements
const form = document.querySelector('form');
const textArea = document.querySelector('textarea');
const wordsToScrambleInput = document.querySelector('#wordsToScramble');
const replacementInput = document.querySelector('#replacement'); // Reference to the replacement input
const resultDisplay = document.querySelector('#results');

// Define a function to scramble text
function scrambleText(text, wordsToScramble, replacements) {
  // Record the start time
  const startTime = performance.now();

  // Split the text into words
  const words = text.split(' ');

  // Initialize variables to keep track of stats
  let wordsScanned = 0;
  let wordsMatched = 0;
  let charactersScrambled = 0;

  // Scramble the text
  const scrambledText = words.map(word => {
    wordsScanned++;

    if (wordsToScramble.includes(word.toLowerCase())) {
      wordsMatched++;

      // Get a random replacement from the list
      const randomIndex = Math.floor(Math.random() * replacements.length);
      const replacement = replacements[randomIndex];

      // Count the number of characters in the word
      charactersScrambled += word.length;

      // Replace the word with the selected replacement
      return replacement;
    }

    return word;
  });

  // Record the end time
  const endTime = performance.now();

  const elapsedTime = (endTime - startTime) / 1000; // Convert to seconds

  return {
    scrambledText: scrambledText.join(' '),
    stats: {
      wordsScanned,
      wordsMatched,
      charactersScrambled,
      elapsedTime, // Add elapsed time to stats
    },
  };
}

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputText = textArea.value;
  const wordsToScramble = wordsToScrambleInput.value.split(' ');
  const replacements = replacementInput.value.split(','); // Split replacements by commas

  // Check if the input text is empty
  if (inputText.trim() === "") {
    alert("Please enter some text in the Enter Text.");
    return; // Exit the function
  }

  const { scrambledText, stats } = scrambleText(inputText, wordsToScramble, replacements);

  // Display the scrambled text and stats
  resultDisplay.innerHTML = `Scrambled Text:<br>${scrambledText}<br><br>
    Stats:<br>
    - Words Scanned: ${stats.wordsScanned}<br>
    - Words Matched: ${stats.wordsMatched}<br>
    - Characters Scrambled: ${stats.charactersScrambled}<br>
    - Elapsed Time: ${stats.elapsedTime.toFixed(2)} seconds`; // Display elapsed time with two decimal places
});

// Get a reference to the refresh button by its ID
const refreshButton = document.getElementById("refreshButton");

// Add a click event listener to the refresh button
refreshButton.addEventListener("click", function () {
  // Reload the page
  location.reload();
});
