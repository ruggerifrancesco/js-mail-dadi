console.log('JS Loaded Succesfully');

// Dice Section

    // User Input
    const userValue = parseInt(document.getElementById('userValueInput').value);
        console.log('Output Test userValue = ' + userValue);

    // PC random Number
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    const randomPcOutput = document.getElementById('computerValueOutput');

        if (randomNumber >= 1 && randomNumber <= 6) { 
            console.log(`The random number ${randomNumber} is between 1 and 6`);
            randomPcOutput.innerHTML = randomNumber;
        }

    // Button Submit 
    const submitBtn = document.getElementById('submitBtn');
    
    submitBtn.addEventListener("click",
        function () {

        }
    )



// Mail Section