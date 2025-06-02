// Initialize back button functionality
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.querySelector('.back-to-prev-page');

    if (backButton) {
        backButton.addEventListener('click', () => {
            history.back(); // Go back to the previous page in history
        });
    }
});
