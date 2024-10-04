export function initNavbarScroll() {
  const navbar = document.querySelector('.navbar_background') as HTMLElement;
  const brandWrapper = document.querySelector('.navbar_brand-wrapper') as HTMLElement;
  const menuWrapper = document.querySelector('.navbar_menu-wrapper') as HTMLElement;

  if (!navbar || !brandWrapper || !menuWrapper) return;

  let lastScrollTop = 0;
  const scrollThreshold = 50;

  const animateNavbar = (direction: 'up' | 'down') => {
    const yValue = direction === 'down' ? -4.7 : 0;
    const ease = direction === 'down' ? 'ease-out' : 'ease-out';
    const duration = 400; // 400ms

    [navbar, brandWrapper, menuWrapper].forEach((element) => {
      element.style.transition = `transform ${duration}ms ${ease}`;
      element.style.transform = `translateY(${yValue}rem)`;
    });
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(scrollTop - lastScrollTop) <= scrollThreshold) return;

    if (scrollTop > lastScrollTop) {
      animateNavbar('down');
    } else {
      animateNavbar('up');
    }

    lastScrollTop = scrollTop;
  };

  window.addEventListener('scroll', handleScroll);
}
