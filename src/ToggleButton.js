function onToggleMenu(e) {
    const NavLinks =  document.querySelector('.nav-links')
    e.name = e.name === 'menu' ? 'close' : 'menu'
    NavLinks.classList.toggle('top-[9%]')
}