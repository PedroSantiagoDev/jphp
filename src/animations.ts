import { animate } from 'motion';

export function setupAnimations() {
  document.addEventListener('DOMContentLoaded', () => {
    // Avatar animation
    animate(
      '[data-animation="avatar"]',
      { opacity: [0, 1], scale: [0.8, 1] },
      { duration: 0.8, ease: 'easeOut', delay: 0.3 }
    );

    // Staggered text animation
    animate(
      '[data-animation="text-item"]',
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, ease: 'easeOut', delay: (i) => 0.5 + i * 0.2 }
    );

    // Underline animation
    animate(
      '[data-animation="underline"]',
      { scaleX: [0, 1] },
      { duration: 0.8, ease: 'easeOut', delay: 1.5 }
    );

    // Wave animation
    animate(
      '#wave',
      { rotate: [0, 14, -8, 14, -4, 10, 0] },
      { duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }
    );

    // Link hover animation
    const links = document.querySelectorAll('.link-item');
    links.forEach((link) => {
      const underline = link.querySelector('.link-underline') as HTMLElement;
      link.addEventListener('mouseenter', () => {
        animate(underline, { scaleX: 1 }, { duration: 0.3 });
      });
      link.addEventListener('mouseleave', () => {
        animate(underline, { scaleX: 0.3 }, { duration: 0.3 });
      });
    });
  });
}
