var heading=document.querySelector("h1");
var h1text=heading.textContent;
var n=h1text.split("");
var clutter="";
var index=n.length;
n.forEach(function(elem,idx){
    if(idx<(index/2)){
        clutter+=`<span class="hero">${elem}</span>`;
    }
    else {
        clutter+=`<span class="villain">${elem}</span>`;
    }
  
});
heading.innerHTML=clutter;

gsap.from(".hero",{
    duration:.85,
    opacity:0,
    y:100,
    stagger:0.35,
    ease:"expo.in"
})
gsap.from(".villain",{
    duration:.5,
    opacity:0,
    y:-100,
    stagger:-0.35,
    ease:"expo.in",
})


