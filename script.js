let screen = document.getElementById('screen');

let currentInput = '';

const buttons = document.querySelectorAll('.btn');


buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = button.value;

        
        if (value === 'clear') {
            currentInput = '';
            screen.value = '';
        } 
        else if (value === '=') {
            try {
                screen.value = eval(currentInput);
            } catch {
                screen.value = 'Error';
            }
        } 
        else {
            currentInput += value;
            screen.value = currentInput;
        }
    });
});
