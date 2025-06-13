const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');
const menuItems = document.querySelectorAll('.menu-item');

// When hamburger icon is clicked, open sidebar
hamburger.addEventListener('click', function() {
    sidebar.classList.add('open');
});

// When close button is clicked, close sidebar
closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('open');
});

// When any menu item is clicked, close sidebar (for mobile)
let i = 0;
while (i < menuItems.length) {
    menuItems[i].addEventListener('click', function() {
        sidebar.classList.remove('open');

    });
    i++;
}

// When clicking outside sidebar and hamburger, close sidebar
window.addEventListener('click', function(e) {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        sidebar.classList.remove('open');
    }
});