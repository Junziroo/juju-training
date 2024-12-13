

// untuk navbar checked
// Tangkap semua tautan dengan class nav-links
        const navLinks = document.querySelectorAll('.nav-links');

        // Tambahkan event listener ke setiap tautan
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Hapus kelas 'active' dari semua tautan
                navLinks.forEach(nav => nav.classList.remove('active'));

                // Tambahkan kelas 'active' ke tautan yang diklik
                this.classList.add('active');
            });
        });

        // hamburger,close,sidebar,main no scroll
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
