document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline-components, .timeline-point, .timeline-middle");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("timeline-show");
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.3 });

  timelineItems.forEach(item => observer.observe(item));
});
