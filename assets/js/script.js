console.log('JS Loaded Succesfully');

// Dice Section
    // Button Submit 
    const submitBtn = document.getElementById('submitBtn');
    
    submitBtn.addEventListener("click",
        function () {

            // User Random Number
            let randomUserNumber = Math.floor(Math.random() * 6) + 1;
            const randomUserOutput = document.getElementById('userValueOutput');

                if (randomUserNumber >= 1 && randomUserNumber <= 6) { 
                    console.log(`Your random number ${randomUserNumber} is between 1 and 6`);
                    randomUserOutput.innerHTML = randomUserNumber;
                }

            // PC Random Number
            let randomPcNumber = Math.floor(Math.random() * 6) + 1;
            const randomPcOutput = document.getElementById('computerValueOutput');

                if (randomPcNumber >= 1 && randomPcNumber <= 6) { 
                    console.log(`PC random number ${randomPcNumber} is between 1 and 6`);
                    randomPcOutput.innerHTML = randomPcNumber;
                }

            // Result Game
            const resultGameOutput = document.getElementById('resultGameOutput');

            if (randomUserNumber > randomPcNumber) {
                console.log(`Hai vinto contro il PC!`);
                resultGameOutput.innerHTML = `Hai vinto contro il PC!`;
            } else if (randomUserNumber < randomPcNumber) {
                console.log(`Immagina perdere contro un PC!`);
                resultGameOutput.innerHTML = `Immagina perdere contro un PC!`;
            } else {
                console.log(`Incredibile Pareggio!`);
                resultGameOutput.innerHTML = `Incredibile Pareggio!`;
            }
        }
    )


// Mail Section
    // Input Section
    const emailList = [
        'general.francescoruggeri@gmail.com',
        'bimelim507@aicogz.com',
        'rowoven343@appxapi.com',
        'xeyoyad156@asuflex.com',
        'alicerossi78@outlook.com'
    ];

