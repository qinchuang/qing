import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import '../css/css.css';
import '../css/index.css';
import 'Swiper/dist/css/swiper.css';
import Swiper from 'Swiper/dist/js/swiper.js';



var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true
});