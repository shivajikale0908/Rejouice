function locoscroll(){
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
locoscroll()



function cursereffect(){
    var page1=document.querySelector("#page1-content")
    var curser=document.querySelector("#mouse")

page1.addEventListener("mousemove",function(data){
     gsap.to(curser,{
        x:data.x,
        y:data.y,
     })
})

page1.addEventListener("mouseenter",function(){
    gsap.to(curser,{
        scale:1,
        opacity:1
     })

})
page1.addEventListener("mouseleave",function(){
    gsap.to(curser,{
        scale:0,
        opacity:0
     })
})

}

cursereffect()


function mousefollow(){
    var page4=document.querySelector("#videocenter")
var cur=document.querySelector("#mosefollow")

page4.addEventListener("mousemove",function(dat){
     gsap.to(cur,{
        x:dat.x,
        y:dat.y,
     })
})

page4.addEventListener("mouseenter",function(){
    gsap.to(cur,{
        scale:1,
        opacity:1
     })

})
page4.addEventListener("mouseleave",function(){
    gsap.to(cur,{
        scale:0,
        opacity:0
     })
})

}
mousefollow()



function page2animation(){
    gsap.from("#page2 h5",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 47%",
            end:"top 46%",
            // markers:true,
            scrub:2
        }

        
    })

}
page2animation()

function page4animation(){
    gsap.from("#page4, h5",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            start:"top 47%",
            end:"top 46%",
            // markers:true,
            scrub:2
        },

        

        
    })

}
page4animation()


function slideris(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
      });
}
slideris()



var tl=gsap.timeline()
tl.from("#loader h3",{
    x:200,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl.to("#loader h3",{
    opacity:0,
    x:-10,
    duration:1,
    stagger:0.1,
})


tl.to("#loader",{
    opacity:0
})

tl.to("#loader",{
    display:"none"
})