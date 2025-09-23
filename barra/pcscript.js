// Variables
const logo = document.querySelector('#menu-container .logo');
const menuHorizontal = document.querySelector('#menu-container .menu-horizontal');
const arrowIcon = document.querySelector('#menu-container .logo i');
const dropdowns = document.querySelectorAll('#menu-container .dropdown');

let isMenuOpen = false;

// Función para abrir y cerrar el menú horizontal al hacer clic en el logo
logo.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;  // Alternar estado del menú
    menuHorizontal.classList.toggle('active', isMenuOpen);
    arrowIcon.classList.toggle('fa-chevron-up', isMenuOpen); 
    arrowIcon.classList.toggle('fa-chevron-down', !isMenuOpen); 
});

// Agregar interactividad a los elementos del menú (para desplegar submenús)
dropdowns.forEach(dropdown => {
    const arrow = dropdown.querySelector('i');

    dropdown.addEventListener('click', (event) => {
        // Si se hizo clic en un enlace <a>, permitir la navegación
        if (event.target.tagName.toLowerCase() === 'a') return;

        event.preventDefault();  // Prevenir acción solo si no es un enlace

        // Cerrar otros submenús
        dropdowns.forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('active');
                otherDropdown.querySelector('i').classList.remove('fa-chevron-up');
                otherDropdown.querySelector('i').classList.add('fa-chevron-down');
            }
        });

        // Alternar el submenú de cada ítem
        dropdown.classList.toggle('active');
        arrow.classList.toggle('fa-chevron-up');
        arrow.classList.toggle('fa-chevron-down');
    });
});

// Cerrar el menú cuando el mouse salga del área de la barra
menuHorizontal.addEventListener('mouseleave', () => {
    if (!isMenuOpen) {
        menuHorizontal.classList.remove('active');
        arrowIcon.classList.remove('fa-chevron-up');
        arrowIcon.classList.add('fa-chevron-down');
    }
});
