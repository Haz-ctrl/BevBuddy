function calculateNightlyBudget() {
    const monthlyBudget = parseFloat(document.getElementById('monthlyBudget').value);
    const daysOfWeek = parseFloat(document.getElementById('daysOfWeek').value);
    const monthlyLimit = 3000
    
    if (isNaN(monthlyBudget) || isNaN(daysOfWeek) || monthlyBudget <= 0 || monthlyBudget > monthlyLimit || daysOfWeek <= 0 || daysOfWeek > 7) {
        document.getElementById('nightlyBudgetResult').innerHTML = 'Please enter valid values.';
    } else {
        const nightlyBudget = monthlyBudget / (daysOfWeek * 4);
        document.getElementById('nightlyBudgetResult').innerHTML = `
            <div class="nightly-budget-label">Nightly Budget:</div>
            <div class="nightly-budget-amount">£${nightlyBudget.toFixed(2)}</div>
        `;
    }

     
}

function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the password is at least 8 characters long
    if (password.length < 8) {
        document.getElementById('registrationMessage').innerHTML = 'Password must be at least 8 characters.';
        return;
    }

    // Add your custom validation logic for name and email here
    // You can use regex or other methods to validate the inputs

    // If all validations pass, show the success message
    document.getElementById('registrationMessage').innerHTML = 'Registration successful! Redirecting...';

    // Redirect to the home page after a brief delay (e.g., 2 seconds)
    setTimeout(function() {
        window.location.href = 'index.html'; // Replace 'index.html' with your actual home page URL
    }, 2000); // 2000 milliseconds (2 seconds) delay
}