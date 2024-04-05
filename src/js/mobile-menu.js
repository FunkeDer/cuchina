const openMenu = document.getElementById('open_menu');
const closeMenu = document.getElementById('close_menu')
const menu = document.getElementById('mobile_menu')

openMenu.addEventListener('click', function(e){
    menu.classList.add('is-vissable'); // Додайте клас, щоб відобразити меню
})

closeMenu.addEventListener('click', function(e){
    menu.classList.remove('is-vissable'); // Видаліть клас, щоб сховати меню
})
