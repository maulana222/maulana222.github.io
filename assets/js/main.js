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
    // Inisialisasi lightGallery untuk semua container gallery
    const galleryContainers = document.querySelectorAll('.gallery-container');
    galleryContainers.forEach(container => {
      lightGallery(container, {
        speed: 500,
        download: false,
        counter: false,
        selector: 'a'
      });
    });

    // Fungsi untuk memuat data dari project.json
    fetch('project.json')
      .then(response => response.json())
      .then(data => {
        const projects = data.projects[0].projects;
        const projectContent = document.getElementById('project-content');

        projects.forEach(project => {
          const card = document.createElement('div');
          card.classList.add('card');

          const cardHeader = document.createElement('div');
          cardHeader.classList.add('card-header', 'gallery-container');

          const link = document.createElement('a');
          link.href = project.image;
          link.setAttribute('data-lg-size', '1600-2400');

          const img = document.createElement('img');
          img.src = project.image;
          img.alt = project.altText || '';
          img.width = 100;

          link.appendChild(img);
          cardHeader.appendChild(link);

          const cardBody = document.createElement('div');
          cardBody.classList.add('card-body');

          const titleContainer = document.createElement('div');
          const title = document.createElement('h2');
          title.classList.add('title-project');
          title.textContent = project.title;
          
          const description = document.createElement('p');
          description.textContent = project.description;

          titleContainer.appendChild(title);
          titleContainer.appendChild(description);

          const detailLink = document.createElement('a');
          detailLink.classList.add('btn', 'w-100', 't-center');
          detailLink.href = project.detailLink;
          detailLink.textContent = 'Detail';

          cardBody.appendChild(titleContainer);
          cardBody.appendChild(detailLink);

          card.appendChild(cardHeader);
          card.appendChild(cardBody);

          projectContent.appendChild(card);

          // Inisialisasi lightGallery untuk card baru
          lightGallery(cardHeader, {
            speed: 500,
            download: false,
            counter: false,
            selector: 'a'
          });
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

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.project-content');
    const cards = document.querySelectorAll('.card');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 20; // Including gap
    const maxIndex = cards.length - 3; // Show 3 cards at a time

    // Initialize button states
    updateButtons();

    function updateButtons() {
      prevButton.style.opacity = currentIndex === 0 ? '0.5' : '1';
      prevButton.style.cursor = currentIndex === 0 ? 'default' : 'pointer';
      nextButton.style.opacity = currentIndex === maxIndex ? '0.5' : '1';
      nextButton.style.cursor = currentIndex === maxIndex ? 'default' : 'pointer';
    }

    function slideCards(direction) {
      if (direction === 'next' && currentIndex < maxIndex) {
        currentIndex++;
      } else if (direction === 'prev' && currentIndex > 0) {
        currentIndex--;
      }
      
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      updateButtons();
    }

    prevButton.addEventListener('click', () => slideCards('prev'));
    nextButton.addEventListener('click', () => slideCards('next'));
  });