const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ.123456789!@#$%&*";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");
    
    if (iteration >= event.target.dataset.value.length) { 
      clearInterval(interval);
      
     
      event.target.style.color = "#049344";
    }
    
    iteration += 1 / 3; //
  }, 30);
};

document.querySelector("h6").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");
    
    if (iteration >= event.target.dataset.value.length) { 
      clearInterval(interval);
     
    }
    
    iteration += 1 / 3; // Incrementa mais devagar para um efeito fluido
  }, 30);
};


//scroll
document.addEventListener('DOMContentLoaded', function() {

  const navLinks = document.querySelectorAll('.nav-link');
  

  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  const scrollOffset = navbarHeight + 20;
  
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          
      
          const href = this.getAttribute('href').substring(1); 
          
          
          const sections = {
              'Proposta': 'proposta',
              'Objetivos': 'objetivos',
              'Equipe': 'equipe',
              'Ebook': 'ebooks'
          };
          
       
          const sectionId = sections[this.textContent];
          
          if (sectionId) {
              const section = document.getElementById(sectionId);
              if (section) {
                
                  const sectionPosition = section.getBoundingClientRect().top;
                
                  const scrollPosition = window.pageYOffset;
              
                  const offsetPosition = scrollPosition + sectionPosition - scrollOffset;

                 
                  window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                  });
              }
          }
      });
  });
  

  const downloadButtons = document.querySelectorAll('button');
  
  downloadButtons.forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault();
          
        
          const parentSection = this.closest('.ebookcol');
          let pdfUrl;
          
         
          if (parentSection.id === 'ebook1txt') {
              pdfUrl = 'https://unihacker-club.github.io/files/unihacker_ebook_1.pdf';  
          } else if (parentSection.id === 'ebook2txt') {
              pdfUrl = 'https://unihacker-club.github.io/files/unihacker_ebook_2.pdf'; 
          }
          
   
          if (pdfUrl) {
              window.location.href = pdfUrl;
          }
      });
  });
});