function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()

var clutter = "";

document.querySelector("#page2>h1").textContent.split(" ").forEach(function(dets){
    clutter += `<span> ${dets} </span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})

gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
        marker:true
    },
    stagger:.2,
    color:`#fff`
})

function canvas(){
const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index){
  var data =`
  ./1.png
  ./2.png
  ./3.png
  ./4.png
  ./5.png
  ./6.png
  ./7.png
  ./8.png
  ./9.png
  ./10.png
  ./11.png
  ./12.png
  ./13.png
  ./14.png
  ./15.png
  ./16.png
  ./17.png
  ./18.png
  ./19.png
  ./20.png
  ./21.png
  ./22.png
  ./23.png
  ./24.png
  ./25.png
  ./26.png
  ./27.png
  ./28.png
  ./29.png
  ./30.png
  ./31.png
  ./32.png
  ./33.png
  ./34.png
  ./35.png
  ./36.png
  ./37.png
  ./38.png
  ./39.png
  ./40.png
  ./41.png
  ./42.png
  ./43.png
  ./44.png
  ./45.png
  ./46.png
  ./47.png
  ./48.png
  ./49.png
  ./50.png
  ./51.png
  ./52.png
  ./53.png
  ./54.png
  ./55.png
  ./56.png
  ./57.png
  ./58.png
  ./59.png
  ./61.png
  ./62.png
  ./63.png
  ./64.png
  ./65.png
  ./66.png
  ./67.png
  ./68.png
  ./69.png
  ./69.png


  `;
  return data.split("\n")[index];
}

const frameCount = 69;

const images = [];
const imageSeq = {
  frame:1,
};

for (let i = 0; i < frameCount; i++){
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});
images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()





var clutter = "";

document.querySelector("#page4>h1").textContent.split(" ").forEach(function(dets){
    clutter += `<span> ${dets} </span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span",{
    scrollTrigger:{
        trigger:`#page4>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
        marker:true
    },
    stagger:.2,
    color:`#fff`
})