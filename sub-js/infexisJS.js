const sideBar = document.querySelector('.side-bar');
const homeButton = document.querySelector('.homepage-button');

homeButton.addEventListener('mouseover', () => {
    sideBar.classList.add('show');  /* Add 'show' class on hover */
  });
  
  homeButton.addEventListener('mouseout', () => {
    sideBar.classList.remove('show'); /* Remove 'show' class on mouseout */
  });

function startTime() {
    const localDate = new Date()
    let hour = localDate.getHours()
    let minute = localDate.getMinutes()
    let second = localDate.getSeconds()
    adjustedMinute = adjustTime(minute)
    adjustedSecond = adjustTime(second)
    document.getElementById('clock').innerHTML = hour + ":" + adjustedMinute + ":" + adjustedSecond;
    setTimeout(startTime, 1000);
}

function adjustTime(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

