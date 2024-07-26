const bonus_button = document.querySelector('#bonus_btn');
const range_input = document.getElementById('r2');
const range_toggle = document.querySelector('.range');
const bonus_input = document.getElementById("r1");
const calc_btn = document.getElementById("calc_btn");
const init_text = document.getElementById("init-text");


bonus_button.addEventListener('click', () => {
        bonus_input.style.display = "inline-flex";
        bonus_input.style.width = "380px";
        bonus_input.placeholder = 'Bonus:'
        range_input.style.display = "none";
        range_input.value = '';
        bonus_input.value = '';
    })

document.getElementById('range_btn').addEventListener('click', () => {
    document.querySelectorAll(".range-input").forEach(el =>{
        el.style.display = 'inline-flex';
    });
    range_toggle.style.flexDirection = 'row';
    bonus_input.style.width = "175px";
    bonus_input.placeholder = "From:";
})

calc_btn.addEventListener('click', () => {
    calc_init(bonus_input.value, range_input.value, init_text.value);
})

function calc_init(x, y) {
    if (isNaN(x) || isNaN(y)) {
        alert('Error: Bonus or Range includes non-numerical characters.')
    } else {

    }
}

function ran_number(x,y) {
    if (y) {
    }
}

function startTime() {
    const localDate = new Date()
    let hour = localDate.getHours()
    let minute = localDate.getMinutes()
    let second = localDate.getSeconds()
    let adjustedMinute = adjustTime(minute)
    let adjustedSecond = adjustTime(second)
    document.getElementById('clock').innerHTML = hour + ":" + adjustedMinute + ":" + adjustedSecond;
    setTimeout(startTime, 1000);
}

function adjustTime(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

