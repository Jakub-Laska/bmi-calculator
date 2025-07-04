 
 
 
 
 
 
 
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

 const headerLogo = document.getElementById('fixed-header-logo');
 headerLogo.addEventListener('click', () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
 });