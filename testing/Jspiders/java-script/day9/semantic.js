
let c="center"
let header=document.createElement("header");
let main=document.createElement("main");
let nav=document.createElement("nav");
let a1=document.createElement("a");
let a2=document.createElement("a");
let a3=document.createElement("a");
let image=document.createElement("img");
let aside=document.createElement("aside");
let section=document.createElement("section");
let figure=document.createElement("figure");
let figcaption=document.createElement("figcaption");
let details=document.createElement("details");
let summary=document.createElement("summary");
let line1=document.createElement("h5");
let line2=document.createElement("h5");
let line3=document.createElement("h5");
let mark=document.createElement("mark");
let p=document.createElement("p");
let time=document.createElement("time");
let footer=document.createElement("footer");
let iframe=document.createElement("iframe");
// main start 
document.body.appendChild(main);
// main ends 
// header start 
main.appendChild(header);
header.style.border="2px solid yellow"
header.textContent="THE HINDU"
header.style.textAlign="center"
header.style.fontSize="2rem"
// header ends 

// nav bar start 
document.body.appendChild(nav);
nav.style.border="2px dotted red";
nav.style.textAlign="center"
nav.appendChild(a1);
nav.appendChild(a2);
nav.appendChild(a3);
a1.textContent="sports";
a1.style.marginRight="1rem";
a1.setAttribute("href","..");
a2.textContent="eduation";
a2.style.marginRight="1rem";
a2.setAttribute("href","..");
a3.textContent="cultural";
a3.setAttribute("href","..");
// nav bar ends 

// aside starts 
document.body.appendChild(aside);
aside.style.border="2px solid "
aside.style.width="45vw";
aside.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error dolore quis, necessitatibus debitis corporis fugiat quisquam beatae, ex, sed iste earum suscipit voluptates deserunt ratione excepturi est quam nisi. Accusamus a exercitationem ex, quis maiores quasi atque officiis, earum at illum fugit voluptas quas beatae quos optio assumenda distinctio!"
// aside ends 

// section start 
document.body.appendChild(section);
section.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error dolore quis, necessitatibus debitis corporis fugiat quisquam beatae, ex, sed iste earum suscipit voluptates deserunt ratione excepturi est quam nisi. Accusamus a exercitationem ex, quis maiores quasi atque officiis, earum at illum fugit voluptas quas beatae quos optio assumenda distinctio!"
section.style.border="2px solid";
section.style.marginLeft="55vw";
section.style.marginTop="-75px";
// section ends 

// figure start 
document.body.appendChild(figure);
figure.appendChild(image);
image.setAttribute("href","....");
image.setAttribute("alt","...")
figure.appendChild(figcaption);
figcaption.textContent="image will be added";

// figure ends 

// details start
document.body.appendChild(details);
details.appendChild(summary);
summary.style.listStyle="none";
summary.style.cursor="pointer";
summary.textContent="lorem";
details.appendChild(line1);
details.appendChild(line2);
details.appendChild(line3);
line1.textContent="edi line one";
line2.textContent="edi line two";
line3.textContent="edi line three";
// details ends 

// mark start 
document.body.appendChild(mark);
mark.textContent="ore marku nuvvo pedda intu mark raaa- Billa";
// mark ends 

// time start 
document.body.appendChild(p);
p.textContent="the hindu opens @";
p.appendChild(time);
time.textContent="8.00 am";

// time ends 

// footer start 
document.body.appendChild(footer);
let h1=document.createElement("h1");
footer.appendChild(h1);
h1.textContent="copyright @ Johnwick"
h1.style.border="2px dotted";
h1.style.textAlign=c;

// footer ends 

// iframe start 
document.body.appendChild(iframe);
iframe.setAttribute("src","https://docs.oracle.com/en/java/javase/11/docs/api/index.html");
iframe.setAttribute("height","500px");
iframe.setAttribute("width","500px")
// iframe ends 


console.log("6"/"3");