function onToggleMenu(e) {
    const navLinks =  document.querySelector('.navlist')
    const dropDown = document.querySelector('.dropdown-menu')
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.addEventListener('click', () => {
    dropDown.classList.toggle('top-[9%]')
    })
}