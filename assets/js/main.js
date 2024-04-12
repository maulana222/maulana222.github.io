/*==================== MENU SHOW Y HIDDEN ====================*/
const menu = document.getElementById('nav-menu'),
      toggle = document.getElementById('nav-toggle'),
      close = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (toggle) {
    toggle.addEventListener('click', () => {
        menu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (close) {
    close.addEventListener('click', () => {
        menu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const link = document.querySelectorAll('.nav__link')

function action() {
    const menu = document.getElementById('nav-menu')
    menu.classList.remove('show-menu')
}
link.forEach(n => n.addEventListener('click', action))
/*==================== ACCORDION SKILLS ====================*/
// $(document).ready(function(){
//     $(".skills_subtitle").click(function(){
//         // Toggle the next element after the clicked .skills_subtitle
//         $(this).next(".skills_list").slideToggle("slow");
//     });
// });

/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 
