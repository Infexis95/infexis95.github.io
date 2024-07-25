const sideBar = document.querySelector('.side-bar');
const homeButton = document.querySelector('.homepage-button');

let isSideBarHovered = false; // Flag to track sidebar hover state

homeButton.addEventListener('mouseover', () => {
  sideBar.classList.add('show'); // Add 'show' class for animation
  isSideBarHovered = true; // Set flag when hovering home button
});

sideBar.addEventListener('mouseover', () => {
  isSideBarHovered = true; // Set flag when hovering sidebar
});

document.addEventListener('mouseout', () => {
  if (!isSideBarHovered) {
    sideBar.classList.remove('show'); // Remove 'show' class only if not hovered
  }
  isSideBarHovered = false; // Reset flag on any doc mouseout
});

// const sideBar = document.querySelector('.side-bar');
// const homeButton = document.querySelector('.homepage-button');
// let isSidebarHovered = false; // Flag to track hover state

// homeButton.addEventListener('mouseover', () => {
//   sideBar.classList.add('show'); // Add 'show' class for animation
// });

// sideBar.addEventListener('mouseover', () => {
//   isSidebarHovered = true; // Set flag when hovering sidebar
// });

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

