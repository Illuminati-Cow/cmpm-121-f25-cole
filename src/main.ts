/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 */

console.log("🎮 CMPM 121 - Starting...");

// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 Project</h1>
  <p>Counter: <span id="counter">0</span></p>
  <button id="increment">Click Me!</button>
`;

// Add click handler
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;

button.addEventListener("click", () => {
  // This looks like to a good place to add some logic!
  // console.log("I have these thingies:", button, counterElement, counter);
  const currentValue: number = Number.parseInt(counterElement.innerHTML);
  counterElement.innerHTML = `${currentValue + 1}`;
});
