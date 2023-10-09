var crsr = document.querySelector("#cursor")
var blured = document.querySelector("#blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blured.style.left = dets.x - 250 + "px"
    blured.style.top = dets.y - 250 + "px"

})


gsap.to("#nav",  {
    backgroundColor : "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        start: "top -10%",
        end: "end - 10%",
        scrub: 1
    }
}) 

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -250vh",
        end: "top -70%",
        scrub: 2
    }
})

