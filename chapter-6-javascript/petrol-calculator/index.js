// Select the input field for the petrol price per litre
const pricePerLitreInput = document.querySelector("#pricePerLitre");

// Select the input field for the number of litres purchased
const litresPurchasedInput = document.querySelector("#litresPurchased");

// Select the calculate button
const calculateButton = document.querySelector("#calculateButton");

// Select the paragraph used to display the total cost
const totalCostParagraph = document.querySelector("#totalCost");

// This function calculates the total cost of petrol
function calculateTotalCost() {
    // Convert the input values from strings into numbers
    const pricePerLitre = Number(pricePerLitreInput.value);
    const litresPurchased = Number(litresPurchasedInput.value);

    // Multiply the price per litre by the number of litres
    const totalCost = pricePerLitre * litresPurchased;

    // Display the total cost rounded to two decimal places
    totalCostParagraph.textContent = `Total cost: £${totalCost.toFixed(2)}`;
}

// Run the calculation when the button is clicked
calculateButton.addEventListener("click", calculateTotalCost);
