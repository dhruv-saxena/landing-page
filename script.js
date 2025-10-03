// Kebab menu toggle
const kebab = document.getElementById('kebab');
const menu = document.getElementById('menu');

kebab.addEventListener('click', function() {
    menu.classList.toggle('active');
});

// Order button
document.getElementById('orderBtn').addEventListener('click', function() {
    alert('☕ Thanks for your order! Your coffee will be ready soon.');
});