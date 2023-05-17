console.log('JS Loaded Succesfully');

// Dice Section
for (let i = 1; i <= 6; i++) {
    // console.log(i);

    // User Input
    const userValue = parseInt(document.getElementById('userValueInput').value);
        console.log('Output Test userValue = ' + userValue);
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener ('click', 
        function() {

        }
    )

    // PC random Number
    let random_number = Math.floor(Math.random() * 10) + 1;
        if (random_number >= 1 && random_number <= 6) { 
          console.log(`The random number ${random_number} is between 1 and 6`);
        } else {
          console.log(`The random number ${random_number} is not between 1 and 6`);
        }
}



// Mail Section