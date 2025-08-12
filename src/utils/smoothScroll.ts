export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
};

export const initSmoothScrolling = () => {
  // Add smooth scrolling to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = (this as HTMLAnchorElement).getAttribute('href')?.slice(1);
      if (targetId) {
        smoothScrollTo(targetId);
      }
    });
  });
};