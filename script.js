
// const inputs = document.querySelectorAll('.code');

// inputs.forEach((input, index) => {
//     input.addEventListener('input', () => {
//         if (input.value.length === 1 && index < inputs.length - 1) {
//             inputs[index + 1].focus();
//         }
//     });

//     input.addEventListener('keydown', (event) => {
//         if (event.key === 'Backspace' && input.value === "") {
//             if (index > 0) {
//                 inputs[index - 1].focused();
//                 inputs[index - 1].value = '';
//             }
//         }
//     });
// });
const inputs = document.querySelectorAll('.code');

// Function to move focus to the next or previous input
inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        // Only allow numbers
        if (e.target.value.match(/[0-9]/)) {
            // Move to the next input field if available
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        } else {
            e.target.value = ''; // Clear if not a number
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            // If backspace is pressed, go back to the previous input
            if (index > 0 && !e.target.value) {
                inputs[index - 1].focus();
            }
        }
    });
});
