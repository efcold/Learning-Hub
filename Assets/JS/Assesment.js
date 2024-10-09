function toggleDetails(element) {
    const cardDetails = element.closest('.assm-card').querySelector('.assm-card-details');
    const buttonContainer = element.closest('.assm-card').querySelector('.assm-button-container');

    // Toggle details display
    if (cardDetails.style.display === 'none' || cardDetails.style.display === '') {
        cardDetails.style.display = 'block';
        buttonContainer.style.display = 'block'; // Show button
        element.innerHTML = '▲'; // Change to up arrow
    } else {
        cardDetails.style.display = 'none';
        buttonContainer.style.display = 'none'; // Hide button
        element.innerHTML = '▼'; // Change to down arrow
    }
}
