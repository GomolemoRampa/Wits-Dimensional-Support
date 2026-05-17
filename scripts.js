// Hide-on-scroll navigation: hides nav on scroll down, shows on scroll up
(function () {
  let lastScroll = 0;
  const delta = 10;
  const body = document.body;

  function onScroll() {
    const st = window.scrollY || document.documentElement.scrollTop;
    if (Math.abs(st - lastScroll) <= delta) return;
    if (st > lastScroll && st > 60) {
      body.classList.add('nav-hidden');
    } else {
      body.classList.remove('nav-hidden');
    }
    lastScroll = st <= 0 ? 0 : st;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();
