 
 
 
 
 
 
 
 //  FIXED HEADER TOGGLE
 
 const header = document.getElementById('fixed-header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const scrolledPastVH = window.scrollY > window.innerHeight;

    if (!scrolledPastVH) {
      // Hide header completely before 100vh
      header.classList.remove('visible');
    } else {
      header.classList.add('visible'); // Ensure it's enabled

      if (window.scrollY > lastScrollY) {
        // Scrolling down
      header.classList.remove('visible');

      } else {
        // Scrolling up
      header.classList.add('visible');
      }
    }

    lastScrollY = window.scrollY;
  });


// go to the top
 const headerLogo = document.getElementById('fixed-header-logo');
 headerLogo.addEventListener('click', () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
 });


// mbi formula buttons

const imperialBtn = document.getElementById('imperial-btn');

imperialBtn.addEventListener('click', () => {
    const metricFormula = document.getElementById('metric-formula');
    metricFormula.classList.toggle('hidden');
    const imperialFormula = document.getElementById('imperial-formula');
    imperialFormula.classList.toggle('hidden');
    imperialBtn.classList.toggle('disabled-btn');
    metricBtn.classList.toggle('disabled-btn');

})

const metricBtn = document.getElementById('metric-btn');

metricBtn.addEventListener('click', () => {
    const metricFormula = document.getElementById('metric-formula');
    metricFormula.classList.toggle('hidden');
    const imperialFormula = document.getElementById('imperial-formula');
    imperialFormula.classList.toggle('hidden');
    metricBtn.classList.toggle('disabled-btn');
    imperialBtn.classList.toggle('disabled-btn');

})