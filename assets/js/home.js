(() => {
  const links = [...document.querySelectorAll('.home-header a')];
  const sections = links.slice(1).map(link => document.querySelector(link.hash));
  let queued = false;
  function update() {
    let current = 'home';
    if (window.scrollY > 5) for (const section of sections) if (section.getBoundingClientRect().top <= 130) current = section.id;
    if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) current = 'services';
    for (const link of links) {
      if (link.hash === '#' + current) {
        if (!link.hasAttribute('aria-current')) {
          const nav = link.parentElement;
          const rect = link.getBoundingClientRect();
          const bounds = nav.getBoundingClientRect();
          if (rect.left < bounds.left || rect.right > bounds.right) nav.scrollLeft += rect.left - bounds.left - 20;
        }
        link.setAttribute('aria-current', 'location');
      }
      else link.removeAttribute('aria-current');
    }
    queued = false;
  }
  window.addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(update); } }, {passive:true});
  window.addEventListener('resize', update);
  update();
})();
