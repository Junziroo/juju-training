

// untuk navbar checked
// Tangkap semua tautan dengan class nav-links
const navLinks = document.querySelectorAll('.nav-links');

// Tambahkan event listener ke setiap tautan
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Hapus kelas 'active' dari semua tautan
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Tambahkan kelas 'active' ke tautan yang diklik
        this.classList.add('active');
    });
});

// hamburger,close,sidebar,main blur
const hamBtn = document.querySelector('.ham-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');

hamBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    hamBtn.style.display = 'none';
    main.classList.add('blur');
    main.style.pointerEvents = 'none';
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    hamBtn.style.display = 'flex';
    main.classList.remove('blur');
    main.style.pointerEvents = 'auto';
});

// header ga keliatan
let lastScrollTop = 0; // Posisi scroll sebelumnya
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset; // Posisi scroll saat ini
    if (currentScroll > lastScrollTop) {
        // Scroll ke bawah
        header.classList.add('hidden');
    } else {
        // Scroll ke atas
        header.classList.remove('hidden');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Pastikan nilai tidak negatif
});
