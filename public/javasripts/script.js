const slider_raz = document.querySelector('.slider-raz');
const slider_dwa = document.querySelector('.slider-dwa');
const slider_trzy = document.querySelector('.slider-trzy');
const slider_cztery = document.querySelector('.slider-cztery');
const slider_piec = document.querySelector('.slider-piec');
function start(){
    alert('Ok');
    slider_raz.classList.add('slider-raz-anim');
    slider_dwa.classList.add('slider-dwa-anim');
    slider_trzy.classList.add('slider-trzy-anim');
    slider_cztery.classList.add('slider-cztery-anim');
    slider_piec.classList.add('slider-piec-anim');
};
setTimeout(start, 5000);