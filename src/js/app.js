import sayHello from './lib/sayHello.js';

sayHello();

// Script for preloader
// In html tag "body" have id='loading'
// For understand how time need -- must test in crossbrowser (chrome extention, network)

document.addEventListener('DOMContentLoaded', function() {
  toggleMenu();
  setTimeout(function() {
    'use strict';
    var body = document.getElementById('loading');
    body.classList.add('loaded');
  }, 1000);
});

