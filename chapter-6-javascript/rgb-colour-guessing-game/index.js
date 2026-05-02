// Select the RGB value heading
const rgbValue = document.querySelector("#rgbValue");

// Select the message paragraph
const message = document.querySelector("#message");

// Select the colour options container
const colourOptions = document.querySelector("#colourOptions");

// Select the score and round paragraphs
const scoreText = document.querySelector("#scoreText");
const roundText = document.querySelector("#roundText");

// Select the replay button
const replayButton = document.querySelector("#replayButton");

// Store the current correct colour
let correctColour = "";

// Store the player's score
let score = 0;

// Store the current round
let round = 1;

// Set the total number of rounds
const totalRounds = 5;

// This function creates a random number between 0 and 255
function randomColourValue() {
    return Math.floor(Math.random() * 256);
}

// This function creates a random RGB colour string
function createRandomRGB() {
    const red = randomColourValue();
    const green = randomColourValue();
    const blue = randomColourValue();

    return `rgb(${red}, ${green}, ${blue})`;
}

// This function starts a new round of the game
function startRound() {
    // Clear previous colour buttons
    colourOptions.innerHTML = "";

    // Hide the replay button while the game is active
    replayButton.classList.add("hidden");

    // Create an array of possible colour choices
    const colours = [
        createRandomRGB(),
        createRandomRGB(),
        createRandomRGB()
    ];

    // Choose one of the colours as the correct answer
    correctColour = colours[Math.floor(Math.random() * colours.length)];

    // Display the RGB value that the player must guess
    rgbValue.textContent = correctColour.toUpperCase();

    // Update the score and round text
    scoreText.textContent = `Score: ${score}`;
    roundText.textContent = `Round: ${round} of ${totalRounds}`;

    // Create a button for each colour option
    colours.forEach((colour) => {
        const button = document.createElement("button");
        button.classList.add("colour-button");
        button.style.backgroundColor = colour;
        button.setAttribute("aria-label", `Colour option ${colour}`);

        // Check the player's answer when a colour is clicked
        button.addEventListener("click", () => checkAnswer(colour));

        colourOptions.appendChild(button);
    });
}

// This function checks whether the clicked colour is correct
function checkAnswer(selectedColour) {
    if (selectedColour === correctColour) {
        score++;
        message.textContent = "Correct! Well done.";
    } else {
        message.textContent = "Incorrect. Try the next round.";
    }

    // Move to the next round or end the game
    if (round < totalRounds) {
        round++;
        setTimeout(startRound, 900);
    } else {
        endGame();
    }
}

// This function ends the game and shows the final score
function endGame() {
    colourOptions.innerHTML = "";
    rgbValue.textContent = "Game Over";
    message.textContent = `Final score: ${score} out of ${totalRounds}`;
    scoreText.textContent = `Score: ${score}`;
    roundText.textContent = "Finished";
    replayButton.classList.remove("hidden");
}

// This function resets the game back to the beginning
function resetGame() {
    score = 0;
    round = 1;
    message.textContent = "Pick the correct colour.";
    startRound();
}

// Restart the game when the replay button is clicked
replayButton.addEventListener("click", resetGame);

// Start the first round when the page loads
startRound();
