const sidebarToggle = document.querySelector('.sidebar-toggle');
const navLinks = document.querySelectorAll('.nav__link')

sidebarToggle.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('sidebar-open');
    })
})

