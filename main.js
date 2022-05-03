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

//Values to be gotten through textContent property and the clicked key and the .calculator-display respectively
const display = document.querySelector('.calculator-display')

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        //...
    }
})

//Replacing the 0 number that will be displayed when the calculator is powered on with the clicked key
if (!action) {
    if (displayedNum === '0') {
        display.textContent = keyContent
    }    
}