// Calculator functionality
const display = document.querySelector('input[type="text"]');
const buttons = document.querySelectorAll('.btn button');

let currentValue = '';

// Button click event
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.clear) {
            // Clear display
            currentValue = '';

        } else if (button.dataset.delete) {
            // Delete last character
            currentValue = currentValue.slice(0, -1);

        } else if (button.dataset.number) {
            // Add number to current value
            currentValue += button.textContent;

        } else if (button.dataset.operator || button.dataset.equal) {
            // Calculate result when "=" is pressed
            if (button.dataset.equal) {
                currentValue = eval(currentValue); // Use eval to calculate result
            } else {
                currentValue += ' ' + button.textContent + ' '; // Add operator
            }
        }
        // Update display
        display.value = currentValue;
    });
});