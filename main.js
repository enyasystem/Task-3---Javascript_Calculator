//Calculator-Keys
let calculator = document.querySelector('.calculator')
let keys = calculator.querySelector('.calculator-keys')

keys.addEventListener('click' e => {
    if (e.target.matches('button')){
        // Perform some calculations
    }
})

//Action attribute to determine the key pressed
let key = e.target
let action = key.dataset.action

//If