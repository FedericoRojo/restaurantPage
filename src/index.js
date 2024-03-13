import myImage from './images/restaurant-image.png';
import './styles.css'
import {mainPage} from './mainPage.js';
import { aboutPage } from './aboutPage.js';
import { menuPage } from './menuPage.js';

function cleanContainer(){
    let container = document.getElementById('content');
    container.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function () {
    let btnHome = document.getElementById('btnHome');
    let btnMenu = document.getElementById('btnMenu');
    let btnAbout = document.getElementById('btnAbout');

    mainPage();

    btnHome.addEventListener('click', () => { 
        cleanContainer();
        mainPage();
    });

    btnMenu.addEventListener('click', () => {
        cleanContainer();
        menuPage();
    });

    btnAbout.addEventListener('click', () => {
        cleanContainer();
        aboutPage();
    })
});


/*
let div = document.getElementById('homepage');
let img = document.createElement('img');
img.src = myImage;
img.alt = "Restaurant image"; */
