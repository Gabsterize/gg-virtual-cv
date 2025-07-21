// JavaScript for interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Collapsible sections functionality
    document.querySelectorAll('.section-header').forEach(header => {
        header.addEventListener('click', () => {
            const targetId = header.dataset.target;
            const content = document.getElementById(targetId);
            const icon = header.querySelector('.toggle-icon');

            if (content) {
                content.classList.toggle('hidden');
                if (content.classList.contains('hidden')) {
                    icon.textContent = '+'; // Change icon to plus when collapsed
                } else {
                    icon.textContent = '-'; // Change icon to minus when expanded
                }
            }
        });
    });

    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark');
        darkModeToggle.querySelector('input').checked = true;
        darkModeToggle.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.querySelector('input').checked) {
            body.classList.add('dark');
            darkModeToggle.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark');
            darkModeToggle.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Initialize all collapsible sections to be collapsed except "About Me"
    document.querySelectorAll('.section-content').forEach(content => {
        // Keep "About Me" section open by default
        if (content.id !== 'about-content') {
            content.classList.add('hidden');
            const header = content.previousElementSibling; // Get the header associated with this content
            if (header && header.querySelector('.toggle-icon')) {
                header.querySelector('.toggle-icon').textContent = '+';
            }
        } else {
            // Ensure "About Me" section's icon is '-'
            const header = content.previousElementSibling;
            if (header && header.querySelector('.toggle-icon')) {
                header.querySelector('.toggle-icon').textContent = '-';
            }
        }
    });
});
