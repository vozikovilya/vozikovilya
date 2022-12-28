const body = document.querySelector('#body');
const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

const headerNav = header.querySelector('.header__nav');
const headerNavBtn = header.querySelector('.header__nav-mob');

header.addEventListener('click', (e) => {

    if(headerNavBtn.classList.contains('active') && e.target !== headerNav) {
        body.classList.remove('no-scroll');
        header.classList.remove('active');
        headerNavBtn.classList.remove('active');
        headerNav.classList.remove('active');
    } else if(e.target === headerNavBtn && !headerNavBtn.classList.contains('active')) {
        body.classList.add('no-scroll');
        header.classList.add('active');
        headerNavBtn.classList.add('active');
        headerNav.classList.add('active');
    }
});

// Selected

const select = document.querySelector('#select');
const selectInput = select.querySelector('#select-input');
const selectReset = select.querySelector('.select__reset');
const optionsList = document.querySelectorAll('.option__item');

window.addEventListener('click', (e) => {
    if(select.contains(e.target)) {
        event.preventDefault();
        
        if(!selectReset.contains(e.target)) {
            select.classList.toggle('active');
        }
    } else {
        select.classList.remove('active');
    }
});

optionsList.forEach(option => {
    option.addEventListener('click', () => {
        selectInput.innerHTML = option.querySelector('label').innerHTML;
        selectInput.classList.add('visible');
        selectReset.classList.add('visible');
    });
});

selectReset.addEventListener('click', () => {
    selectInput.innerHTML = '';
    selectInput.classList.remove('visible');
    selectReset.classList.remove('visible');
});

// Input

const allInput = document.querySelectorAll('.form__box-input');
const allBtnResetInput = document.querySelectorAll('.form__box-reset');

allInput.forEach(input => {
    input.addEventListener('input', () => {
        const inputBox = input.closest('.form__box');
        const btnResetInput = inputBox.querySelector('.form__box-reset');
        
        if(input.value === '') {
            btnResetInput.classList.remove('visible');
        } else {
            btnResetInput.classList.add('visible');
        };
    });
});

allBtnResetInput.forEach(btn => {
    btn.addEventListener('click', () => {
        event.preventDefault();

        const inputBox = btn.closest('.form__box');
        const input = inputBox.querySelector('input');

        input.value = '';
        btn.classList.remove('visible');
    });
});

// Slider

const slider = document.querySelector('#slider');
const sliderNumber = document.querySelector('#slider-number');

window.addEventListener('load', () => {
    slider.value = parseInt(sliderNumber.innerHTML);
});

slider.addEventListener('input', () => {
    sliderNumber.innerHTML = slider.value + ' %';
});

// File

const inputFile = document.querySelector('#file');
const labelFileText = document.querySelector('.file__label-text');

inputFile.addEventListener('change', function() {
    if (inputFile.value) {
        labelFileText.innerHTML = inputFile.files[0].name;
    } else {
        labelFileText.innerHTML = 'Прикрепить файл';
    }
});