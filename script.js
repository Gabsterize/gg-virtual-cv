document.addEventListener('DOMContentLoaded', () => {
    // --- Accessible Section Toggle Functionality ---
    document.querySelectorAll('.section-header').forEach(header => {
        const content = document.getElementById(header.getAttribute('aria-controls'));
        const icon = header.querySelector('.toggle-icon');

        header.addEventListener('click', () => {
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            header.setAttribute('aria-expanded', !isExpanded);
            content.classList.toggle('active');
            if (icon) {
              icon.textContent = !isExpanded ? '-' : '+';
            }
        });
    });

    // --- Set Proficiency Level Text ---
    document.querySelectorAll('.skill-item').forEach(item => {
        const level = parseInt(item.dataset.level, 10);
        const proficiencyTag = item.querySelector('.proficiency-tag');
        let competency;

        switch (level) {
            case 1:
                 competency = 'Intermediate'
                 break;
            case 2:
                competency = 'Proficient';
                break;
            case 3:
                competency = 'Advanced';
                break;
            case 4:
                competency = 'Expert';
                break;

        }

        if (proficiencyTag) {
            proficiencyTag.textContent = competency;
        }
    });
});