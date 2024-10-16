const scrollDownBtn = document.querySelector('.scroll-down a');
const sections = document.querySelectorAll('section');

scrollDownBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevenir la acción predeterminada del enlace

        // Encontrar la sección activa
    const currentSectionIndex = [...sections].findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight;
    });

    // Desplazarse a la siguiente sección si hay una
    if (currentSectionIndex !== -1 && currentSectionIndex < sections.length - 1) {
        sections[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
    }
});