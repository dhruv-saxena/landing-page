// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', function() {
    menu.classList.toggle('active');
});

// Order button
document.getElementById('orderBtn').addEventListener('click', function() {
    alert('☕ Thanks for your order! Your coffee will be ready soon.');
});