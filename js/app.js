let width = screen.width;

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
let tl5 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('.main-background-text', 1, {opacity: 0, y: -200});
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

// tl.from('.intro', 1.5, {opacity: 0});
// tl.from('.profile-img', 2, {y: -300, opacity: 0});
// tl.from('.intro-text', 2, {y: 300, opacity: 0}, "=-2");
// tl.from('#html', 2.5, {x: -200, opacity: 0});
// tl.from('span', 1, { width: 0}, "=-.5");
// tl.from('#office', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
// tl.from('#building', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");

// tl2.from("#html", 1, {opacity: 0, scale: 0});
// tl2.to("#box", .5, {left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)'})

const scene1 = new ScrollMagic.Scene({
    triggerElement: ".trigger-1",
    triggerHook: "0"
})
.addIndicators()
.setPin(".main-background")
.setTween(tl)
.addTo(controller);

// const scene2 = new ScrollMagic.Scene({
//     triggerElement: ".intro"
// })
// .setTween(tl2)
// .addTo(controller);


// function updatePercentage() {
//     //percent.innerHTML = (tl.progress() *100 ).toFixed();
//     tl.progress();
//     console.log(tl.progress());
// }

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
        autoplay: false,
        onSlideShow: slideShownCallback
    });
    function slideShownCallback($slide) {
        console.log("Slide shown: "+$slide.find('img').attr('src'));
    }
});
