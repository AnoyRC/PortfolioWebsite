gsap.registerPlugin(ScrollTrigger);
const sections = gsap.utils.toArray('.slide');
const numSections = sections.length - 1;
const snapVal = 1 / numSections;
var Design1 = document.getElementById('Design1');
var Design2 = document.getElementById('Design2');
var Arrow1 = document.querySelector('.col-1 img');
var Arrow2 = document.querySelector('#Page-Info img');
var Arrow3 = document.getElementById('arrow');
var Text_Works = document.querySelector('.col-5 h1');
var Section3 = document.getElementById('panelThree');
var Section4 = document.getElementById('panelFour');

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

gsap.to(Design1, 7, {rotation:"360", ease:Linear.easeNone, repeat:-1});

var tl = gsap.timeline({repeat: -1, repeatDelay: 0.5});
tl.from(Design2, {opacity: 0, duration: 0.3});
tl.to(Design2, {opacity: 1, duration: 0.2});
tl.from(Design2, {y: 0, duration: 0.75});
tl.to(Design2, {y: -50, duration: 0.75});
tl.to(Design2, {opacity: 0, duration: 1});

var t2 = gsap.timeline({repeat: -1, repeatDelay:0.5});
t2.from(Arrow1, {opacity: 0, duration: 0.3});
t2.to(Arrow1, {opacity: 1, duration: 0.2});
t2.from(Arrow1, {x: 0, duration: 0.75});
t2.to(Arrow1, {x: 50, duration: 0.75});
t2.to(Arrow1, {opacity: 0, duration: 0.5});

var t3 = gsap.timeline({repeat: -1, repeatDelay:0.5});
t3.from(Arrow2, {opacity: 0, duration: 0.3});
t3.to(Arrow2, {opacity: 1, duration: 0.2});
t3.from(Arrow2, {x: 0, duration: 0.75});
t3.to(Arrow2, {x: 50, duration: 0.75});
t3.to(Arrow2, {opacity: 0, duration: 0.5});

var t4 = gsap.timeline({repeat: -1, repeatDelay:1});
t4.from(Arrow3, {opacity: 0, duration: 0.5});
t4.to(Arrow3, {opacity: 1, duration: 0.2});
t4.from(Arrow3, {x: 0, duration: 1});
t4.to(Arrow3, {x: 50, duration: 1});
t4.to(Arrow3, {opacity: 0, duration: 0.5});

let t5 = gsap.timeline({
    scrollTrigger: {
      trigger : Text_Works,
      //toggleActions : "play restart resume reset",
      start :'+=' + 1.5*document.querySelector('.flexBox-3').scrollWidth,
      end: '+=' + 2.5*document.querySelector('.flexBox-3').scrollWidth,
      scrub:true
  },
});
t5.from(Text_Works,{ duration: 2, y: -500  });
t5.to(Text_Works,{duration: 2 , y: 0 });

let t6 = gsap.timeline({
    scrollTrigger: {
      trigger : Text_Works,
      //toggleActions : "play restart resume reset",
      start :'+=' + 1.5*document.querySelector('.flexBox-3').scrollWidth,
      end: '+=' + 2.5*document.querySelector('.flexBox-3').scrollWidth,
      scrub:true
  },
});
t6.from(Text_Works,{ duration: 2, opacity : 1 });
t6.to(Text_Works,{duration: 2 , opacity : 0 });
