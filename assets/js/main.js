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
















document.addEventListener('DOMContentLoaded', function() {
    fetch('project.json')
        .then(response => response.json())
        .then(data => {
            const projects = data.projects[0].projects;
            const projectContent = document.getElementById('project-content');

            projects.forEach(project => {
                const card = document.createElement('div');
                card.classList.add('card');

                const cardHeader = document.createElement('div');
                cardHeader.classList.add('card-header');

                const img = document.createElement('img');
                img.src = project.image;
                img.alt = project.altText;
                img.width = 100; // Adjust as needed
                cardHeader.appendChild(img);

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const description = document.createElement('p');
                description.textContent = project.description;
                cardBody.appendChild(description);

                const detailLink = document.createElement('a');
                detailLink.classList.add('btn');
                detailLink.href = project.detailLink;
                detailLink.textContent = 'Lihat Detail';
                cardBody.appendChild(detailLink);

                card.appendChild(cardHeader);
                card.appendChild(cardBody);

                projectContent.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading project data:', error));
});
/*==================== fullcrenn ====================*/
lightGallery(document.querySelector('.lightgallery-1', {
    control: false,
}));
lightGallery(document.querySelector('.detail_project__img', {
    control: false,
}));
lightGallery(document.getElementById('lightGallery'), {
    exThumbImage: 'data-external-thumb-image'
})