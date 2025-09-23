
function initMenu() {
    // Variables
    const logo = document.querySelector('#menu-container .logo');
    const menuHorizontal = document.querySelector('#menu-container .menu-horizontal');
    const arrowIcon = document.querySelector('#menu-container .logo i');
    const dropdowns = document.querySelectorAll('#menu-container .dropdown');

    if (!logo || !menuHorizontal || !arrowIcon) {
        console.warn("El menú aún no está en el DOM.");
        return;
    }

    let isMenuOpen = false;

    // Abrir/cerrar menú al hacer clic en el logo
    logo.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        menuHorizontal.classList.toggle('active', isMenuOpen);
        arrowIcon.classList.toggle('fa-chevron-up', isMenuOpen);
        arrowIcon.classList.toggle('fa-chevron-down', !isMenuOpen);
    });

    // Submenús desplegables
    dropdowns.forEach(dropdown => {
        const arrow = dropdown.querySelector('i');

        dropdown.addEventListener('click', (event) => {
            if (event.target.tagName.toLowerCase() === 'a') return; // permitir navegación

            event.preventDefault();

            // Cerrar otros submenús
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                    const otherArrow = otherDropdown.querySelector('i');
                    if (otherArrow) {
                        otherArrow.classList.remove('fa-chevron-up');
                        otherArrow.classList.add('fa-chevron-down');
                    }
                }
            });

            // Alternar el submenú actual
            dropdown.classList.toggle('active');
            arrow.classList.toggle('fa-chevron-up');
            arrow.classList.toggle('fa-chevron-down');
        });
    });

    // Cerrar menú al salir el mouse
    menuHorizontal.addEventListener('mouseleave', () => {
        if (!isMenuOpen) {
            menuHorizontal.classList.remove('active');
            arrowIcon.classList.remove('fa-chevron-up');
            arrowIcon.classList.add('fa-chevron-down');
        }
    });
}
