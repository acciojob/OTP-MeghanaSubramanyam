// const inputs = document.querySelectorAll('.code');

// inputs.forEach((input, index) => {
//     input.addEventListener('input', () => {
//         if(input.value.length===1 && index<inputs.length-1){
// 			inputs[index+1].focus();
// 		}
// 	});


//     input.addEventListener('keydown',(event)=>{
// 		if(event.key==='Backspace' && input.value===''){
// 			if(index>0){
// 				inputs[index-1].focus();
// 				inputs[index-1].value='';
// 			}
// 		}
// 	});
// });
const inputs = document.querySelectorAll('.code');

// Loop through each input and add event listeners for input and keydown events
inputs.forEach((input, index) => {
    // Listen for input event to move focus to the next input
    input.addEventListener('input', () => {
    if(input.value.length===1 && index<inputs.length-1){
        setTimeout(() => inputs[index+1].focus(), 10);
    }
});

    // Listen for keydown event to handle backspace behavior
    input.addEventListener('keydown', (event) => {
        // Check if backspace is pressed and the current input is empty
        if (event.key === 'Backspace' && input.value === '') {
            // If not the first input, move focus back to the previous input
            if (index > 0) {
                inputs[index - 1].focus();
                inputs[index - 1].value = '';  // Clear the previous input
            }
        }
    });
});
