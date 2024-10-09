function toggleDetails(element) {
    const cardDetails = element.closest('.assm-card').querySelector('.assm-card-details');
    const buttonContainer = element.closest('.assm-card').querySelector('.assm-button-container');

    if (cardDetails.style.display === 'none' || cardDetails.style.display === '') {
        cardDetails.style.display = 'block';
        buttonContainer.style.display = 'block'; 
        element.innerHTML = '▲'; 
    } else {
        cardDetails.style.display = 'none';
        buttonContainer.style.display = 'none'; 
        element.innerHTML = '▼'; 
    }
}
