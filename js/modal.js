let btn_open = document.getElementById('open_menu');
let nav_wrapper = document.querySelector('.nav_wrapper');
let exit_modal = document.querySelector('.link_exit');

btn_open.addEventListener('click', opemModal);
exit_modal.addEventListener('clikc', exitModal);

function opemModal() {
    nav_wrapper.style = "display: block";
}

function exitModal() {
 nav_wrapper.style = "display: none";
}