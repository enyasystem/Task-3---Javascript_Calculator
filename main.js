//Calculator-Keys
let calculator = document.querySelector('.calculator')
let keys = calculator.querySelector('.calculator-keys')

keys.addEventListener('click', e => {
    if (e.target.matches('button')){
        // Perform some calculations
    }
})

//Action attribute to determine the key pressed
let key = e.target
let action = key.dataset.action

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

