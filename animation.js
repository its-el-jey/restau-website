/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});


sr.reveal('.heading-txt', {}); 
sr.reveal('.heading-txt2', {}); 
sr.reveal('.heading-txt3L', {}); 
sr.reveal('.body-txt',{interval: 400}); 
sr.reveal('.body-txt2',{interval: 400}); 
sr.reveal('.btn',{delay: 400, interval: 800}); 

