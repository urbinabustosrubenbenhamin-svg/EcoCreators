// Shared small helpers: mobile menu toggle
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    const toggles = document.querySelectorAll('.menu-toggle');
    toggles.forEach(btn=>{
      // Find nav in the same header or parent
      let nav = btn.parentElement.querySelector('nav');
      if(!nav){
        nav = btn.nextElementSibling;
        if(nav && nav.tagName !== 'NAV') nav = null;
      }
      if(!nav) return;
      
      // Toggle menu on button click
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        const isOpen = nav.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(isOpen));
      });
      
      // Close menu when clicking a link
      nav.querySelectorAll('a').forEach(a=> {
        a.addEventListener('click', ()=>{
          nav.classList.remove('open');
          btn.setAttribute('aria-expanded','false');
        });
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', (e)=>{
        if(!nav.contains(e.target) && e.target !== btn){
          nav.classList.remove('open');
          btn.setAttribute('aria-expanded','false');
        }
      });
    });
  });
})();
