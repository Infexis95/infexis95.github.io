window.onload = function () {
    const clickBox = document.getElementById('ClickBox');
    const scoreDisplay = document.getElementById('ScoreDisplay');
    const dropsButton = document.getElementById('DropsButton');
    const sizeButton = document.getElementById('SizeButton');
    const dropsPriceDisplay = document.getElementById('DropsPrice');
    const sizePriceDisplay = document.getElementById('SizePrice');
    let score = 0;
    let numberOfRaindrops = 1;
    let dropsCost = 1;
    let sizeCost = 1;
    const dropsIncreasedPercentage = 1.1;
    const sizeIncreasedPercentage = 1.1;
    let baseScoreIncrement = 0.1;
    let raindropSize = 1;
    const maxRaindropSize = 10;

    const epsilon = 0.0001

    dropsPriceDisplay.textContent = dropsCost.toFixed(1);
    sizePriceDisplay.textContent = sizeCost.toFixed(1);

    // Ensure the ClickBox element is found
    if (!clickBox) {
        console.error("ClickBox element not found");
        return;
    }

    clickBox.addEventListener('click', function (event) {
        // Add the raindrop starting at the clicked location
        const rect = clickBox.getBoundingClientRect();
        const clickX = event.clientX - rect.left;

        for (let i = 0; i < numberOfRaindrops; i++) {
            createRaindrop(clickX);
        }
    });

    function createRaindrop(clickX) {
        const raindrop = document.createElement('div');
        raindrop.classList.add('RainDrop');

        // Generate a random offset between -50px and 50px
        const randomOffset = Math.floor(Math.random() * 301) - 150;
        const randomX = clickX + randomOffset;

        // Ensure the raindrop stays within ClickBox boundaries
        const minLeft = 0;
        const maxLeft = clickBox.clientWidth - raindrop.offsetWidth;
        const constrainedX = Math.max(minLeft, Math.min(randomX, maxLeft));

        raindrop.style.left = `${constrainedX}px`;
        raindrop.style.top = '0px'; // Start at the top of the ClickBox
        raindrop.style.width = `${raindropSize}px`;

        // Append raindrop to the ClickBox
        clickBox.appendChild(raindrop);

        // Forcing layout recalculation before starting animation
        raindrop.offsetHeight;

        // Calculate bottom position
        const bottomPosition = clickBox.clientHeight - raindrop.clientHeight;

        // Start animation
        setTimeout(() => {
            raindrop.style.top = `${bottomPosition}px`;
        }, 10);

        // Increment score and remove the raindrop after the transition
        raindrop.addEventListener('transitionend', function () {
            const currentScoreIncrement = baseScoreIncrement * raindropSize;
            score += currentScoreIncrement;  // Increment the score
            scoreDisplay.textContent = score.toFixed(1);
            raindrop.remove(); // Clean up the DOM once the animation ends
        });
    }


    dropsButton.addEventListener('click', function () {
        if (score + epsilon >= dropsCost) {
            score -= dropsCost;
            score = Math.max(score, 0);
            scoreDisplay.textContent = score.toFixed(1);

            numberOfRaindrops += 1;
            dropsCost = parseFloat((dropsCost * dropsIncreasedPercentage).toFixed(1));
            dropsPriceDisplay.textContent = dropsCost.toFixed(1);
        }
    });

    sizeButton.addEventListener('click', function () {
        if (score + epsilon >= sizeCost && raindropSize < maxRaindropSize) { // Check if raindrop width is less than max
            score -= sizeCost;
            score = Math.max(score, 0);
            scoreDisplay.textContent = score.toFixed(1);

            raindropSize += 1;
            sizeCost = parseFloat((sizeCost * sizeIncreasedPercentage).toFixed(1));
            sizePriceDisplay.textContent = sizeCost.toFixed(1);
        }
    });

};


