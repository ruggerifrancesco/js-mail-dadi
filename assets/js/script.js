console.log('JS Loaded Succesfully');

// User Input
const userValue = parseInt(document.getElementById('userValueInput').value);
    console.log('Output Test userValue = ' + userValue);
const submitBtn = document.getElementById('submitBtn');

// Dice Section

    // PC random Number
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    const randomPcOutput = document.getElementById('computerValueOutput');

        if (randomNumber >= 1 && randomNumber <= 6) { 
        //  console.log(`The random number ${randomNumber} is between 1 and 6`);
            randomPcOutput.innerHTML = randomNumber;
        }



// Mail Section