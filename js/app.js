// onfocus / onblur
let allInputs = Array.from(document.querySelectorAll('input'))
for(let i = 0; i < allInputs.length - 1; i++) {
    allInputs[i].onfocus = () => {
        allInputs[i].setAttribute('data-focus', allInputs[i].getAttribute('placeholder'))
        allInputs[i].setAttribute('placeholder', '')
    }
    allInputs[i].onblur = () => {
        allInputs[i].setAttribute('placeholder', allInputs[i].getAttribute('data-focus'))
        allInputs[i].setAttribute('data-focus', '')
    }
}

