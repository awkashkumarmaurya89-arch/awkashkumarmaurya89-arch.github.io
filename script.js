// Add your own projects by copying one object and changing its details.
const projects = [
 {title:"MR AI Assistant",category:"AI",icon:"◈",description:"A personal assistant exploring voice interaction, AI and useful desktop features.",link:"https://github.com/awkashkumarmaurya89-arch"},
 {title:"My Portfolio Website",category:"WEB",icon:"⌘",description:"A cyber-inspired personal website built with HTML, CSS and JavaScript.",link:"https://github.com/awkashkumarmaurya89-arch"},
 {title:"Future Build",category:"OTHER",icon:"✦",description:"A new idea in progress. More projects will appear here as I build them.",link:"https://github.com/awkashkumarmaurya89-arch"}
];
const cards=document.getElementById("cards");
document.getElementById("year").textContent=new Date().getFullYear();
function render(filter="all"){
 const list=projects.filter(p=>filter==="all"||p.category===filter);
 document.getElementById("count").textContent=String(list.length).padStart(2,"0")+" // BUILDS";
 cards.innerHTML=list.map((p,i)=>`<article class="card"><small>BUILD_${String(i+1).padStart(2,"0")} / ${p.category}</small><div class="symbol">${p.icon}</div><h3>${p.title}</h3><p>${p.description}</p><a href="${p.link}" target="_blank" rel="noreferrer">OPEN PROJECT ↗</a></article>`).join("");
}
document.querySelectorAll(".filters button").forEach(b=>b.addEventListener("click",()=>{document.querySelector(".filters .active").classList.remove("active");b.classList.add("active");render(b.dataset.filter)}));
render();