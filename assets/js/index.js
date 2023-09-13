const inputOne = document.querySelector('.inputOne')
const inputTwo = document.querySelector('.inputTwo')
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const delBtn = document.querySelector('.del')
const multBtn = document.querySelector('.mult')
const resultBtn = document.querySelector('.resultBtn')
const resultElement = document.querySelector('.result')

let action = '+'

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}
delBtn.onclick = function () {
    action = '/'
}
multBtn.onclick = function () {
    action = '*'
}

function printResult (result){
    if(result < 0){
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }

    resultElement.textContent = result
}

resultBtn.onclick = function () {
    if (action === '+') {
        const sum = Number(inputOne.value) + Number(inputTwo.value)
        printResult(sum)
    } else if (action === '-') {
        const sum = Number(inputOne.value) - Number(inputTwo.value)
        printResult(sum)
    }
    else if (action === '/') {
        const sum = Number(inputOne.value) / Number(inputTwo.value)
        printResult(sum)
    }
    else {
        const sum = Number(inputOne.value) * Number(inputTwo.value)
        printResult(sum)
    }
}
