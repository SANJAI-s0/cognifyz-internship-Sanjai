// =======================================================
// script.js
// Level 1 Task 2 - JavaScript Basics (Cognifyz Internship)
//
// Features:
// 1) Color-changing button
// 2) Greeting alert based on current time
// 3) Basic calculator (addition)
// =======================================================

/***********************
 * 1) Color-changing button
 ***********************/
(function () {
  const colorBtn = document.getElementById('color-button');

  // Guard clause: ensure button exists
  if (!colorBtn) return;

  // Colors to cycle through
  const colors = ['#0ea5a0', '#ef4444', '#f59e0b', '#6366f1', '#06b6d4'];
  let index = 0;

  // Initialize button color
  colorBtn.style.backgroundColor = colors[index];
  colorBtn.style.color = '#ffffff';
  colorBtn.textContent = 'Click me';

  colorBtn.addEventListener('click', () => {
    // Move to next color (wrap around)
    index = (index + 1) % colors.length;
    colorBtn.style.backgroundColor = colors[index];

    // Ensure readable text contrast
    colorBtn.style.color = '#ffffff';

    // Update label to show progress
    colorBtn.textContent = `Color ${index + 1} of ${colors.length}`;
  });
})();

/***********************
 * 2) Greeting alert based on current time
 ***********************/
(function () {
  const greetBtn = document.getElementById('greet-button');

  // Guard clause
  if (!greetBtn) return;

  function getGreetingMessage() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
      return 'Good morning! Have a great day ahead ☀️';
    }

    if (hour >= 12 && hour < 17) {
      return 'Good afternoon! Hope you’re having a productive day ☕';
    }

    if (hour >= 17 && hour < 21) {
      return 'Good evening! Relax and unwind 🌆';
    }

    return 'Hello! It’s late — take care and rest well 🌙';
  }

  greetBtn.addEventListener('click', () => {
    alert(getGreetingMessage());
  });
})();

/***********************
 * 3) Basic calculator (addition)
 ***********************/
(function () {
  const form = document.getElementById('calc-form');
  const inputA = document.getElementById('num1');
  const inputB = document.getElementById('num2');
  const output = document.getElementById('calc-result');

  // Guard clause
  if (!form || !inputA || !inputB || !output) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Parse input values
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);

    // Validate input
    if (Number.isNaN(a) || Number.isNaN(b)) {
      output.textContent = 'Please enter two valid numbers.';
      output.style.color = '#b91c1c'; // error color
      return;
    }

    const sum = a + b;

    // Display result
    output.style.color = ''; // reset to default
    output.textContent = `${a} + ${b} = ${sum}`;
  });
})();
