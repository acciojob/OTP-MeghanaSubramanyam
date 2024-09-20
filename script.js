const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.match(/[0-9]/)) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        } else {
            e.target.value = '';
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            if (index > 0 && !e.target.value) {
                inputs[index - 1].focus();
            }
        }
    });
});

