// Tunggu hingga DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function () {

    // Toggle Navigasi Menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });

    // Tutup Navigasi Menu saat link diklik
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });

    // Smooth Scrolling untuk Navigasi Links
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll ke section dengan memperhitungkan tinggi header
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Fungsi Tabs pada Services
    const tabs = document.querySelectorAll('.services-tab');
    const descriptions = document.querySelectorAll('.content-description');
    const images = document.querySelectorAll('.services-image img');

    tabs.forEach((tab) => {
        tab.addEventListener('click', function () {
            const target = this.getAttribute('data-target');

            // Reset semua tabs
            tabs.forEach((t) => t.classList.remove('active'));
            this.classList.add('active');

            // Update deskripsi
            descriptions.forEach((desc) => {
                desc.classList.remove('active');
                if (desc.id === target) desc.classList.add('active');
            });

            // Update gambar
            images.forEach((img) => {
                img.classList.remove('active');
                if (img.id === `${target}-img`) img.classList.add('active');
            });
        });
    });
});
