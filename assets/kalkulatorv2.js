let data = [];

function updateDisplay(value = null) {
    if (!isNaN(value)) {
        data.push({value, type: 'number'});
    } else if (['÷', '×', '-', '+'].includes(value)) {
        data.push({value, type: 'operator'})
    } else if (value === '%') {
        data.push({value, type: 'percent'})
    }
    console.log(data);
    let result = data.filter(({value}) => {value});
    
    document.getElementById('displayNumber').innerText = result.join('');
}

function performCalculation() {
    for (let i = 0; i < data.length; i++ ) {
    }
    console.log(result);
}

document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('equals')) {
            performCalculation();
        }
        updateDisplay(target.innerText);
    })
})