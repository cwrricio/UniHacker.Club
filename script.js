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
      
      // Alterar a cor do texto ao final do efeito
      event.target.style.color = "#049344";
    }
    
    iteration += 1 / 3; // Incrementa mais devagar para um efeito fluido
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