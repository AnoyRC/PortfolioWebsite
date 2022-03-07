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
var Ele1 = document.querySelector('.d1');
var Ele2 = document.querySelector('.d2');
var Ele3 = document.querySelector('.d3');
var Text_Process = document.querySelector("#Page-Info h1");
var Heading = document.querySelector(".col-1 h1");

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
      start :'+=' + 1.4*document.querySelector('.flexBox-3').scrollWidth,
      end: '+=' + 2.4*document.querySelector('.flexBox-3').scrollWidth,
      scrub:true
  },
});
t6.from(Text_Works,{ duration: 2, opacity : 1 });
t6.to(Text_Works,{duration: 2 , opacity : 0 });

let t7 = gsap.timeline({
  ease:1,
  scrollTrigger:{
    trigger : Ele1,
    start :'+=' + 0*document.querySelector('.Parent').scrollWidth,
    end: '+=' + 0.5*document.querySelector('.Parent').scrollWidth,
    scrub:1.5
  },
});
t7.from(Ele1,{ duration: 2, x: +600  });
t7.to(Ele1,{duration: 2 , x: 0 });
t7.to(Ele1,{duration: 2 , x: -600 });

let t8 = gsap.timeline({
  ease:4,
  scrollTrigger:{
    trigger : Ele2,
    start :'+=' + 0*document.querySelector('.Parent').scrollWidth,
    end: '+=' + 0.5*document.querySelector('.Parent').scrollWidth,
    scrub:1.5
  },
});
t8.from(Ele2,{ duration: 2, x: +1000   });
t8.to(Ele2,{duration: 2 , x: 0 });
t8.to(Ele2,{duration: 2 , x: -1000 });

let t9 = gsap.timeline({
  ease:1,
  scrollTrigger:{
    trigger : Ele3,
    start :'+=' + 0*document.querySelector('.Parent').scrollWidth,
    end: '+=' + 0.5*document.querySelector('.Parent').scrollWidth,
    scrub:1.5
  },
});
t9.from(Ele3,{ duration: 2, x: +1400  });
t9.to(Ele3,{duration: 2 , x: 0  });
t9.to(Ele3,{duration: 2 , x: -1400  });



let t10 = gsap.timeline({
    scrollTrigger: {
      trigger : Text_Process,
      //toggleActions : "play restart resume reset",
      start :'+=' + 0*document.querySelector('.flexBox-3').scrollWidth,
      end: '+=' + 1*document.querySelector('.flexBox-3').scrollWidth,
      scrub:true
  },
});
t10.from(Text_Process,{ duration: 2, y: +500  });
t10.to(Text_Process,{duration: 2 , y: 0 });

let t11 = gsap.timeline({
    scrollTrigger: {
      trigger : Text_Process,
      //toggleActions : "play restart resume reset",
      start :'+=' + 0.1*document.querySelector('.flexBox-3').scrollWidth,
      end: '+=' + 1.1*document.querySelector('.flexBox-3').scrollWidth,
      scrub:true
  },
});
t11.from(Text_Process,{ duration: 2, opacity : 1 });
t11.to(Text_Process,{duration: 2 , opacity : 0 });

let t12 = gsap.timeline({
  scrollTrigger : {
    trigger : Heading,
    start :'+=' + 0*document.querySelector('.Parent').scrollWidth,
    end: '+=' + 0.2*document.querySelector('.Parent').scrollWidth,
    toggleActions : "play reset play none",
  }
});
t12.from(Heading,{duration : 1 , y : -500 });
t12.to(Heading,{duration : 1 , y :0 });

var t13 = gsap.timeline({repeat: -1, repeatDelay: 1});
t13.from(".isActive1", {y:500, duration: 1});
t13.to(".isActive1", {y:0, duration: 1});
t13.to(".isActive1",{opacity:0, duration: 1});
t13.from(".isActive2", {y:500, duration: 1});
t13.to(".isActive2", {y:0, duration: 1});
t13.to(".isActive2",{opacity:0, duration: 1});
t13.from(".isActive3", {y:500, duration: 1});
t13.to(".isActive3", {y:0, duration: 1});
t13.to(".isActive3",{opacity:0, duration: 1});

let t14 = gsap.timeline({
  scrollTrigger : {
    trigger : ".col-1 h2",
    start :'+=' + -0.1*document.querySelector('.Parent').scrollWidth,
    end: '+=' + 0.2*document.querySelector('.Parent').scrollWidth,
    toggleActions : "play reset play none",
  }
});
t14.from(".col-1 h2",{duration : 1 , x : -500 });
t14.to(".col-1 h2",{duration : 1 , x :0 });

let t15 = gsap.timeline({
  scrollTrigger : {
    trigger : ".col-1 h3",
    start :'+=' + -0.1*document.querySelector('.Parent').scrollWidth,
    end: '+=' + 0.2*document.querySelector('.Parent').scrollWidth,
    toggleActions : "play reset play none",
  }
});
t15.from(".col-1 h3",{duration : 1 , x : -500 });
t15.to(".col-1 h3",{duration : 1 , x :0 });

let t16 = gsap.timeline({
  scrollTrigger : {
    trigger : ".col-1 h2",
    start :'+=' + -0.1*document.querySelector('.Parent').scrollWidth,
    end: '+=' + 0.397*document.querySelector('.Parent').scrollWidth,
    toggleActions : "play reset play none",
    markers: true
  }
});
t16.from(".col-2 img",{duration : 1 , opacity : 0});
t16.to(".col-2 img",{duration : 10 , opacity : 1 });
