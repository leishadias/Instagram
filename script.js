var menulist = document.querySelector('#menulist');
var profile = document.querySelector('#profile');

profile.addEventListener('click', showmenu);

function showmenu(){
    console.log('a');
    menulist.classList.toggle('hide');
}
