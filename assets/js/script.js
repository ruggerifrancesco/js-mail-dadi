console.log('JS Loaded Succesfully');

// Dice Section
    // Button Submit 
    const submitDiceBtn = document.getElementById('submitDiceBtn');
    
    submitDiceBtn.addEventListener("click",
        function () {

            // User Random Number
            const randomUserNumber = Math.floor(Math.random() * 6) + 1;
            const randomUserOutput = document.getElementById('userValueOutput');
            const diceUserStructure = document.getElementById('diceUserStructure');

                if (randomUserNumber >= 1 && randomUserNumber <= 6) { 
                    console.log(`Your random number ${randomUserNumber} is between 1 and 6`);
                    randomUserOutput.innerHTML = randomUserNumber;

                    // Clear any previous content inside the Dice Structure div
                    diceUserStructure.innerHTML = '';

                    // Create the correct dice value div and add it to the Dice Structure div
                    const diceValue = document.createElement('div');
                    diceValue.classList.add(`dice-value${randomUserNumber}`);
                    diceUserStructure.appendChild(diceValue);

                    // Create the required number of dot divs and add them to the dice value div
                    for (let i = 0; i < randomUserNumber; i++) {
                        const dot = document.createElement('div');
                        dot.classList.add('dot');
                        diceValue.appendChild(dot);
                    }
                } 

            // PC Random Number
            const randomPcNumber = Math.floor(Math.random() * 6) + 1;
            const randomPcOutput = document.getElementById('computerValueOutput');
            const dicePcStructure = document.getElementById('dicePcStructure');

                if (randomPcNumber >= 1 && randomPcNumber <= 6) { 
                    console.log(`PC random number ${randomPcNumber} is between 1 and 6`);
                    randomPcOutput.innerHTML = randomPcNumber;

                    dicePcStructure.innerHTML = '';
                    
                    const diceValue = document.createElement('div');
                    diceValue.classList.add(`dice-value${randomPcNumber}`);
                    dicePcStructure.appendChild(diceValue);

                    for (let i = 0; i < randomPcNumber; i++) {
                        const dot = document.createElement('div');
                        dot.classList.add('dot');
                        diceValue.appendChild(dot);
                    }
                    
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
    console.log(emailList);

    const emailInput = document.getElementById('emailCheckerInput');
    const submitEmailBtn = document.getElementById('submitEmailBtn');

    submitEmailBtn.addEventListener('click',
        function () {
            let emailFound = false;

            for (let i = 0; i < emailList.length; i++) {
                if (emailList[i] === emailInput.value) {
                    emailFound = true;
                }
            }

            if (emailFound === true) {
                console.log('Accesso Effettuato!');
            } else {
                console.log('Accesso Negato!');
            }

        }
    )


