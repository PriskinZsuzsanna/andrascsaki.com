
//menu
const openIcon = document.querySelector('.hamburger')
const closeIcon = document.querySelector('.close')
const nav = document.querySelector('nav')

nav.addEventListener('click', () => {
    toggleMenuIcon()
    toggleUl()
})

function toggleMenuIcon() {
    if (openIcon.classList.contains('hide')) {
        openIcon.classList.remove('hide')
    } else {
        openIcon.classList.add('hide')
    }

    if (closeIcon.classList.contains('hide')) {
        closeIcon.classList.remove('hide')
    } else {
        closeIcon.classList.add('hide')
    }
}

function toggleUl() {
    if (nav.classList.contains('open')) {
        nav.classList.remove('open')
    } else {
        nav.classList.add('open')
    }
} 

//Tablinks about
const tablinks = document.querySelectorAll('.tab-links');
const tabcontents = document.querySelectorAll('.tab-contents');

function opentab (tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

};

//Tablinks music: with addEventListener - forEach
const tabMusicLinks = document.querySelectorAll(".tab-music-links");
const tabMusicSections = document.querySelectorAll(".tab-music-contents");

const handleButtonClickMusicSections = (e) => {
  const tabMusicTargetSection = e.target.getAttribute("data-section");
  const musicSection = document.querySelector(tabMusicTargetSection);
 
  tabMusicSections.forEach((s) => s.classList.remove("active-tab"));
  tabMusicLinks.forEach((b) => b.classList.remove("active-link"));
  e.target.classList.add("active-link");
  musicSection.classList.add("active-tab");
};

tabMusicLinks.forEach((tab) => {
  tab.addEventListener("click", handleButtonClickMusicSections);
}); 

//scroll
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 0)
  });


//theme oggle
const sun = document.querySelector('.fa-sun')
const moon = document.querySelector('.fa-moon')

sun.addEventListener('click', () => {
    sun.classList.add('hide')
    moon.classList.remove('hide')
    document.body.classList.remove('dark')
})

moon.addEventListener('click', () => {
    moon.classList.add('hide')
    sun.classList.remove('hide')
    document.body.classList.add('dark')
})