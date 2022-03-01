gsap.registerPlugin(ScrollTrigger);
const sections = gsap.utils.toArray('.slide');
const numSections = sections.length - 1;
const snapVal = 1 / numSections;

gsap.to(sections, {
      xPercent: -100 * numSections,
      ease: 'none',
      //x: () => -(document.querySelector('.container').scrollWidth - document.documentElement.clientWidth) + "px",
      scrollTrigger: {
        pin:".Parent",
        scrub: true,
        snap:snapVal,
        start: 'top top',
        end: '+=' + document.querySelector('.container').scrollWidth
      },
    });
