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
