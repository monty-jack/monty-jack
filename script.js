new Typed("#typing", {

strings: [
"Tanjiro Kamado ⚔️",
"Full Stack Developer 💻",
"Anime Lover 🔥",
"Open Source Contributor 🚀"
],

typeSpeed: 60,
backSpeed: 40,
loop: true

});

document.addEventListener("mousemove", function(e){

let slash = document.createElement("div");

slash.style.position = "absolute";

slash.style.left = e.pageX + "px";

slash.style.top = e.pageY + "px";

slash.style.width = "4px";

slash.style.height = "40px";

slash.style.background = "cyan";

slash.style.transform = "rotate(45deg)";

slash.style.boxShadow = "0 0 20px cyan";

slash.style.pointerEvents = "none";

document.body.appendChild(slash);

setTimeout(() => {
slash.remove();
}, 150);

});

document.getElementById("slashBtn")
.addEventListener("click", ()=>{

for(let i=0;i<120;i++){

let p=document.createElement("div");

p.style.position="absolute";

p.style.width="8px";

p.style.height="8px";

p.style.background="cyan";

p.style.borderRadius="50%";

p.style.left=window.innerWidth/2+"px";

p.style.top=window.innerHeight/2+"px";

document.body.appendChild(p);

let x=(Math.random()-0.5)*1200;

let y=(Math.random()-0.5)*1200;

p.animate([

{
transform:"translate(0,0)",
opacity:1
},

{
transform:`translate(${x}px,${y}px)`,
opacity:0
}

],{

duration:1000

});

setTimeout(()=>{
p.remove();
},1000);

}

});
