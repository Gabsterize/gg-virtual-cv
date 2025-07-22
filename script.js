document.addEventListener('DOMContentLoaded', () => {
    // --- Accessible Section Toggle Functionality ---
    document.querySelectorAll('.section-header').forEach(header => {
        const content = document.getElementById(header.getAttribute('aria-controls'));
        const icon = header.querySelector('.toggle-icon');

        header.addEventListener('click', () => {
            const isExpanded = header.getAttribute('aria-expanded') === 'true';

            header.setAttribute('aria-expanded', !isExpanded);
            content.classList.toggle('active');

            // Toggle icon text based on new state
            if (icon) {
              icon.textContent = !isExpanded ? '-' : '+';
            }
        });
    });

    // --- Animate Skill Bars on Scroll ---
    const skillsSection = document.querySelector('#skills');
    const skillItems = document.querySelectorAll('.skill-item');

    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillItems.forEach(item => {
                    const level = item.dataset.level;
                    const skillBar = item.querySelector('.skill-bar');
                    const skillLevelText = item.querySelector('.skill-level-text');

                    if (skillBar) {
                        skillBar.style.width = `${level}%`;
                    }
                    if (skillLevelText) {
                        let competency;
                        const numericLevel = parseInt(level);
                        if (numericLevel >= 90) {
                            competency = 'Expert';
                        } else if (numericLevel >= 80) {
                            competency = 'Advanced';
                        } else if (numericLevel >= 65) {
                            competency = 'Proficient';
                        } else {
                            competency = 'Intermediate';
                        }
                        skillLevelText.textContent = competency;
                    }
                });
                observer.unobserve(skillsSection); // Animate only once
            }
        });
    };

    const skillsObserver = new IntersectionObserver(animateSkills, {
        root: null,
        threshold: 0.2, // Trigger when 20% of the section is visible
    });

    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
});