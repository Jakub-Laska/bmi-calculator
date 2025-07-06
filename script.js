 
 
 
 
 
 
 
 //  FIXED HEADER TOGGLE
 
 const header = document.getElementById('fixed-header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const scrolledPastVH = window.scrollY > window.innerHeight;

    if (!scrolledPastVH) {
      // Hide header completely before 100vh
    //   header.classList.remove('visible');
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

// dark mode

const darkmodeBtn =  document.getElementById('dark-mode');
let isDark = false;

darkmodeBtn.addEventListener('click', () => {
    darkmodeBtn.classList.toggle('light-mode-btn-icon');
    const whoGraph = document.getElementById('who-graph');
    whoGraph.classList.toggle('dark-who-graph');

if (isDark) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
  isDark = !isDark;
})

function enableDarkMode() {
  const r = document.documentElement;
  r.style.setProperty('--cold-blue', '#1e2a38');
  r.style.setProperty('--primary-blue', '#2e3b4e');
  r.style.setProperty('--primary-white', '#1a1a1a');
  r.style.setProperty('--primary-font-color', '#f0f0f0');
  r.style.setProperty('--gradient', 'linear-gradient(to bottom right, #1a1a1a 20%, #2e3b4e 60%, #3b4d61 100%)');
}
function enableLightMode() {
  const r = document.documentElement;
  r.style.setProperty('--cold-blue', '#f0f8ff');
  r.style.setProperty('--primary-blue', '#d0e9ff9a');
  r.style.setProperty('--primary-white', '#fff');
  r.style.setProperty('--primary-font-color', '#000');
  r.style.setProperty('--gradient', 'linear-gradient(to bottom right, #ffffff 20%, #d0e9ffcc 60%, #a3d4ff80 100%)');
}
