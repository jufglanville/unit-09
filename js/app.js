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

let td1 = new TimelineMax({onUpdate:updatePercentage});

let tl5 = new TimelineMax();
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

td1.from('#year-10', 0.5, {opacity: 0, y: 50});

td1.from('#guitar', 1.5, {opacity: 0, x: -width}, 0);
td1.from('#acm', 1.5, {opacity: 0, x: width}, 0);


td1.to('#year-10', 0.5, {opacity: 0, y: -60});
td1.from('#year-11', 0.5, {opacity: 0, y: 50});
td1.to('#year-11', 0.5, {opacity: 0, y: -60});
td1.from('.lights', 1, {scale: 0}, 2);
td1.from('#year-12', 0.5, {opacity: 0, y: 50});
td1.to('#year-12', 0.5, {opacity: 0, y: -60});
td1.from('#year-13', 0.5, {opacity: 0, y: 50});
td1.to('#year-13', 0.5, {opacity: 0, y: -60});

td1.from('#year-14', 0.5, {opacity: 0, y: 50});
td1.from('#hat', 0.5, {opacity: 0, y: -60}, 5);
td1.from('#diploma', 0.5, {opacity: 0, scale: 0}, 5)

td1.to('#year-14', 0.5, {opacity: 0, y: -60});
td1.to('#guitar', 1.5, {opacity: 0, x: width});
td1.to('#acm', 1.5, {opacity: 0, x: -width}, 6);
td1.to('#hat', 0.5, {opacity: 0, scale: 0}, 6);
td1.to('#diploma', 0.5, {opacity: 0, scale: 3}, 6);
td1.to('.lights', 1, {scale: 0}, 6);

td1.from('#year-15', 1.5, {opacity: 0, y: 50}, 6.5);
td1.to('#year-15', 0.5, {opacity: 0, y: -60});
td1.from('#year-16', 0.5, {opacity: 0, y: 50});
td1.to('#year-16', 0.5, {opacity: 0, y: -60});
td1.from('#year-17', 0.5, {opacity: 0, y: 50});
td1.to('#year-17', 0.5, {opacity: 0, y: -60});
td1.from('#year-18', 0.5, {opacity: 0, y: 50});
td1.to('#year-18', 0.5, {opacity: 0, y: -60});
td1.from('#year-19', 0.5, {opacity: 0, y: 50});



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
.setPin(".main-background-text")
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
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
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
        // onSlideShow: slideShownCallback
    });
});

