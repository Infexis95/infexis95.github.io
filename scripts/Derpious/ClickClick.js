let x = 0

window.onload = function () {
    const clickBox = document.getElementById('ClickBox');

    // Ensure the ClickBox element is found
    if (!clickBox) {
        console.error("ClickBox element not found");
        return;
    }

    clickBox.addEventListener('click', function (event) {
        // Create a new raindrop element for each click
        const raindrop = document.createElement('div');
        raindrop.classList.add('sprite'); // Assuming your CSS class is 'sprite'
        raindrop.style.position = 'absolute';
        raindrop.style.width = '10px';
        raindrop.style.height = '10px';
        raindrop.style.backgroundColor = 'blue';

        // Add the raindrop starting at the clicked location
        const rect = clickBox.getBoundingClientRect();
        const clickX = event.clientX - rect.left;

        raindrop.style.left = `${clickX}px`;
        raindrop.style.top = '0px'; // Start at the top

        // Append raindrop to the ClickBox
        clickBox.appendChild(raindrop);

        // Forcing layout recalculation before starting animation
        raindrop.offsetHeight;

        // Calculate bottom position
        const bottomPosition = clickBox.clientHeight - raindrop.clientHeight;

        // Start animation
        setTimeout(() => {
            raindrop.style.transition = 'top 1s ease';
            raindrop.style.top = `${bottomPosition}px`;
        }, 10);

        // Wait for the animation to complete before removing the raindrop
        raindrop.addEventListener('transitionend', function () {
            raindrop.remove(); // Clean up the DOM once animation ends
        });

        x += 1
        document.getElementById("click-click-number").innerHTML = x

    });
};