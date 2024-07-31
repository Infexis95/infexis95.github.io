const ClickMe_js = document.getElementById("Click_Me"); // saves the 'Click Me' button in the ClickMe_js variable.
const Result_js = document.getElementById("Result"); // Same for the Result paragraph

ClickMe_js.addEventListener("click", e => {   // I don't know why js is stupid like this, but this is how you add an event listener.
    Result_js.innerHTML = 'Test!'; // Sets the inner HTML of the element connected to the Result_js variable to "Test!"
})

