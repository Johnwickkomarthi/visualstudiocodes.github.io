let a= document.getElementById("demo");
console.log(a);
a.setAttribute("class","demo1");

let demo=document.links;
console.log(demo);
console.log(demo[0]);
demo[0].setAttribute("href","https://www.youtube.com");

//document.body.innerHTML="<h2>hi prends</h2>";// this will make new page
document.body.innerHTML+="<h2>hi prends</h2>";// this will add the given DOM tree

document.body.innerHTML+="<ol><li>a</li><li>b</li><li>c</li></ol>";
document.body.innerHTML+="<table><tr><td>era</td><td>ela</td><td>vunnav</td></tr></table>"
let list=document.getElementsByTagName("ol");
list[0].style.color="orange";
let table=document.getElementsByTagName("table");
table[0].style.border="2px solid"
let tr=document.getElementsByTagName("td");
for (let i=0;i<tr.length;i++){
    tr[i].style.border="2px solid"
    tr[i].style.width="50px"
    tr[i].style.height="50px"
}


let para=document.createElement("p");
console.log(para);
para.textContent="em chestunnav";
document.body.appendChild(para)

let table1=document.createElement("table");
// console.log(table1);
table1.style.border="2px solid"
table1.style.width="500px";
table1.style.textAlign="center"
table1.style.borderCollapse="collapse";
document.body.appendChild(table1);

let caption=document.createElement("caption")
table1.appendChild(caption);
caption.textContent="Exam Result"
caption.style.border="2px solid"
let tr1=document.createElement("tr");
let td1=document.createElement("td");
let td2=document.createElement("td");
let td3=document.createElement("td");
let tr2=document.createElement("tr");
let td2_1=document.createElement("td");
let td2_2=document.createElement("td");
let td2_3=document.createElement("td");
let tr3=document.createElement("tr");
let td3_1=document.createElement("td");
let td3_2=document.createElement("td");
let td3_3=document.createElement("td");
table1.appendChild(tr1);
tr1.appendChild(td1);
tr1.appendChild(td2);
tr1.appendChild(td3);
table1.appendChild(tr2);
tr2.appendChild(td2_1);
tr2.appendChild(td2_2);
tr2.appendChild(td2_3);
table1.appendChild(tr3);
tr3.appendChild(td3_1);
tr3.appendChild(td3_2);
tr3.appendChild(td3_3);
td1.style.border="2px solid";
td2.style.border="2px solid";
td3.style.border="2px solid";
td2_1.style.border="2px solid";
td2_2.style.border="2px solid";
td2_3.style.border="2px solid";
td3_1.style.border="2px solid";
td3_2.style.border="2px solid";
td3_3.style.border="2px solid";
td1.textContent="name";
td2.textContent="ID";
td3.textContent="class";
td2_1.textContent="sai";
td2_2.textContent="201";
td2_3.textContent="mech";
td3_1.textContent="kiran";
td3_2.textContent="202";
td3_3.textContent="king";



























