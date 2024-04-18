function verifyInput() {
    const inputField = document.getElementById('userInput');
    const text = inputField.value.trim();
    const formContainer = document.getElementById('form-container');
    const resultContainer = document.getElementById('result');

    fetch('./data.csv')
        .then(response => response.text())
        .then(data => {
            const records = data.split('\n').map(line => line.trim());
            const success = records.includes(text);
            formContainer.style.display = 'none'; // Hide the form
            resultContainer.textContent = success ? "Success" : "Not approved";
        })
        .catch(error => {
            console.error('Error fetching the CSV file:', error);
            resultContainer.textContent = "Error processing your request.";
        });

    return false; // Prevent default form submission
}
