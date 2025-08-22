
// Timer for Limited Time Offer
let offerDuration = 60 * 60; // 1 hour in seconds
const timerDisplay = document.getElementById('limited-offer-timer');

function updateTimer() {
    let hours = Math.floor(offerDuration / 3600);
    let minutes = Math.floor((offerDuration % 3600) / 60);
    let seconds = offerDuration % 60;
    timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    if (offerDuration > 0) {
        offerDuration--;
    } else {
        timerDisplay.textContent = 'Offer Ended';
        clearInterval(timerInterval);
    }
}

updateTimer();
const timerInterval = setInterval(updateTimer, 1000);

// Cart functionality
document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.getElementById('cartIcon');
    const cartDropdown = document.getElementById('cartDropdown');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cart = [];

    // Helper to format price
    function formatPrice(price) {
        return price.replace(/[^\d,\.]/g, '');
    }

    // Update cart dropdown content
    function updateCartDropdown() {
        if (cart.length === 0) {
            cartDropdown.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }
        let html = '<ul style="list-style:none;padding:0;margin:0;">';
        cart.forEach((item, idx) => {
            html += `<li style="margin-bottom:14px;display:flex;align-items:center;gap:8px;">
                <img src="${item.img}" alt="" style="width:40px;height:40px;object-fit:cover;border-radius:4px;">
                <div style="flex:1;display:flex;flex-direction:column;">
                    <span style="font-size:0.95em;">${item.name}</span>
                    <span style="color:#003366;font-weight:bold;">₦${item.price}</span>
                </div>
            </li>`;
        });
        html += '</ul>';
        cartDropdown.innerHTML = html;
    }

    // Add to cart button click
    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const card = btn.closest('.product-card');
            const img = card.querySelector('img').src;
            const name = card.querySelector('h3').textContent;
            const priceText = card.querySelector('p').textContent;
            const price = formatPrice(priceText);
            cart.push({ img, name, price });
            updateCartDropdown();
        });
    });

    if (cartIcon && cartDropdown) {
        cartIcon.addEventListener('click', function (e) {
            e.stopPropagation();
            cartDropdown.classList.toggle('active');
            updateCartDropdown();
        });

        // Hide dropdown when clicking outside
        document.addEventListener('click', function (e) {
            if (!cartDropdown.contains(e.target) && !cartIcon.contains(e.target)) {
                cartDropdown.classList.remove('active');
            }
        });
    }
});
