### PASSWORD COMPLEXITY CHECKER

## Description
This is a simple web application that checks the complexity of a password and provides feedback to the user. It ensures that the password meets certain criteria, such as having at least 8 characters, including uppercase and lowercase letters, numbers, and special characters.

## Features

- Checks for minimum length (8 characters)
- Ensures presence of at least one uppercase letter
- Ensures presence of at least one lowercase letter
- Ensures presence of at least one number
- Ensures presence of at least one special character
- Provides real-time feedback to the user

## Technologies Used

- HTML
- CSS
- JavaScript

## Usage

1. Clone the repository or download the files.
2. Open `index.html` in your web browser.
3. Enter a password in the input field to see the feedback on its complexity.

## Files

- `index.html`:
  The main HTML file containing the structure of the application.
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Complexity Checker</title>
        <link rel="stylesheet" href="password.css">

    </head>
    <body>
        <div class="container">
            <h1>Password Complexity Checker</h1>
            <input type="password" id="password"
                placeholder="Enter your password">
            <div class="feedback" id="feedback"></div>
        </div>
        <script src="passwordChecker.js"></script>
    </body>
  </html>
  ```
  
- `password.css`:
  The CSS file for styling the application.
  ```css
  body {
    font-family: 'Arial', sans-serif;
    background-color: #e3f2fd;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
   }

    .container {
    max-width: 600px;
    margin: 20px;
    padding: 30px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    text-align: center;
    }
 
    h1 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #0277bd;
   }

    .feedback {
    margin-top: 20px;
    font-size: 14px;
    color: #d32f2f;
    }

    input {
    width: 90%;
    padding: 15px;
    font-size: 16px;
    border-radius: 25px;
    border: 1px solid #ccc;
    outline: none;
    transition: border-color 0.3s;
    }

    input:focus {
    border-color: #0288d1;
    }

    .feedback span {
    display: block;
    margin: 5px 0;
    }

    .feedback span.green {
    color: #388e3c;
    }

    .feedback span.red {
    color: #d32f2f;
    }
- `passwordChecker.js`:
  The JavaScript file containing the logic for checking password complexity.
  ```js
  document.getElementById('password').addEventListener('input', function () {
    const password = this.value;
    const feedback = document.getElementById('feedback');
    const criteria = [
        { regex: /.{8,}/, message: 'At least 8 characters' },
        { regex: /[A-Z]/, message: 'At least one uppercase letter' },
        { regex: /[a-z]/, message: 'At least one lowercase letter' },
        { regex: /[0-9]/, message: 'At least one number' },
        { regex: /[^A-Za-z0-9]/, message: 'At least one special character' }
    ];

    let feedbackMessages = [];
    criteria.forEach((criterion) => {
        if (!criterion.regex.test(password)) {
            feedbackMessages.push(criterion.message);
        }
    });

    if (feedbackMessages.length === 0) {
        feedback.innerHTML = '<span style="color: green;">Password is strong</span>';
    } else {
        feedback.innerHTML = '<span style="color: red;">' + feedbackMessages.join(', ') + '</span>';
    }
  });
  ```

## License
This project is licensed under the MIT License. 

## Author 
`Umar Farooq`
- Feel free to customize it further according to your needs!
