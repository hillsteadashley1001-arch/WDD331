document.addEventListener('DOMContentLoaded', () => {
    const promoForm = document.querySelector('.cart__promo-form');
    const promoInput = document.querySelector('.cart__input');
    const totalDisplay = document.getElementById('cart-total');

    let currentTotal = 20;

    promoForm. addEventListener('submit', function(event) {
        event.preventDefault();

        const code = promoInput.value.trim().toUpperCase();
        
        if (code === 'SAVE10') {
            const discount = 10;
            const newTotal = currentTotal - discount;

            totalDisplay.textContent = `Total: $${newTotal}`;

            promoInput.style.borderColor = '#28a745';
            totalDisplay.style.color = '#28a745';

            const submitBtn = promoForm.querySelector('.cart__button');
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.5';
            submitBtn.textContent = 'Applied';
        } else {
            promoInput.style.borderColor = '#dc3545';
            alert('Invalid code. Try "SAVE10"');
        }
    });
});