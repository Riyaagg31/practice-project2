var tl = gsap.timeline()

tl.to("#nav h2, #nav-pr2 h4, #nav-pr3 h4",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2,

})

tl.from("#nav h2",{
    y:100,
    opacity:0,
    stagger:0.3,
})


tl.from("#nav-pr2 h4",{
    y:100,
    opacity:0,
    stagger:0.3,
})
tl.from("#nav-pr3 h4",{
    y:100,
    opacity:0,
    stagger:0.3,
})

tl.from("h1",{
   y:100,
   opacity:0,
   stagger:0.3, 
})


tl.to("button",{
    y:20,
    repeat:-1,
    duration:0.3,
    yoyo:true,
})

tl.to("#gallery #img",{
    repeat:-1,
    duration:0.3,
    yoyo:true,
})


