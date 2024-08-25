document.addEventListener('DOMContentLoaded', () => {
    const name1Input = document.getElementById('name1');
    const name2Input = document.getElementById('name2');
    const calculateButton = document.getElementById('calculateButton');
    const resultDiv = document.getElementById('result');
    const mainContainer = document.getElementById('mainContainer');
    const aboutSection = document.getElementById('aboutSection');
    const disclaimerOverlay = document.getElementById('disclaimerOverlay');
    const acceptDisclaimerButton = document.getElementById('acceptDisclaimerButton');

    let tapCount = 0;

    calculateButton.addEventListener('click', calculateLovePercentage);
    mainContainer.addEventListener('click', handleContainerClick);
    acceptDisclaimerButton.addEventListener('click', acceptDisclaimer);

    function calculateLovePercentage() {
        const name1 = name1Input.value.trim();
        const name2 = name2Input.value.trim();

        if (name1 === '' || name2 === '') {
            alert('Please enter both names');
            return;
        }

        resultDiv.textContent = 'Calculating...';
        setTimeout(() => {
            const combinedNames = name1 + name2;
            const lovePercentage = getLovePercentage(combinedNames);

            resultDiv.textContent = `Love Percentage between ${name1} and ${name2} is ${lovePercentage}%`;
        }, 1000); // Simulate calculation delay
    }

    function getLovePercentage(names) {
        let total = 0;
        for (let char of names) {
            total += char.charCodeAt(0);
        }
    
        return total % 101; // Ensures the percentage is between 0 and 100
    }
    
    function handleContainerClick() {
        tapCount++;
        if (tapCount >= 10) {
            aboutSection.style.display = 'block';
        }
    }
    
    function acceptDisclaimer() {
        disclaimerOverlay.style.display = 'none';
    }
    });