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

function calc_init(x, y, z) {
    if (isNaN(x) || isNaN(y)) {
        alert('Error: Bonus or Range includes non-numerical characters.')
    } else {
        let x_array = clean_init(z);
        const x_object = Object.entries(x_array);

        // Convert to an array of objects for sorting
        const sortedArray = x_object.map(([key, value]) => ({ key, value }));

        // Sort by value in descending order
        sortedArray.sort((a, b) => b.value - a.value);


        if (y) {
            for (const [key, value] of x_object) {
                x_array[key] = value + getRandomInt(x, y);
            }
        } else {
            for (const [key, value] of x_object) {
                x_array[key] = value + Number(x);
            }
        }
        let result = '';
        for (const { key, value } of sortedArray) {
            result += key + ':' + value + '\n';
        }
        init_text.value = '';
        init_text.value = result;
    }
}


function clean_init(z) {
    const cleanedArray = z.split(',').map(el => el.replace('\n', '').trim()); // Trim to remove extra spaces
    const result = cleanedArray.reduce((acc, cur, index) => {
        acc[cur] = getRandomInt(1, 20); // Replace 1, 20 with your desired range
        return acc;
    }, {});
    return result;
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
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

