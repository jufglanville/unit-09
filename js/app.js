let width = screen.width;
let height = screen.height;

// Hamburger Menu Functions

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}
  
/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

// ScrollMagic Functions

// let tl = new TimelineMax({onUpdate:updatePercentage});
let tl = new TimelineMax();
let tl2 = new TimelineMax();
let tl3 = new TimelineMax();
let tl4 = new TimelineMax();

let td1 = new TimelineMax({onUpdate:updatePercentage});

let tl5 = new TimelineMax();
let tl6 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('.main-background-text', 1, {opacity: 0, y: 200});
tl.from('.icons', 1.5, {opacity: 0, scale: 0});
tl.from('.logo', 1.5, {opacity: 0, scale: 0}, 0);

tl2.from('#about', 0.5, {opacity: 0, x: width});
tl2.from('.profile-img', 1, {opacity: 0, x: -width}, 0.5);
tl2.from('.intro-text', 1, {opacity: 0, x: width}, 0.5);
tl2.from('.left', 1.5, {opacity: 0, y: width}, 1.5);
tl2.from('.right', 1.5, {opacity: 0, y: -width}, 1.5);

tl3.from('#projects', 1, {opacity: 0, x: -width});

tl4.from('#timeline', 1, {opacity: 0, x: width});

tl5.from('#contact', 1, {opacity: 0, x: -width});

// Timeline Trigger Points
td1.from('#year-10', 0.5, {opacity: 0, y: 60});
td1.from('#guitar', 2, {opacity: 0, x: -width, scale: 0}, 3);
td1.from('#acm', 2, {opacity: 0, x: width}, 3);
td1.to('#year-10', 0.5, {opacity: 0, y: -60});

td1.from('#year-11', 0.5, {opacity: 0, y: 50},5);
td1.to('#year-11', 0.5, {opacity: 0, y: -60},5.5);

td1.from('#year-12', 0.5, {opacity: 0, y: 50});
td1.from('.lights', 1.5, {opacity: 0, scale: 0, y: -height});

td1.to('#year-12', 0.5, {opacity: 0, y: -60});

td1.from('#year-13', 0.5, {opacity: 0, y: 50}, 9);
td1.to('#year-13', 0.5, {opacity: 0, y: -60});

td1.from('#year-14', 0.5, {opacity: 0, y: 50}, 10);
td1.from('#hat', 2.5, {opacity: 0, y: -height}, 10);
td1.from('#diploma', 2.5, {opacity: 0, scale: 0, y: height}, 10)
td1.to('#year-14', 5, {opacity: 0, y: -60}, 13.5);
td1.to('#guitar', 1.5, {opacity: 0, x: width}, 12.5);
td1.to('#acm', 1.5, {opacity: 0, x: -width}, 12.5);
td1.to('#hat', 2.5, {opacity: 0, scale: 4}, 12.5);
td1.to('#diploma', 2.5, {opacity: 0, scale: 3}, 12.5);
td1.to('.lights', 1, {scale: 0}, 12.5);

td1.from('#year-15', 1.5, {opacity: 0, y: 50}, 15.5);
td1.from('#rainbow', 0.5, {opacity: 0, scale: 0, y: height}, 14);
td1.from('#clover', 0.5, {opacity: 0, scale: 0, y: height}, 14);
td1.from('#gold', 0.5, {opacity: 0, scale: 0, y: height}, 14);
td1.from('#plane', 5, {x: -(2*width), scale: 0}, 15);
td1.from('#flag', 5, {opacity: 0, x: -width, scale: 0},15);
td1.from('#stc', 1.5, {opacity: 0, scale: 0, x: width},20);
td1.from('#wax', 1.5, {opacity: 0, scale: 0, y: -height},22);
td1.from('#rock', 1.5, {opacity: 0, scale: 0, x: -width},24);
td1.to('#year-15', 0.5, {opacity: 0, y: -60});

td1.from('#year-16', 0.5, {opacity: 0, y: 50});
td1.to('#year-16', 0.5, {opacity: 0, y: -60});

td1.from('#year-17', 0.5, {opacity: 0, y: 50});

td1.to('#rainbow', 1, {opacity: 0, x: -width},28);
td1.to('#clover', 1, {opacity: 0, x: -width},28);
td1.to('#gold', 1, {opacity: 0, x: -width},28);
td1.to('#flag', 1, {opacity: 0, x: -width},28);
td1.to('#stc', 1, {opacity: 0, x: -width},28);
td1.to('#wax', 1, {opacity: 0, x: -width},28);
td1.to('#rock', 1, {opacity: 0, x: -width},28);

td1.to('#boat', 5, {x: -(2*width)}, 28.5);
td1.from('#england', 5, {x: (2*width)}, 27);

td1.from('#vw', 2, {opacity: 0, scale: 0, y: height}, 32)
td1.to('#year-17', 0.5, {opacity: 0, y: -60}, 35.5);

td1.from('#year-18', 0.5, {opacity: 0, y: 50},35.5);
td1.to('#england', 0.5, {opacity: 0}, 34);
td1.to('#vw', 2.5, {opacity: 0, x: width}, 36)
td1.from('#paycircle', 2.5, {opacity: 0, x: -width, scale: 0}, 36)
td1.to('#year-18', 0.5, {opacity: 0, y: -60}, 40);

td1.from('#year-19', 0.5, {opacity: 0, y: 50}, 40.5);
td1.to('#paycircle', 0.5, {opacity: 0, scale: 0}, 40.5);
td1.from('#treehouse', 2.5, {opacity: 0, scale: 0, y: -height}, 40.5);

tl5.to('#email', 1, {opacity: 0}, 0);
tl5.from('#email-2', 1, {opacity: 0, scale: 0, y: height}, 0);
tl5.to('.scroll-icon', 1, {opacity: 0}, 0);

const scene1 = new ScrollMagic.Scene({
    triggerElement: ".trigger-1",
    triggerHook: "0"
})
.addIndicators()
.setPin(".main-background-text")
.setTween(tl)
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".trigger-2",
    triggerHook: "0"
})
.addIndicators()
.setTween(tl2)
.addTo(controller);

const scene3 = new ScrollMagic.Scene({
    triggerElement: ".trigger-3",
    triggerHook: "0"
})
.addIndicators()
.setTween(tl3)
.addTo(controller);

const scene4 = new ScrollMagic.Scene({
    triggerElement: ".trigger-4",
    triggerHook: "0"
})
.addIndicators()
.setTween(tl4)
.addTo(controller);

const scene5 = new ScrollMagic.Scene({
    triggerElement: ".trigger-5",
    triggerHook: "0"
})
.addIndicators()
.setTween(tl5)
.addTo(controller);

// const scene6 = new ScrollMagic.Scene({
//     triggerElement: ".trigger-5",
//     triggerHook: "0"
// })
// .addIndicators()
// .setTween(tl6)
// .addTo(controller);

const timelineScene = new ScrollMagic.Scene({
    triggerElement: ".trigger-date", 
    triggerHook: "0",
    duration: "90%"
})
.setPin(".trigger-date")
.addIndicators()
.setTween(td1)
.addTo(controller);

function updatePercentage() {
    td1.progress();
    console.log(tl.progress());
}

// Project Carousel Functions

$(document).ready(function() {
    $('.jR3DCarouselGalleryCustom').jR3DCarousel({
        width: 700,
        height: 700,
        slideLayout: 'contain',
        animation: 'slide3D',
        animationCurve: 'ease',
        animationDuration: 1600,
        animationInterval: 1500,
        slideClass: 'jR3DCarouselCustomSlide',
        autoplay: true
    });
});

