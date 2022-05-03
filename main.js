//Calculator-Keys
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator-keys')

keys.addEventListener('click', e => {
    if (e.target.matches('button')){
        // Perform some calculations
    }
})

//Action attribute to determine the key pressed
const key = e.target
const action = key.dataset.action

//If key pressed does not have an data-action attribute, then it must be a number
if (!action) {
    console.log('number key')
}

//If the key has a data-action... then do some mathematical operations
if (action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
) {
    console.log('operator key!')
}

//If the key's data-action is decimal then write . and so on for clear and equal to
if (action === 'decimal') {
 console.log('decimal key!')   
}

if (action === 'clear') {
    console.log('clear')
}

if (action === 'calculate') {
    console.log('equal key!')
}